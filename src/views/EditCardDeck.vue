<template>
  <div class="container-center-horizontal">
    <SideNav />
    <div class="student-edit-card-deck-edit-existing-question screen">
      <Header2 :dashboardTitle="MyDashboard" />
      <div class="overlap-group5">
        <div class="left-container-editquestion">
          <div class="card-title">Edit Question</div>
          <div class="title">
            <div class="title-1 inter-semi-bold-black-18px">Title:</div>
            <div class="title-2">
              <div class="title-input">
                <input
                    class="html-2 inter-semi-bold-black-18px"
                    id="titleInput"
                    name="html"
                    placeholder="Key in title to question here"
                    type= "text"
                />
              </div>
            </div>
          </div>
          <div class="question">
            <div class="question-1 inter-semi-bold-black-18px">Question:</div>
            <div class="question-2">
              <div class="overlap-group-4">
                <div class="rectangle-14"></div>
                <input
                    class="how-is-headers-created-in-html-2 inter-semi-bold-black-18px"
                    id="questionInput"
                    name="howisheaderscreatedinhtml"
                    placeholder="Key in question here"
                    type= "text"
                />
              </div>
            </div>
          </div>
          <div class="answer">
            <div class="answer-1 inter-semi-bold-black-18px">Answer:</div>
            <div class="answer-2">
              <div class="overlap-group-5">
                <input
                    class="using-header-tags-such-as-h1-h2 inter-semi-bold-black-18px"
                    id="answerInput"
                    name="usingheadertagssuchash1h2"
                    placeholder="Key in answer here"
                    type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group-container">
          <button class="overlap-group-2" v-on:click="save()">
            <div class="save valign-text-middle inter-semi-bold-white-20px">SAVE</div>
          </button>
          <button class="overlap-group1-2" v-on:click="cancel()">
            <div class="cancel valign-text-middle inter-semi-bold-white-20px">CANCEL</div>
          </button>
        </div>
      </div>
      <div class="confirmed-questions">
        <div class="questions-classification" v-for="(item,index) in documents" :key="item" @click="selectIndex(index)">
        <div class="flex-row-2" v-if="index === this.selectedIndex">
          <div class="flex-col">
            <div class="html-1">{{item['title']}}</div>
            <div class="how-is-headers-created-in-html-1 valign-text-middle inter-semi-bold-black-28px">
              {{item['question']}}
            </div>
            <div class="answer-using-header-1 inter-normal-black-20px-2">Answer: {{item['answer']}}</div>
          </div>
          <div class="overlap-group-container">
            <button class="editdeck-delete-button" v-on:click="deleteCard(index)">
              <div class="delete valign-text-middle inter-semi-bold-white-20px">DELETE</div>
            </button>
          </div>
        </div>
        <div class="flex-row-1" v-else>
        <div class="flex-col">
            <div class="html-1">{{item['title']}}</div>
            <div class="how-is-headers-created-in-html-1 valign-text-middle inter-semi-bold-black-28px">{{item['question']}}
            </div>
            <div class="answer-using-header-1 inter-normal-black-20px-2">Answer: {{item['answer']}}</div>
        </div>
        <div class="overlap-group-container">
            <button class="editdeck-delete-button" v-on:click="deleteCard(index)">
                <div class="delete valign-text-middle inter-semi-bold-white-20px">DELETE</div>
            </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Header2 from "../components/Header2.vue"
import firebaseApp from "@/firebaseDetails";
import {getAuth} from "firebase/auth";
import VueSimpleAlert from "vue-simple-alert";
import {
  doc,
  getFirestore,
  collection,
  // getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  increment,
  getDoc
} from "firebase/firestore";
const auth = getAuth();
const db = getFirestore(firebaseApp);
var cardsArray = []



export default {
  name: "EditCardDeck",
  components: {
        SideNav,
        Header2
    },
  mounted(){
    document.getElementById('titleInput').value = ''
    document.getElementById('questionInput').value = ''
    document.getElementById('answerInput').value = ''
    cardsArray = [];
    cardsArray = JSON.parse(sessionStorage.getItem("cardDetails"))
    if (cardsArray === null){
      cardsArray = [];
    }
    this.displayCards(cardsArray)
  },
  data(){
    return{
      documents:[],
      selectedIndex:null,
    }
  },
  methods:{
    displayCards(cards){
      this.documents = cards;
    },
    selectIndex(index){
      this.selectedIndex = index;
      const cardChosen = this.documents[index]
      const chosenTitle = cardChosen['title']
      const chosenQuestion = cardChosen['question']
      const chosenAnswer = cardChosen['answer']
      document.getElementById('titleInput').value = chosenTitle
      document.getElementById('questionInput').value = chosenQuestion
      document.getElementById('answerInput').value = chosenAnswer
    },
    cancel(){
      document.getElementById('titleInput').value = ''
      document.getElementById('questionInput').value = ''
      document.getElementById('answerInput').value = ''
      this.selectedIndex = null
    },
    async save(){
      try{
        const titleInput = document.getElementById('titleInput').value
        const questionInput = document.getElementById('questionInput').value
        const answerInput  = document.getElementById('answerInput').value
        const userEmail = auth.currentUser.email
        const deckObj = JSON.parse(sessionStorage.getItem('deckObj'))
        const deckId = deckObj["deckId"]

        if (titleInput === '' || questionInput === '' || answerInput ===''){
          VueSimpleAlert.fire({
                  type: 'info',
                  title: 'There are empty fields, please fill them up',
                  timer: 3000,
          })
        } else{
          if(this.selectedIndex === null){
            const newItem = await addDoc(collection(db,"users",String(userEmail),"decks",deckId,"cards"),{
              question: questionInput,
              answer: answerInput,
              title: titleInput,
              boxType: 1,
              firstAnswered: false,
              isWrong:false
            })
            const tempCardDetails = {
              'answer':answerInput,
              'boxType':1,
              'firstAnswered':false,
              'isWrong': false,
              'question':questionInput,
              'title':titleInput,
              'id': newItem.id,
            }
            this.documents.push(tempCardDetails)
            cardsArray = this.documents
            const updateRef = doc(db,"users",userEmail,"decks",deckId)
            await updateDoc(updateRef,{
              totalCards: increment(1),
              estimatedTime: increment(1.5),
              uncertainCards: increment(1),
            })
          } else {
            const currentCardID = this.documents[this.selectedIndex]['id']
            this.documents[this.selectedIndex]['question'] = questionInput
            this.documents[this.selectedIndex]['answer'] = answerInput
            this.documents[this.selectedIndex]['title'] = titleInput
            const updateRef = doc(db,"users",userEmail,"decks",deckId,"cards",currentCardID)
            await updateDoc(updateRef,{
              question: questionInput,
              answer: answerInput,
              title: titleInput,
            })
            cardsArray = this.documents
          }
          this.cancel()
        }
      } catch(error){
        console.log(error)
        console.log("card creation/edit error")
      }
    },

    async deleteCard(index){
      try {
        const userEmail = auth.currentUser.email;
        const deckObj = JSON.parse(sessionStorage.getItem('deckObj'))
        const deckId = deckObj["deckId"]
        const cardId = this.documents[index]['id']
        const statusDoc = await getDoc(doc(db, "users", userEmail, "decks", deckId, "cards", cardId));
        const statusRef = statusDoc.data()
        const statusFirst = statusRef.firstAnswered
        const statusWrong = statusRef.isWrong
        const updateRef = doc(db, "users", userEmail, "decks", deckId)
        if (String(statusFirst) === 'false') {
          await updateDoc(updateRef, {
            totalCards: increment(-1),
            estimatedTime: increment(-1.5),
            uncertainCards: increment(-1),
          })
        } else if (String(statusWrong) === 'true'){
          await updateDoc(updateRef, {
            totalCards: increment(-1),
            estimatedTime: increment(-1.5),
            needsRecapping: increment(-1),
          })
        } else {
          await updateDoc(updateRef, {
            totalCards: increment(-1),
            estimatedTime: increment(-1.5),
          })
        }
        await deleteDoc(doc(db,"users",userEmail,"decks",deckId,"cards",cardId))
        if (index > -1) {
          this.documents.splice(index, 1);
          cardsArray = this.documents;
          sessionStorage.setItem("cardDetails",JSON.stringify(cardsArray))
        }
        this.cancel();
      } catch(error){
        console.log("card Deletion Error")
      }
    },

    test(index){
      console.log(index)
    }
  },
  props: [
        "MyDashboard"
  ]
};



</script>

<style scoped>
.student-edit-card-deck-edit-existing-question {
  /* align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 1024px;
  width: 1920px; */
  margin-left: 290px;
}

.overlap-group7 {
  height: 1030px;
  margin-top: -6px;
  position: relative;
  width: 1920px;
}

.background {
  background-color: var(--white);
  box-shadow: 0px 2px 8px #00000014;
  height: 1026px;
  left: -1px;
  position: absolute;
  top: 5px;
  width: 1922px;
}

.flex-row {
  align-items: center;
  display: flex;
  margin-right: 1px;
  min-width: 1429px;
}

.html {
  letter-spacing: 0;
  line-height: 10px;
  margin-bottom: 5.61px;
  min-height: 23px;
  width: 1186px;
}

.delete {
  letter-spacing: 0;
  line-height: 10px;
  text-align: center;
  width: 149px;
}
.crossBtnDashboard {
  margin-left: 43em;
}

.how-is-headers-created-in-html {
  align-self: flex-start;
  height: 51px;
  letter-spacing: 0;
  line-height: 10px;
  margin-left: 52.11px;
  margin-top: 11px;
  width: 1219px;
}

.overlap-group3 {
  height: 57px;
  margin-top: 17px;
  position: relative;
  width: 1420px;
}

.answer-using-header {
  left: 0;
  letter-spacing: 0;
  line-height: 10px;
  position: absolute;
  top: 30px;
  width: 1410px;
}

.overlap-group {
  align-items: center;
  background-color: var(--cinnabar);
  border-radius: 14px;
  display: flex;
  height: 55px;
  justify-content: flex-end;
  margin-left: 25px;
  min-width: 219px;
  padding: 0 34.7px;
}

.overlap-group1 {
  align-items: flex-start;
  background-color: var(--royal-blue);
  border-radius: 14px;
  display: flex;
  height: 53px;
  justify-content: flex-end;
  left: 1202px;
  min-width: 219px;
  padding: 9.6px 34.7px;
  position: absolute;
  top: 0;
}

.edit {
  letter-spacing: 0;
  line-height: 10px;
  text-align: center;
  width: 149px;
}

.flex-row-1 {
  align-items: flex-end;
  background-color: var(--humming-bird);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 237px;
  justify-content: space-evenly;
  /* left: 319px; */
  min-width: 1543px;
  /* padding: 19px 38.6px; */
  position: relative;
  margin-top: 2em;
  margin-bottom: 2em;
}

/* .overlap-group2 {
  padding: 23px 30.3px;
} */

.flex-row-2 {
  align-items: flex-start;
  background-color: var(--dull-lavender);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 237px;
  justify-content: space-evenly;
  /* left: 319px; */
  min-width: 1543px;
  /* padding: 19px 38.6px; */
  position: relative;
}

.flex-col {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  min-height: 178px;
  width: 1001px;
}

.html-1 {
  letter-spacing: 0;
  line-height: 10px;
  min-height: 23px;
  width: 836px;
  font-size: 25px;
  color: var(--eerie-black-22);
  font-family: var(--font-family-inter);
  font-style: normal;
  font-weight: bold;
}

.how-is-headers-created-in-html-1 {
  height: 37px;
  letter-spacing: 0;
  margin-top: 30px;
  width: 859px;
}

.answer-using-header-1 {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 10px;
  margin-top: 47px;
  min-height: 27px;
  width: 994px;
}

.overlap-group-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 8em;
  margin-bottom: 1em;
  min-height: 191px;
  width: 219px;
}

.editdeck-delete-button {
  align-items: center;
  background-color: #D6433B;
  border-radius: 14px;
  display: flex;
  height: 55px;
  min-width: 219px;
  margin-top: 26px;
  padding: 0 34.7px;
  cursor:pointer;
}

.editdeck-edit-button {
  align-items: center;
  background-color: var(--royal-blue);
  border-radius: 14px;
  display: flex;
  height: 53px;
  margin-left: 0.54px;
  margin-top: 83px;
  min-width: 219px;
  padding: 9.6px 34.7px;
  cursor: pointer;
}

.overlap-group5 {
  height: 348px;
  left: 326px;
  position: absolute;
  top: 123px;
  width: 1543px;
  background-color: var(--humming-bird);
  border-radius: 10px;
  box-shadow: 0px 4px 4px #00000040;
  height: 348px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  padding: 19px 38.6px;
}

.overlap-group-2 {
  align-items: center;
  background-color: var(--shamrock);
  border-radius: 14px;
  display: flex;
  height: 55px;
  left: 1281px;
  width: 220px;
  padding: 0 34.7px;
  position: absolute;
  top: 14px;
}

.confirmed-questions{
  position: relative;
  margin-top: 25em;
}

.save,
.cancel {
  letter-spacing: 0;
  line-height: 10px;
  text-align: center;
  width: 150px;
}

.overlap-group1-2 {
  align-items: center;
  background-color: var(--granite-gray);
  border-radius: 14px;
  display: flex;
  height: 55px;
  justify-content: flex-end;
  left: 1281px;
  min-width: 220px;
  padding: 0 34.9px;
  position: absolute;
  top: 279px;
}

.card-title {
  left: 36px;
  letter-spacing: 0;
  line-height: 10px;
  position: absolute;
  top: 35px;
  width: 432px;
  font-size: 25px;
  color: var(--eerie-black-22);
  font-family: var(--font-family-inter);
  font-style: normal;
  font-weight: bold;
}

.title {
  display: flex;
  height: 49px;
  left: 0;
  position: absolute;
  top: 75px;
  width: 1257px;
}

.title-1 {
  height: 19px;
  letter-spacing: 0;
  line-height: 10px;
  margin-top: 15px;
  text-align: right;
  width: 142.87px;
}

.title-2 {
  align-items: flex-start;
  display: flex;
  margin-left: 48.1px;
  min-width: 1066.27px;
}

.title-input {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 49px;
  min-width: 1064px;
  padding: 11px 21.9px;
}

.html-2 {
  background-color: transparent;
  border: 0;
  height: 19px;
  letter-spacing: 0;
  line-height: 10px;
  padding: 0;
  width: 462px;
}

.html-2::placeholder,
.how-is-headers-created-in-html-2::placeholder,
.using-header-tags-such-as-h1-h2::placeholder {
  color: #00000099;
}

.question {
  display: flex;
  height: 49px;
  left: 10px;
  position: absolute;
  top: 137px;
  width: 1275px;
}

.question-1 {
  height: 19px;
  letter-spacing: 0;
  line-height: 10px;
  margin-top: 25px;
  text-align: right;
  width: 142.87px;
}

.question-2 {
  align-items: flex-start;
  display: flex;
  height: 49.1px;
  margin-left: 38px;
  min-width: 1093.86px;
}

.overlap-group-4 {
  height: 49px;
  position: relative;
  width: 1092px;
}

.rectangle-14 {
  background-color: var(--white);
  border-radius: 10px;
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(-0.01deg);
  width: 1066px;
}

.how-is-headers-created-in-html-2 {
  background-color: transparent;
  border: 0;
  height: 19px;
  left: 22px;
  letter-spacing: 0;
  line-height: 10px;
  padding: 0;
  position: absolute;
  top: 18px;
  width: 1070px;
}

.answer {
  display: flex;
  height: 136px;
  left: 10px;
  position: absolute;
  top: 199px;
  width: 1247px;
}

.answer-1 {
  height: 19px;
  letter-spacing: 0;
  line-height: 10px;
  margin-top: 58px;
  text-align: right;
  width: 142.87px;
}

.answer-2 {
  align-items: flex-start;
  display: flex;
  margin-left: 37.9px;
  min-width: 1066.27px;
}

.overlap-group-5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 8px;
  display: flex;
  height: 136px;
  min-width: 1064px;
  padding: 16px 21.9px;
}

.using-header-tags-such-as-h1-h2 {
  background-color: transparent;
  border: 0;
  height: 28px;
  letter-spacing: 0;
  line-height: 10px;
  padding: 0;
  width: 828px;
}

.header {
  display: flex;
  height: 70px;
  left: 320px;
  position: absolute;
  top: 44px;
  width: 626px;
}

.title-3 {
  height: 70px;
  letter-spacing: 0;
  line-height: 70px;
  white-space: nowrap;
  width: 624px;
}

.bxhelp-circle {
  height: 79px;
  left: 1832px;
  position: absolute;
  top: 939px;
  width: 79px;
}

.left-container-editquestion {
    align-items: flex-start;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    min-height: 178px;
    width: 1001px;
}

</style>
