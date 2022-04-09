<template>
    <div class="container-center-horizontal">
        <SideNav />
        
        <div class="students-screen">
            <StudentsPageHeader :dashboardTitle="MyDashboard" />
            <div class="study-deck-inner">
                <div class="deck-cards-info">
                    <div class="card-title inter-semi-bold-heavy-metal-36px" id="Deck Title">Title</div>
                    <div class="flex-row-cards-info">
                        <div class="total-cards inter-semi-bold-blue-25px" id="totalCards">Teacher Name: </div>
                        <div class="uncertain-cards inter-semi-bold-blue-25px" id="uncertainCards">Teacher's Email: </div>
                    </div>
                    <div class="estimated-time inter-semi-bold-heavy-metal-25px" id="estimatedTime">Total Number of Students: </div>
                </div>
                <button class="deleteCardDeckbtn" v-on:click="deleteDeck()">
                    <div class="frame-1-delanswers">
                        <h1 class="studydeck-titleBtn inter-semi-bold-white-28px">Delete</h1>
                    </div>
                </button>
            </div>
            <div class="view-card-description-title inter-semi-bold-heavy-metal-36px">Group Description</div>
            <div class="view-card-description inter-semi-bold-heavy-metal-25px" id="descriptionText">
              Card deck description</div>
            <StudentView/>
        </div>
    </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import StudentsPageHeader from '../components/StudentsPageHeader.vue'
import StudentView from '../components/StudentView.vue'

export default {
    name: "View Group Deck",
    components: {
        SideNav,
        StudentsPageHeader,
        StudentView,

    },
    props: [
        "MyDashboard"
    ]
}
</script>

<style scoped>
.students-screen {
    margin-left: 290px;
}
.study-deck-inner {
    display: flex;
    justify-content: space-between;
}

.view-card-description {
  margin-left: 32px;
  margin-bottom: 20px;
  width: 1350px;
}
.view-card-description-title {
  margin-left: 32px;
  margin-top: 20px;
  margin-bottom: 20px;
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

.headerDashboardTitle {
    margin-left: 2em;
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
    border-color: transparent;
    border-radius: 25px;
    height: 74px;
    width: 200px;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 50px;
    display: flex;
    margin-left: 10em;
}

.frame-1-delanswers {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 4em;
    margin-top: 21.7px;
}
</style>