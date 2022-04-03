<template>
    <div class="container-center-horizontal">
        <SideNav />

        <div class="student-dashboard-homepage screen">
            <div class="headerDashboardTitle">
            <h1 class="dashboard-title inter-bold-heavy-metal-50px">{{MyDashboard}}</h1>
            <router-link to="/home">
                <img class="crossBtnDashboard" src="../../img/cross-arrow.png" />
            </router-link>
            </div>
        <div class="study-deck-group">
            <div class="study-deck-inner">
                <div class="deck-cards-info">
                    <div class="card-title inter-semi-bold-heavy-metal-36px" id="Deck Title">Title</div>
                    <div class="flex-row-cards-info">
                        <div class="total-cards inter-semi-bold-heavy-metal-25px" id="totalCards">Total Cards: nill</div>
                        <div class="needs-recaping inter-semi-bold-mustard-25px" id="needsRecapping">Needs Recapping: null</div>
                        <div class="uncertain-cards inter-semi-bold-mexican-red-25px" id="uncertainCards">Uncertain Cards: NA</div>
                    </div>
                    <div class="estimated-time inter-semi-bold-heavy-metal-25px" id="estimatedTime">Estimated Time (min): NA</div>
                </div>
                <button class="deleteCardDeckbtn" v-on:click="deleteDeck()">
                    <div class="frame-1-delanswers">
                        <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Delete</h1>
                    </div>
                </button>
            </div>
            <div class="overlap-group-txtareaViewDeck border-1px-quick-silver" style="overflow-y: scroll; height:500px">
              <template v-if="loading">
              <p class="questions inter-bold-black-28px" v-for="item in documents" :key="item">{{item}}</p>
              </template>
            </div>
            <div class="viewCardDeckBtns">
                <button class="editBtn" v-on:click="editDeck()">
                    <div class="frame-1-editanswers">
                    <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Edit Deck</h1>
                    </div>
                </button>
                <button class="studyBtn">
                    <div class="frame-2-study">
                    <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Study Deck</h1>
                    </div>
                </button>
            </div>
        </div>

        </div>
    </div>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {getFirestore, collection, getDocs, doc, deleteDoc,getDoc} from "firebase/firestore";
import SideNav from "../components/SideNav.vue";
import router from "../../router/router";

const auth = getAuth();
const db = getFirestore(firebaseApp);
var refDoc = [];
var cardsObjArray = []



async function displayDetails(userEmail,deckObj){
  try{
    const deckId = deckObj["deckId"]
    const deckRef = doc(db,"users",userEmail,"decks",deckId)
    const deckResult = await getDoc(deckRef)
    const deckData = deckResult.data()
    const dispTitle = deckData.title
    const dispTotalCards = deckData.totalCards
    const dispEstimatedTime = deckData.estimatedTime
    const dispNeedsRecapping = deckData.needsRecapping
    const dispUncertainCards = deckData.uncertainCards

    document.getElementById("Deck Title").innerHTML = dispTitle
    document.getElementById("totalCards").innerHTML = 'Total Cards: ' + dispTotalCards
    document.getElementById("estimatedTime").innerHTML = 'Estimated Time (min): ' + dispEstimatedTime
    document.getElementById("needsRecapping").innerHTML = 'Needs Recapping: ' + dispNeedsRecapping
    document.getElementById("uncertainCards").innerHTML = 'Uncertain Cards: ' + dispUncertainCards;
  }catch (error){
    console.log("display deck stats error")
  }

}

async function getCards(userEmail,deckObj){
  try{
    const deckId = deckObj["deckId"]
    const userCards = await getDocs(collection(db,"users",String(userEmail),"decks",deckId,"cards"))
    if(!userCards.empty) {
      userCards.forEach((docs) => {
        const card = docs.data()
        const cardId = docs.id
        const question = card.question
        const answer = card.answer
        const cardTitle = card.title
        const boxType = card.boxType
        const firstAnswered = card.firstAnswereed
        const isWrong = card.isWrong
        const tempCardDetails = {
          'answer':answer,
          'boxType':boxType,
          'firstAnswered':firstAnswered,
          'isWrong': isWrong,
          'question':question,
          'title':cardTitle,
          'id':cardId
        }
        cardsObjArray.push(tempCardDetails)
        refDoc.push(question)
      })
      sessionStorage.setItem("cardDetails",JSON.stringify(cardsObjArray))

    }
  }catch(error){
    console.log(error)
    console.log("get cards error")
  }
}



export default {
  name: "ViewCardDeck",
  components: {
      SideNav
  },
  props: [
      "MyDashboard"
  ],
  mounted() {
    const deckObj = JSON.parse(sessionStorage.getItem('deckObj'))
    refDoc = [];
    this.displayCards(deckObj)
  },
  data(){
    return{
      loading: false,
      documents:[]
    }
  },
  methods:{
    async displayCards(deckObj){
      onAuthStateChanged(auth,async (user) => {
        if (user) {
          cardsObjArray = [];
          await displayDetails(user.email,deckObj);
          await getCards(user.email,deckObj)
          this.documents = refDoc
          this.loading = true;
        }
      })
    },
    async deleteDeck(){
      try{
        const deckObj = JSON.parse(sessionStorage.getItem('deckObj'))
        const userEmail = auth.currentUser.email
        const deckId = deckObj["deckId"]
        await deleteDoc(doc(db,"users",String(userEmail),"decks",deckId));
        sessionStorage.clear();
        await router.push({name:'Home'})
      } catch (error){
        console.log("delete deck error")
      }
    },
    async editDeck(){
      try{
        await router.push({name:'EditCardDeck'})
      }catch(error){
        console.log(error);
      }
    }
  }
}
</script>


<style scoped>
.viewCardDeckBtns {
    display: flex;
}
.overlap-group-txtareaViewDeck {
    /* align-items: flex-start; */
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px #00000022;
    /* display: flex; */
    height: 32em;
    margin-top: 28px;
    margin-left: 2em;
    width: 83em;
    padding: 8px 20.2px;
    text-align: center;
}

.deck-cards-info {
    align-items: flex-start;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    margin-left: 2em;
    margin-top: 1em;
    min-height: 153px;
    width: 726px;
}

.card-title {
  letter-spacing: 0;
  line-height: 50.4px;
  min-height: 50px;
  white-space: nowrap;
}

.questions {
    margin-top: 1em;
}

.flex-row-cards-info {
  align-items: flex-start;
  display: flex;
  height: 36px;
  margin-top: 13px;
  min-width: 716px;
}

.total-cards {
  letter-spacing: 0;
  line-height: 35px;
  min-height: 35px;
  min-width: 181px;
  white-space: nowrap;
}

.needs-recaping {
  letter-spacing: 0;
  line-height: 35px;
  margin-left: 41px;
  min-height: 35px;
  min-width: 226px;
  white-space: nowrap;
}

.uncertain-cards {
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 35px;
  margin-left: 41px;
  min-height: 35px;
  min-width: 227px;
  white-space: nowrap;
}

.estimated-time {
  letter-spacing: 0;
  line-height: 35px;
  margin-top: 19px;
  min-height: 35px;
  white-space: nowrap;
}

.deleteCardDeckbtn {
    background-color: var(--red);
    border-radius: 25px;
    height: 74px;
    width: 200px;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 29px;
    display: flex;
    margin-left: 10em;
}

.frame-1-delanswers {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 4em;
    margin-top: 26.7px;
}

.frame-1-editanswers {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 5em;
    margin-top: 26.7px;
}

.frame-2-study {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 4em;
    margin-top: 26.7px;
}

.studyBtn {
    background-color: var(--shamrock);
    border-radius: 25px;
    height: 74px;
    width: 16em;
    margin-left: 19em;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 29px;
    display: flex;
}

.editBtn {
    background-color: var(--navy-blue);
    border-radius: 25px;
    height: 74px;
    width: 16em;
    margin-left: 19em;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 29px;
    display: flex;
}
</style>