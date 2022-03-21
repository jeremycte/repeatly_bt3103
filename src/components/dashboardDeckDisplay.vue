<template>
  <div id="titleHead">
    <h1></h1>
    <h1 id = "Current">Decks</h1>
    <button id="addDeck" type="button" v-on:click="routeToCreateDeck()"> add Deck</button><br><br>
  </div>
  <table id="deckTable">
    <tr>
      <th>S.No</th>
      <th>title</th>
      <th>Total Cards</th>
      <th>Needs Recaping</th>
      <th>Uncertain Cards</th>
      <th>Estimated Time</th>
      <th>Tag</th>
      <th>Access</th>
    </tr>
  </table> <br><br>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {collection,getDocs,getFirestore} from "firebase/firestore";
import router from "@/router";

const auth = getAuth();
const db = getFirestore(firebaseApp);




export default {
  name: "dashboardDeckDisplay",
  mounted(){
    onAuthStateChanged(auth,(user)=>{
      if(user){
        display(user.email)
      }
    });
    async function display(userEmail){
      let userDecks = await getDocs(collection(db,"users",String(userEmail),"decks"));
      if (!userDecks.empty){
        var idList = []
        let index = 1
        userDecks.forEach((docs)=>{
          let deck = docs.data()
          let deckId = docs.id
          idList.push(deckId)
          const table = document.getElementById("deckTable");
          const row = table.insertRow(index);

          const title = deck.title
          const estimatedTime = deck.estimatedTime
          const needsRecapping = deck.needsRecapping
          const tag = deck.tag
          const totalCards = deck.totalCards
          const uncertainCards = deck.uncertainCards

          const cell1 = row.insertCell(0); const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2); const cell4 = row.insertCell(3);
          const cell5 = row.insertCell(4); const cell6 = row.insertCell(5);
          const cell7 = row.insertCell(6); const cell8 = row.insertCell(7);

          cell1.style.border = "1px solid #000"; cell2.style.border = "1px solid #000";
          cell3.style.border = "1px solid #000"; cell4.style.border = "1px solid #000";
          cell5.style.border = "1px solid #000"; cell6.style.border = "1px solid #000";
          cell7.style.border = "1px solid #000"; cell8.style.border = "1px solid #000";

          cell1.innerHTML = index; cell2.innerHTML=title; cell3.innerHTML = totalCards; cell4.innerHTML=needsRecapping;
          cell5.innerHTML=uncertainCards; cell6.innerHTML=estimatedTime; cell7.innerHTML=tag;

          const accessButt = document.createElement("button")
          accessButt.className = "bwt"
          accessButt.id = String(index);
          accessButt.innerHTML = "Access"
          accessButt.onclick = async function(){
            try{
              sessionStorage.setItem("deckId",String(idList[parseInt(accessButt.id) -1]))
              await router.push({name:'viewDeck'})
            }catch(error){
              console.log("Access deck button error")
              console.log(error)
            }
          }
          cell8.appendChild(accessButt)
          index++
        })
      }
    }
  },
  methods:{
    async routeToCreateDeck(){
      await this.$router.push({name:'createDeck'})
    }
  },
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
</style>