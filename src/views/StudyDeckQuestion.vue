<template>
<div class="container-center-horizontal">
    <SideNavStudy />
    <div class="student-study-deck-question screen">
      <div class="headerDashboardTitle">
        <h1 class="dashboard-title inter-bold-heavy-metal-50px">{{MyDashboard}}</h1>
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
                <div class="question-field inter-bold-white-30px" id="question-field">Question will be inside here</div>
            </div>
        </div>
        <div class="overlap-group-txtareaStudyDeck border-1px-quick-silver">
        <textarea class="deck-description" name="deckdescription" placeholder="Enter Your Answer" type="text"
                  id="questionArea"></textarea>
      </div>
      <button class="checkAnswerStudybtn" v-on:click="checkAnswers()">
        <div class="frame-1-checkanswers">
          <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Check Answers</h1>
        </div>
      </button>
    </div>
    
  </div>
  </div>

  <div v-if="visible" class="help">
      <textarea disabled class="help-description inter-normal-black-20px ">Text Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with HelpText Box Bro with Help</textarea>
  </div>
  <img class="help-icon" src="../../img/help-icon.png" @click="visible = !visible"/>
  </div>
</template>

<script>
import SideNavStudy from "../components/SideNavStudy.vue"
import cardClassList from "@/cardClassList";
import router from "../../router/router";

var cardsArray = []


export default {
  name: "StudyDeck",
  components: {
        SideNavStudy
    },
  mounted(){
    const classifier = new cardClassList()
    cardsArray = JSON.parse(sessionStorage.getItem("cardDetails"))
    const cardOrder = JSON.parse(sessionStorage.getItem("questionOrder"))
    classifier.addCardSet(cardsArray)
    const retryCard = JSON.parse(sessionStorage.getItem("retryQuestion"))
    var chosenCard;
    if (!retryCard){
      chosenCard = classifier.displayCard()
    } else {
      chosenCard = JSON.parse(sessionStorage.getItem("chosenCard"))
    }
    if(typeof chosenCard === "undefined"){
      sessionStorage.setItem("deckCompleted",JSON.stringify(true))
      router.push({name:'StudentStudyDeckStats'})
    } else {
      if (!cardOrder.includes(chosenCard.id)){
        cardOrder.push(chosenCard.id)
      }
      const studyingCards = classifier.flatten()
      sessionStorage.setItem("studyingCards",JSON.stringify(studyingCards))
      sessionStorage.setItem("chosenCard",JSON.stringify(chosenCard))
      sessionStorage.setItem("retryQuestion",JSON.stringify(false))
      sessionStorage.setItem("questionOrder",JSON.stringify(cardOrder))
      document.getElementById('question-field').innerHTML = chosenCard.question
      document.getElementById('category-description').innerHTML = "Mastery level " + String(chosenCard.boxType)
    }
  },
  methods:{
    checkAnswers(){
      sessionStorage.setItem("givenAnswer",String(document.getElementById("questionArea").value))
      document.getElementById("questionArea").value = '';
      router.push({name:'StudyDeckAnswer'})
    }
  },
  data: () => ({
    visible: false
  }),
  props: [
      "MyDashboard"
  ]
};
</script>


<style>
.headerDashboardTitle {
    display: flex;
    position: relative;
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
}
.student-study-deck-question {
    /* align-items: flex-start; */
    /* display: flex; */
    height: 856px;
    min-width: 1491px;
    margin-left: 200px;
  }

.end-study {
    letter-spacing: 0;
    min-height: 70px;
    width: 153px;
    cursor: pointer;
    font-family: var(--font-family-inter);
    font-size: 24px;
    color: rgba(160, 170, 168, 1);
    margin-top: 2px;
}

.create-deck-overlap-group {
    align-items: flex-start;
    display: flex;
    height: 856px;
    min-width: 1491px;
}

.question-rectangle {
    height: 440px;
    width: 622px;
    background-color: var(--navy-blue);
    border-radius: 40px;
    margin-left: 8em;
    margin-top: 2em;
    box-shadow: 0px 2px 8px #00000022;
}

.question-field {
    margin-top: 30%;
    /* display: block; */
    text-align: center;
    font-size: 60px;
    /* word-break: break-all; */
}
  
.group-162547 {
    align-items: flex-start;
    display: flex;
    height: 856px;
    justify-content: center;
    min-width: 1485px;
    margin-top: 12px;
}

.study-deck-group {
    /* align-items: flex-start; */
    background-color: var(--humming-bird);
    border-radius: 40px;
    box-shadow: 0px 2px 8px #00000022;
    /* display: flex; */
    /* height: 858px; */
    margin-top: -1px;
    min-width: 1487px;
    padding: 26px 47px;
}

.crossBtnDashboard {
    height: 60px;
    width: 60px;
    margin-left: 57em;
    margin-top: 10px;
}
.study-deck-inner {
    display: flex;
}

.frame-1-checkanswers {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-left: 67.2px;
    margin-top: 22.7px;
}

.back-arrow {
    height: 54px;
    width: 51px;
    margin-right: 18px;
    cursor: pointer;
}


.overlap-group-txtareaStudyDeck {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px #00000022;
    display: flex;
    height: 206px;
    margin-top: 28px;
    margin-left: 22em;  
    width: 622px;
    padding: 13px 20.2px;
}

.category-description {
  text-align: center;
  margin-top: 5%;
  font-size: 28px;
  text-decoration: underline;
}

.studyDeck-titleBtn {
  height: 34px;
  letter-spacing: 0;
}

.checkAnswerStudybtn {
  background-color: var(--shamrock);
  border-radius: 25px;
  border: none;
  height: 74px;
  width: 312px;
  cursor: pointer;
  align-items: flex-start;
  box-shadow: 0px 2px 8px #00000022;
  margin-top: 29px;
  display: flex;
  margin-left: 36%;
}
</style>