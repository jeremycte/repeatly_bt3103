<template>
  <button id="back" type="button" v-on:click="back()">Back</button><br><br>
  <div id = "firstContainer">
    <form id = "userForm">
      <div class = "formli">
        <label for="title">Title:</label>
        <input type="text" id = "title" required="" placeholder="Enter Title"> <br><br>
        <label for="question">Question:</label>
        <input type="text" id = "question" required="" placeholder="Enter Question"> <br><br>
        <label for="answer">Answer:</label>
        <input type="text" id = "answer" required="" placeholder="Enter Answer"> <br><br>
        <div class = "save">
          <button id="savebutton" type="button" v-on:click="save()">Save</button><br><br>
          <button id="cancelbutton" type="button" v-on:click="cancel()">Cancel</button><br><br>
        </div>
      </div>
    </form>
  </div>
  <br><br>
  <table id="cards">
    <tr>
      <th>Title</th>
      <th>Question</th>
      <th>Answer</th>
      <th>Edit?</th>
      <th>Delete?</th>
    </tr>
  </table> <br><br>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  increment,
  getDoc
} from "firebase/firestore";

const auth = getAuth();
const db = getFirestore(firebaseApp);
var currentCardID = null


async function displayCards(userEmail){
  const deckId = sessionStorage.getItem("deckId")
  const cardsObj = await getDocs(collection(db,"users",String(userEmail),"decks",String(deckId),"cards"))
  if (!cardsObj.empty){
    var cardIdList = []
    let index = 1;
    const table = document.getElementById("cards")
    clearTable(table)
    cardsObj.forEach((docs)=>{
      const card = docs.data()
      const cardId = docs.id
      cardIdList.push(cardId)
      const row = table.insertRow(index)

      const question = card.question
      const answer = card.answer
      const cardTitle = card.title

      const cell1 = row.insertCell(0);const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);

      cell1.style.border = "1px solid #000"; cell2.style.border = "1px solid #000";
      cell3.style.border = "1px solid #000"; cell4.style.border = "1px solid #000";
      cell5.style.border = "1px solid #000";

      cell1.innerHTML = cardTitle; cell2.innerHTML=question; cell3.innerHTML = answer;

      const deleteButt = document.createElement("button")
      deleteButt.className = "deletebwt"
      deleteButt.id = "deletebwt"+ String(index)
      deleteButt.innerHTML = "Delete"
      deleteButt.onclick = function(){
        deleteStatus(userEmail,deckId,cardId)
      }
      cell5.appendChild(deleteButt)

      const editButt = document.createElement("button")
      editButt.className = "editbwt"
      editButt.id = "editbwt" + String(index)
      editButt.innerHTML = "Edit"
      editButt.onclick = function(){
        document.getElementById("title").value = String(cardTitle)
        document.getElementById("question").value = String(question)
        document.getElementById("answer").value = String(answer)
        currentCardID = cardId
      }
      cell4.appendChild(editButt)
    })
  }
}
async function deleteStatus(email,deckID,cardID){
  try{
    const statusDoc = await getDoc(doc(db,"users",email,"decks",deckID,"cards",cardID));
    console.log(statusDoc)
    const statusRef = statusDoc.data()
    console.log(statusRef)
    const status = statusRef.firstAnswered
    console.log(status)
    const updateRef = doc(db,"users",email,"decks",deckID)
    if (String(status) === 'false'){
      await updateDoc(updateRef,{
        totalCards: increment(-1),
        estimatedTime: increment(-1.5),
        uncertainCards:increment(-1),
      })
    } else {
      await updateDoc(updateRef, {
        totalCards: increment(-1),
        estimatedTime: increment(-1.5),
      })
    }
    deleteCard(email,deckID,cardID)
  }catch(error){
    console.log(error)
  }
}
async function deleteCard(email,deckID,cardID){
  await deleteDoc(doc(db,"users",email,"decks",deckID,"cards",cardID))
  let tb = document.getElementById("cards")
  while (tb.rows.length > 1){
    tb.deleteRow(1)
  }
  displayCards(email)
}
function clearTable(table){
  const rowCount = table.rows.length
  for (let i = rowCount-1; i>0;i--){
    table.deleteRow(i);
  }
}

export default {
  name: "editCards",
  mounted(){
    onAuthStateChanged(auth,(user)=>{
      if(user){
        displayCards(user.email)
      }
    });
  },
  methods: {
    async back() {
      await this.$router.push({name: "viewDeck"})
    },
    cancel: function(){
      document.getElementById("title").value = ""
      document.getElementById("question").value = ""
      document.getElementById("answer").value = ""
      currentCardID = null
    },
    async save(){
      try{
        const questionInput = document.getElementById("question").value
        const answerInput = document.getElementById("answer").value
        const titleInput = document.getElementById("title").value
        const userEmail = auth.currentUser.email
        const deckId = sessionStorage.getItem("deckId");
        if (currentCardID == null){
          await addDoc(collection(db,"users",String(userEmail),"decks",deckId,"cards"),{
            question: questionInput,
            answer: answerInput,
            title: titleInput,
            boxType: 1,
            firstAnswered: false,
            isWrong:false
          })
          const updateRef = doc(db,"users",userEmail,"decks",deckId)
          await updateDoc(updateRef,{
            totalCards: increment(1),
            estimatedTime: increment(1.5),
            uncertainCards: increment(1),
          })
        } else {
          const updateRef = doc(db,"users",userEmail,"decks",deckId,"cards",currentCardID)
          await updateDoc(updateRef,{
            question: questionInput,
            answer: answerInput,
            title: titleInput,
          })
        }
        document.getElementById("title").value = ""
        document.getElementById("question").value = ""
        document.getElementById("answer").value = ""
        currentCardID = null
        displayCards(userEmail)
      }catch(error){
        console.log("create/edit error")
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
form{
  text-align: center;
  align-items: center;
  margin: auto;
}

.formli{
  display: inline-block;
  text-align: right;
}

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