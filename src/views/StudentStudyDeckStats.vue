<template>
<div class="container-center-horizontal">
    <SideNavStudy />
    <div class="student-study-deck-question screen">
      <div class="headerDashboardTitle">
        <h1 class="dashboard-title inter-bold-heavy-metal-50px">Study Statistics</h1>
      </div>
    <div class="group-162547">
    <div class="study-deck-group">
        <div class="study-deck-inner">
            <div class="question-rectangle"> 
                <div class="items-in-rectangle">
                    <div class="cards-studied-3-cards-studentstats inter-semi-bold-white-28px" id="cardsStudied">
                      Cards Studied: __ cards</div>
                    <div class="cards-tried-placeholder inter-semi-bold-white-28px" id="cardStatsDisplay">
                      Placeholder for number of tries taken for each card</div>
                    <div class="cards-left-8-cards-studentstats inter-semi-bold-white-28px" id="cardsUnattempted">
                      Cards Left Unattempted: __ cards</div>
                </div>
            </div>
        </div>
        <div class="overlap-group-txtareaStudyDeck border-1px-quick-silver">
            <div class="motivational-statement inter-semi-bold-black-28px" id="answer-field2">Motivational Statement Here</div>
        </div>
      <button class="checkAnswerStudybtn">
        <div class="frame-1-checkanswers">
          <router-link to="/view-card-deck">
          <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Return to Deck</h1>
          </router-link>
        </div>
      </button>
    </div>
    
  </div>
  </div>
  </div>
</template>

<script>
import SideNavStudy from "../components/SideNavStudy.vue"
import firebaseApp from "@/firebaseDetails";
import {getAuth} from "firebase/auth";
import {
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
const auth = getAuth();
const db = getFirestore(firebaseApp);


async function updateDetails(cardsArray,cardBoxMap){
  try{
    let needsRecapping = 0;
    let uncertainCards = 0;
    let anyChange = false;
    let cardsVisited = 0;
    let statsOuputArray = []

    const deckObj = JSON.parse(sessionStorage.getItem('deckObj'))
    const deckId = deckObj["deckId"]
    const userEmail = auth.currentUser.email
    const cardOrder = JSON.parse(sessionStorage.getItem('questionOrder'))

    for (let i = 0; i < cardsArray.length; i++) {
      let stringDisplay = '';
      const currentCard = cardsArray[i]
      const currentCardId = currentCard.id
      const currentCardBoxType = currentCard.boxType
      const currentCardFirstAnswered = currentCard.firstAnswered
      const currentCardIsWrong = currentCard.isWrong

      if (currentCardIsWrong === true){
        needsRecapping = needsRecapping + 1
      }
      if (currentCardFirstAnswered === false){
        uncertainCards = uncertainCards + 1
      }

      let triesString
      if (currentCard.tries > 1){
        const improvement = ', Mastery level ' + String(cardBoxMap.get(currentCardId)) + '-> '
            + String(currentCardBoxType)
        triesString = String(currentCard.tries) + " tries" + improvement + '<br />'
        anyChange = true
        cardsVisited += 1
        const cardIndex = cardOrder.indexOf(currentCardId)
        stringDisplay += "Card "+ (cardIndex +1) + ': ' + triesString
        statsOuputArray[cardIndex] = stringDisplay
      } else if (currentCard.tries >0){
        const improvement = ', Mastery level ' + String(cardBoxMap.get(currentCardId)) + '-> '
            + String(currentCardBoxType)
        triesString = String(currentCard.tries) + " tries" + improvement + '<br />'
        anyChange = true
        cardsVisited += 1
        const cardIndex = cardOrder.indexOf(currentCardId)
        stringDisplay += "Card "+ (cardOrder.indexOf(currentCardId) +1)  + ': ' + triesString
        statsOuputArray[cardIndex] = stringDisplay
      }



      const currentCardUpdateRef = doc(db,"users",userEmail,"decks",deckId,"cards",currentCardId);
      await updateDoc(currentCardUpdateRef,{
        boxType: currentCardBoxType,
        firstAnswered: currentCardFirstAnswered,
        isWrong: currentCardIsWrong,
      })
    }

    if (anyChange){
      let stringDisplayResult = ''
      for (let i = 0; i < statsOuputArray.length; i++) {
        stringDisplayResult += statsOuputArray[i]
      }
      document.getElementById("cardStatsDisplay").innerHTML = stringDisplayResult
      document.getElementById("cardsStudied").innerHTML = 'Cards Studied: '+cardsVisited+' cards'
      document.getElementById("cardsUnattempted").innerHTML = 'Cards Left Unattempted: '
          + uncertainCards +' cards'
    } else {
      document.getElementById("cardStatsDisplay").innerHTML = 'You did not study any cards'
      document.getElementById("cardsStudied").innerHTML = ''
      document.getElementById("cardsUnattempted").innerHTML = ''
    }
    const currentDeckUpdateRef = doc(db,"users",userEmail,"decks",deckId);
    await updateDoc(currentDeckUpdateRef,{
      uncertainCards: uncertainCards,
      needsRecapping: needsRecapping,
    })
  }catch (error){
    console.log('update to firebase error')
    console.log(error)
  }
}


export default {
  name: "StudentStudyDeckStats",
  components: {
        SideNavStudy
  },
  mounted(){
    const cardItems = JSON.parse(sessionStorage.getItem("cardDetails"))
    const deckCompleted = JSON.parse(sessionStorage.getItem('deckCompleted'))
    const cardBoxMap = new Map(JSON.parse(sessionStorage.getItem('cardBoxMap')))
    if (deckCompleted){
      document.getElementById("cardStatsDisplay").innerHTML = 'Congratulations you finished studying this deck!'
      document.getElementById("cardsStudied").innerHTML = ''
      document.getElementById("cardsUnattempted").innerHTML = ''
      sessionStorage.setItem("deckCompleted",JSON.stringify(true))
    } else {
      updateDetails(cardItems,cardBoxMap)
    }
  }
};
</script>

<style scoped>

.question-rectangle {
    height: 420px;
    width: 622px;
    background-color: var(--navy-blue);
    border-radius: 40px;
    margin-left: 22em;
    margin-top: 2em;
    box-shadow: 0px 2px 8px #00000022;
}

.motivational-statement {
    font-size: 35px;
    margin-block: auto;
    width: fit-content;
    font-weight: 700;
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

  .question-rectangle {
    align-items: center;
    flex-direction: column;
    padding: 13px 20.2px;
    box-shadow: 0px 2px 8px #00000022;
  }

  .items-in-rectangle {
    width: 581.61px;
    height: 390px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    padding: 21px 20.2px;
  }

  .cards-studied-3-cards-studentstats {
  text-align: center;
  text-decoration: underline;
  font-size: 28px;
  line-height: 55px;
}

.cards-left-8-cards-studentstats {
  text-align: center;
  text-decoration: underline;
  font-size: 28px;
}

.cards-tried-placeholder {
  text-align: center;
  font-size: 28px;
  line-height: 42px;
}


</style>