<template>
  <div id="titleHead">
    <h1></h1>
    <h1 id = "Deck Title">This is my deck title</h1>
    <div class="statistics">
      <h4 id="totalCards">Total Cards:NIL</h4>
      <h4 id="needsRecapping">Needs Recapping: NIL</h4>
      <h4 id="uncertainCards">Uncertain Cards: NIL</h4>
    </div>
    <h4 id="estimatedTime">Estimated time (min): NIL</h4>
    <div class = "buttonSet1">
      <button id="deleteDeck" type="button" v-on:click="deleteDeck()"> Delete Deck</button>
      <button id="back" type="button" v-on:click="back()">back</button>
    </div>
  </div> <br><br>
  <table id="cards">
    <tr>
      <th>View Questions</th>
    </tr>
  </table> <br><br>
  <div class = "buttonSet2">
    <button id="editDeck" type="button" v-on:click="edit()">edit</button>
    <button id="study" type="button">study</button>
  </div>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {doc,getDoc,getFirestore,collection,getDocs,deleteDoc} from "firebase/firestore";

const auth = getAuth();
const db = getFirestore(firebaseApp);



export default {
  name: "viewDeck",
  mounted(){
    onAuthStateChanged(auth, (user)=>{
      if(user){
        displayDetails(user.email)
      }
    });
    async function displayDetails(userEmail){
      //Load deck header and statistics
      const deckId = sessionStorage.getItem("deckId")
      console.log(deckId)
      const deckObj = await getDoc(doc(db,"users",String(userEmail),"decks",String(deckId)))
      const deckDetails = deckObj.data()
      document.getElementById("Deck Title").innerHTML = String(deckDetails.title)
      document.getElementById("totalCards").innerHTML = "Total Cards: " + String(deckDetails.totalCards)
      document.getElementById("needsRecapping").innerHTML = "Needs Recapping: "
          + String(deckDetails.needsRecapping)
      document.getElementById("uncertainCards").innerHTML = "Uncertain Cards: "
          + String(deckDetails.uncertainCards)
      document.getElementById("estimatedTime").innerHTML = "Estimated time (min): "
          + String(deckDetails.estimatedTime)

      // Load cards
      const userCards = await getDocs(collection(db,"users",String(userEmail),"decks",deckId,"cards"))
      if(!userCards.empty){
        let index = 1;
        userCards.forEach((docs) =>{
          const card = docs.data()
          const table = document.getElementById("cards");
          const row = table.insertRow(index)

          const question = card.question
          const cell1 = row.insertCell(0);
          cell1.style.border = "1px solid #000";
          cell1.innerHTML = question;
          index++;
        })
      }
    }
  },
  methods:{
    async back(){
      await this.$router.push({name: "Dashboard"})
    },
    async deleteDeck(){
      try{
        const userEmail = auth.currentUser.email
        const deckId = sessionStorage.getItem("deckId")
        await deleteDoc(doc(db,"users",String(userEmail),"decks",deckId));
        await this.$router.push({name: "Dashboard"});
      } catch(error){
        console.log("deck Deletion Error")
        console.log(error)
      }
    },
    async edit(){
      await this.$router.push({name:"cardsManagement"})
    }
  }
}
</script>

<style scoped>
table{
  font-family: "Times New Roman";
  color: #222C4B;
  border-collapse: collapse;
  width: 100%;
  background-color: white;
}

tr:nth-child(even){
  background-color: white;
}


th,td{
  border: 1px solid;
  text-align: center;
  padding: 8px;
  background-color: white;
}
thead,
tbody {
  display: block;
}

tbody {
  height: 150px;
  overflow: auto;
}

</style>