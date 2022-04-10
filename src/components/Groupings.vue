<template>
  <div class="student-group">
    <div class="background-dashboard"></div>
    <router-link to="/view-group-deck">
      <template v-if="loading">
        <div
            class="purple-deck"
            v-for="(item, index) in documents"
            :key="item"
            @click="displaySelectedItem(index, documents)"
        >
          <!-- <img
          class="illustration"
          :src="
            require(`../../img/Dashboard/history-illustrations.png`)
          "
        /> -->
          <div
              class="illustration"
              id="imageDeck"
              :style="randomImage()"
          />
          <div class="overlay-group">
            <div class="group-info">
              <div
                  class="GroupTitle inter-semi-bold-heavy-metal-36px"
                  id="GroupTitle"
              >
                {{ item["longName"] }}
              </div>
              <div class="flex-row-cards-info">
                <div
                    class="dateCreated inter-semi-bold-heavy-metal-25px"
                    id="dateCreated"
                >
                  Date Created: {{ item["dateCreated"] }}
                </div>
              </div>
              <div
                  class="noOfStudent inter-semi-bold-heavy-metal-25px"
                  id="noOfStudent"
              >
                No of Students: {{ item["noOfStudent"] }}
              </div>
            </div>
            <div class="overlay-tagName">
              <div
                  class="tagName inter-semi-bold-heavy-metal-23px"
                  id="tagName"
              >
                {{ item["groupID"] }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </router-link>
    <!--        </router-link>-->
  </div>
  <!-- </div> -->
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import dateFormat from "dateformat";

const auth = getAuth();
const db = getFirestore(firebaseApp);
var refDoc = [];


async function getGroupDetails(userEmail) {
  let currUser = await getDoc(doc(db, "users", String(userEmail)));
  let userData = currUser.data();
  console.log("Current User: " + userData.role);
  var q1 = query(collection(db, "groups"));
  if (userData.role == "teacher") {
    console.log("Current User Role: " + "teacher");
    // Find all the groups this teacher is in
    q1 = query(
        collection(db, "groups"),
        where("teacherEmail", "==", String(userEmail))
    );
  } else {
    console.log("Current User Role: " + "student");
  }

  const querySnapshot = await getDocs(q1);

  // let ind = 1;
  for (const docu of querySnapshot.docs) {
    let group = docu.data();
    // console.log('DOC ID like that: ' + docu.id);
    if (userData.role != "teacher") {
      let student = await getDoc(
          doc(
              db,
              "groups",
              String(group.groupID),
              "students",
              String(userEmail)
          )
      );

      if (!student.exists()) {
        continue;
      }
    }
    const dateCreated = dateFormat(
        group.dateCreated.toDate(),
        "mmmm d, yyyy"
    );
    const description = group.description;
    const groupID = group.groupID;
    const longName = group.longName;
    const noOfStudent = group.noOfStudent;
    const teacherEmail = group.teacherEmail;
    const teacherName = group.teacherName;
    const tempGroupDetails = {
      dateCreated: dateCreated,
      description: description,
      groupID: groupID,
      longName: longName,
      noOfStudent: noOfStudent,
      teacherEmail: teacherEmail,
      teacherName: teacherName,
    };
    refDoc.push(tempGroupDetails);
  }
}

export default {
  name: "Groupings",
  methods: {
    async getData() {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await getGroupDetails(user.email);
          await this.randomImage();
          this.documents = refDoc;
          this.loading = true;
        }
      });
    },
    randomImage() {
      return (
          "background-image: " +
          `url(${
              this.images[
                  Math.floor(Math.random() * this.images.length)
                  ]
          });`
      );
    },
    displaySelectedItem(selectedItemIndex, refDoc) {
      // console.log(selectedItemIndex);
      // console.log(refDoc[parseInt(selectedItemIndex)]);
      sessionStorage.clear();
      sessionStorage.setItem(
          "groupObj",
          JSON.stringify(refDoc[parseInt(selectedItemIndex)])
      );
    },
  },
  mounted() {
    refDoc = [];
    this.documents = [];
    this.getData();
  },
  data() {
    return {
      loading: false,
      documents: [],
      images: [
        "https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/tab-illustration_urxjbb.png",
        "https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/security-illustration_kuf6rq.png",
        "https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/computer-illustration_rcirpn.png",
        "https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/history-illustrations_h1vzpp.png",
      ],
      colors: [
        "rgba(209, 245, 237, 1)",
        "rgba(243, 217, 224, 1)",
        "rgba(167, 134, 243, 1)",
      ],
    };
  },
};
</script>

<style scoped>
.overlay-group {
  align-items: flex-start;
  border-radius: 40px;
  box-shadow: 0px 2px 8px #00000022;
  display: flex;
  height: 210px;
  margin-top: 30px;
  min-width: 1429px;
  padding: 19.6px 36.8px;
  position: relative;
}

.purple-deck:nth-child(odd) {
  background-color: var(--vanilla-ice);
  border-radius: 40px;
  box-shadow: 0px 2px 8px #00000022;
}
.purple-deck:nth-child(even) {
  background-color: var(--humming-bird);
  border-radius: 40px;
  box-shadow: 0px 2px 8px #00000022;
}

.overlay-tagName {
  align-items: center;
  background-color: var(--white-22);
  border-radius: 16px;
  display: flex;
  height: 61px;
  margin-left: 250px;
  margin-top: 14.44px;
  padding: 14px 51.7px;
  word-break: break-all;
}
.bar-illustration {
  align-self: center;
  height: 113px;
  width: 188px;
}

.student-dashboard-homepage {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 1024px;
  overflow: hidden;
  width: 1920px;
}

.student-group {
  height: 1118px;
  position: relative;
  /* width: 1920px; */
}

.background-dashboard {
  background-color: var(--white);
  /* box-shadow: 0px 2px 8px #00000014; */
  height: 1026px;
  left: -1px;
  position: absolute;
  top: -1px;
}

.group-info {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 14em;
  min-height: 153px;
  width: 726px;
}

.GroupTitle {
  letter-spacing: 0;
  line-height: 50.4px;
  min-height: 50px;
  white-space: nowrap;
}

.flex-row-cards-info {
  align-items: flex-start;
  display: flex;
  height: 36px;
  margin-top: 13px;
  min-width: 716px;
}

.dateCreated {
  letter-spacing: 0;
  line-height: 35px;
  min-height: 35px;
  min-width: 181px;
  white-space: nowrap;
}

.noOfStudent {
  letter-spacing: 0;
  line-height: 35px;
  margin-top: 19px;
  min-height: 35px;
  white-space: nowrap;
}

.tagName {
  letter-spacing: 0;
  line-height: 32.2px;
  min-height: 32px;
  white-space: nowrap;
  text-transform: uppercase;
  word-break: break-all;
}

.illustration {
  height: 188px;
  left: 37px;
  position: absolute;
  /* top: 7px; */
  width: 188px;
  z-index: 2;
}
</style>
