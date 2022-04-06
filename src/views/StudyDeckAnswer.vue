<template>
  <div class="container-center-horizontal">
    <SideNavStudy />
    <div class="student-study-deck-answer screen">
        <div class="headerDashboardTitle">
        <h1 class="dashboard-title inter-bold-heavy-metal-50px">Answer</h1>
        <router-link to="/home">
        <img class="crossBtnDashboard" src="../../img/cross-arrow.png" />
        </router-link>
    </div>
    <div class="group-162547">
        <div class="study-deck-group">
            <div class="study-deck-inner">
                <a @click="$router.push({name:'StudentStudyDeckStats'})">
                <img class="back-arrow" src="../../img/back-arrow.png" />
                <h1 class="end-study inter-semi-bold-edward-24px">End Study<br>Session</h1>
                </a>
                <div class="question-rectangle">
                    <div class="category-description inter-bold-white-30px" id="category-description">Category 1</div>
                    <div class="question-field inter-bold-white-30px" id="question-field">Answer will be here</div>
                </div>
            </div>
            <div class="overlap-group-txtareaStudyDeck border-1px-quick-silver">
                <div class="your-answer-field inter-semi-bold-lightgray-28px" id="answer-field">Your answer:</div>
                <div class="displayed-answer inter-semi-bold-black-28px" id="answer-field2">Test</div>
            </div>
        <div class="verification">
            <button class="correct-button" v-on:click="correct()">
                <img class="icon-check_mark" src="../../img/StudyDeckAnswer/subway-tick-1@2x.png" />
            </button>
            <button class="redo-button" v-on:click="retry()">
                <img class="icon-try-again" src="../../img/StudyDeckAnswer/reload.png" />
            </button>
            <button class="wrong-button" v-on:click="wrong()">
                <img class="icon-wrong" src="../../img/StudyDeckAnswer/vector-81@2x.png" />
            </button>
          </div>
        </div>
    </div>
    </div> 
  </div>
</template>

<script>
import SideNavStudy from "../components/SideNavStudy.vue"
import cardClassList from "@/cardClassList";
import router from "../../router/router";

var cardsArray = []
export default {
  name: "StudyDeckAnswer",
  components: {
        SideNavStudy
  },
  data(){
    return{
      nativeClassifer: null,
      chosenCardDetails: null
    }
  },
  mounted(){
    const classifier = new cardClassList()
    this.nativeClassifer = classifier;
    cardsArray = JSON.parse(sessionStorage.getItem("studyingCards"))
    this.nativeClassifer.addCardSet(cardsArray)
    const chosenCard = JSON.parse(sessionStorage.getItem('chosenCard'))
    this.chosenCardDetails = chosenCard
    const answerGiven = sessionStorage.getItem('givenAnswer')
    document.getElementById('question-field').innerHTML = chosenCard.answer
    document.getElementById('answer-field2').innerHTML = answerGiven;
    document.getElementById('category-description').innerHTML = "Mastery level " + String(chosenCard.boxType)
  },
  methods:{
    correct(){
      this.nativeClassifer.promote(this.chosenCardDetails)
      const outputArray = this.nativeClassifer.flatten()
      sessionStorage.setItem("cardDetails",JSON.stringify(outputArray))
      if(this.nativeClassifer.checkDone()){
        router.push({name:'StudentStudyDeckStats'})
      } else {
        router.push({name:"StudyDeck"})
      }
    },
    retry(){
      this.nativeClassifer.retry(this.chosenCardDetails)
      sessionStorage.setItem("retryQuestion",JSON.stringify(true))
      const outputArray = this.nativeClassifer.flatten()
      sessionStorage.setItem("cardDetails",JSON.stringify(outputArray))
      sessionStorage.setItem("chosenCard",JSON.stringify(this.chosenCardDetails))
      router.push({name:"StudyDeck"})
    },
    wrong(){
      this.nativeClassifer.demote(this.chosenCardDetails)
      const outputArray = this.nativeClassifer.flatten()
      console.log(outputArray)
      sessionStorage.setItem("cardDetails",JSON.stringify(outputArray))
      router.push({name:"StudyDeck"})
    }
  }
};
</script>

<style scoped>
.question-field {
    margin-top: 26%;
    text-align: center;
}
.category-description {
  text-align: center;
  margin-top: 5%;
  font-size: 28px;
  text-decoration: underline;
}
.overlap-group-deckans {
    background-size: 100% 100%;
    margin-top: -0.15px;
    position: relative;
    width: 1124px;
}
.student-study-deck-answer {
    /* align-items: flex-start; */
    /* display: flex; */
    min-height: 1000px;
    min-width: 1491px;
    margin-left: 200px;
  }

.verification {
    display: flex;
    height: 110px;
    text-align: center;
    margin-top: 18px;
    width: 622px;
    margin-left: 22em;
    align-items: center;
    justify-content: space-around;
}

.correct-button {
  background-color: var(--shamrock);
  border-radius: 20px;
  border:none;
  cursor: pointer;
  display: flex;
  height: 100px;
  width: 150px;
}

.redo-button {
  background-color: var(--mustard);
  border-radius: 20px;
  border:none;
  cursor: pointer;
  display: flex;
  height: 100px;
  width: 150px;
}

.icon-check_mark {
  height: 58.99px;
  margin-left: 43px;
  margin-top: 22px;
}

.icon-try-again {
  height: 58.99px;
  margin-left: 39px;
  margin-top: 19px;

}

.icon-wrong {
  height: 45.99px;
  margin-left: 47px;
  margin-top: 28px;
}


.wrong-button {
  background-color: #D6433B;
  align-items: flex-start;
  border: none;
  display: flex;
  width: 150px;
  height: 100px;
  border-radius: 20px;
  cursor: pointer;
}

.icon-close {
  position: absolute;
  margin-left: 44.6px;
  margin-top: 24.5px;
  width: 57px;
}

.your-answer-field {
    text-align: center;
    font-size: 35px;
    margin-top: 10px;
} 

.displayed-answer {
    font-size: 60px;
    margin-block: auto;
    width: fit-content;
}

.overlap-group-txtareaStudyDeck {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px #00000022;
    align-items: center;
    flex-direction: column;
    height: 206px;
    margin-top: 28px;
    margin-left: 22em;
    width: 622px;
    padding: 13px 20.2px;
  }
  
</style>
