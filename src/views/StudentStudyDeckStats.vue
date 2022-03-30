<template>
<div class="container-center-horizontal">
    <SideNav />
    <div class="student-study-deck-question screen">
      <div class="headerDashboardTitle">
        <h1 class="dashboard-title inter-bold-heavy-metal-50px">Study Statistics</h1>
      </div>
    <div class="group-162547">
    <div class="study-deck-group">
        <div class="study-deck-inner">
            <div class="question-rectangle"> 
                <div class="items-in-rectangle">
                    <div class="cards-studied-3-cards-studentstats inter-semi-bold-white-28px">Cards Studied: __ cards</div>
                    <div class="cards-tried-placeholder inter-semi-bold-white-28px">Placeholder for number of tries taken for each card</div>
                    <div class="cards-left-8-cards-studentstats inter-semi-bold-white-28px">Cards Left: __ cards</div>
                </div>
            </div>
        </div>
        <div class="overlap-group-txtareaStudyDeck border-1px-quick-silver">
            <div class="motivational-statement inter-semi-bold-black-28px" id="answer-field2">Motivational Statement Here</div>
        </div>
      <btn class="checkAnswerStudybtn">
        <div class="frame-1-checkanswers">
          <router-link to="/study-deck-answer">
          <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Return to Deck</h1>
          </router-link>
        </div>
      </btn>
    </div>
    
  </div>
  </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
export default {
  name: "StudentStudyDeckStats",
  components: {
        SideNav
    },
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
  font-size: 50px;
  line-height: 55px;
}

.cards-left-8-cards-studentstats {
  text-align: center;
  text-decoration: underline;
  font-size: 35px;
}

.cards-tried-placeholder {
  text-align: center;
  font-size: 35px;
}


</style>