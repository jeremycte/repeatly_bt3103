<template>
  <div class="container-center-horizontal">
    <SideNav />

    <div class="students-screen">
      <StudentsPageHeader :dashboardTitle="MyDashboard" />
      <div class="study-deck-inner">
        <div class="deck-cards-info">
          <div
              class="card-title inter-semi-bold-heavy-metal-36px"
              id="groupTitle"
          >
            Title
          </div>
          <br /><br />
          <div class="flex-row-cards-info">
            <div
                class="total-cards inter-semi-bold-blue-25px"
                id="teacherName"
            >
              Teacher Name:
            </div>
            <div
                class="uncertain-cards inter-semi-bold-blue-25px"
                id="teacherEmail"
            >
              Teacher's Email:
            </div>
          </div>
          <div
              class="estimated-time inter-semi-bold-heavy-metal-25px"
              id="noOfStudent"
          >
            Total Number of Students:
          </div>
          <br /><br />
        </div>
        <button
            class="deleteCardDeckbtn"
            id="deleteGroup"
            v-on:click="deleteGroup()"
        >
          <div class="frame-1-delanswers">
            <h1
                class="studydeck-titleBtn inter-semi-bold-white-28px"
            >
              Delete
            </h1>
          </div>
        </button>
      </div>
      <div
          class="view-card-description-title inter-semi-bold-heavy-metal-36px"
      >
        Group Description
      </div>
      <div
          class="view-card-description inter-semi-bold-heavy-metal-25px"
          id="groupDescription"
      >
        Group Description
      </div>
      <br /><br />
      <div class="viewCardDeckBtns">
        <button class="editBtn" v-on:click="editDeck()">
          <div class="frame-1-editanswers">
            <h1
                class="studydeck-titleBtn inter-semi-bold-white-28px"
            >
              Edit Group
            </h1>
          </div>
        </button>
      </div>
      <div
          class="view-card-description-title inter-semi-bold-heavy-metal-36px"
      >
        Decks
      </div>
      <GroupDeck />
      <br /><br />
      <div
          class="view-card-description-title inter-semi-bold-heavy-metal-36px"
      >
        Students
      </div>
      <GroupStudentView />
      <br /><br />
    </div>
  </div>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {
  // collection,
  doc,
  // getDoc,
  // getDocs,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";
import router from "../../router/router";
import SideNav from "../components/SideNav.vue";
import StudentsPageHeader from "../components/StudentsPageHeader.vue";
import GroupDeck from "../components/GroupDeck.vue";
import GroupStudentView from "../components/GroupStudentView.vue";

const db = getFirestore(firebaseApp);

async function displayDetails() {
  const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));
  // console.log('DOC ID: ' + grpID);

  // Display Group Details
  // const groupObj = await getDoc(doc(db, 'groups', String(grpID)));

  // const groupDetails = groupObj.data();

  document.getElementById("groupTitle").innerHTML =
      groupObj["groupID"] + " " + groupObj["longName"];
  document.getElementById("noOfStudent").innerHTML =
      "Total Number of Students: " + groupObj["noOfStudent"];
  document.getElementById("teacherName").innerHTML =
      "Teacher Name: " + groupObj["teacherName"];
  document.getElementById("teacherEmail").innerHTML =
      "Teacher's Email: " + groupObj["teacherEmail"];
  document.getElementById("groupDescription").innerHTML =
      groupObj["description"];
}

export default {
  name: "View Group Deck",
  components: {
    SideNav,
    StudentsPageHeader,
    GroupDeck,
    GroupStudentView,
  },
  mounted() {
    displayDetails();
  },
  methods: {
    async deleteGroup() {
      try {
        const groupObj = JSON.parse(
            sessionStorage.getItem("groupObj")
        );
        alert("You are going to delete " + groupObj["groupID"]);
        await deleteDoc(doc(db, "groups", groupObj["groupID"]));
        console.log("Group Deleted Successfully");
        await this.$router.push({ name: "Groups" });
      } catch (error) {
        console.log("Group Deletion Error");
        console.log(error);
      }
    },
    async editDeck() {
      try {
        await router.push({ name: "editGroup" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  props: ["MyDashboard"],
};
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

.viewCardDeckBtns {
  display: flex;
}

.frame-1-editanswers {
  border-radius: 25px;
  display: flex;
  align-items: flex-start;
  margin-top: 29px;
  margin-left: 85px;
  margin-top: 20.7px;
}

.editBtn {
  background-color: var(--navy-blue);
  border-color: transparent;
  border-radius: 25px;
  height: 74px;
  width: 22em;
  margin-left: 15em;
  cursor: pointer;
  align-items: flex-start;
  box-shadow: 0px 2px 8px #00000022;
  margin-top: 29px;
  display: flex;
}
</style>
