<template>
<div class="container-center-horizontal">
    <SideNav />
    <div class="student-study-deck-question screen">
    <div class="headerDashboardTitle">
    <h1 class="dashboard-title inter-bold-heavy-metal-50px">{{MyDashboard}}</h1>
    <router-link to="/">
      <img class="addBtnDashboard" src="../../img/cross-arrow.png" />
    </router-link>
  </div>
  <div class="group-162547">
    <div class="study-deck-group">
        <div class="study-deck-inner">
            <a @click="$router.go(-1)">
            <img class="back-arrow" src="../../img/back-arrow.png" />
            <h1 class="end-study inter-semi-bold-edward-24px">End Study<br>Session</h1>
            </a>
            <div class="question-rectangle"> 
                <div class="question-field inter-bold-white-30px" id="question-field">Question will be inside here</div>
            </div>
        </div>
        <div class="overlap-group-txtareaStudyDeck border-1px-quick-silver">
        <textarea class="deck-description" name="deckdescription" placeholder="Enter Your Answer" type="text"></textarea>
      </div>
      <btn class="checkAnswerStudybtn">
        <div class="frame-1-checkanswers">
          <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Check Answers</h1>
        </div>
      </btn>
    </div>
    
  </div>
  </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
// import Header from "../components/Header.vue"

export default {
    
  name: "StudyDeck",
  components: {
        SideNav
    },
     props: [
        "MyDashboard"
    ]
};
</script>


<style>
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
    height: 858px;
    margin-top: -1px;
    min-width: 1487px;
    padding: 26px 47px;
}

.study-deck-inner {
    display: flex;
}

.frame-1-checkanswers {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 71.2px;
    margin-top: 26.7px;
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

  .studyDeck-titleBtn {
    height: 34px;
    letter-spacing: 0;
  }

  .checkAnswerStudybtn {
    background-color: var(--shamrock);
    border-radius: 25px;
    height: 74px;
    width: 312px;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 29px;
    display: flex;
    margin-left: 33em;
  }
</style>