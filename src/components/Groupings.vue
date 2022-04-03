<template>


      <div class="student-group">
        <div class="background-dashboard"></div>

        <template v-if="loading">
          <div class="purple-deck" v-for="item in documents" :key="item" >
             <img class="illustration" :src="require(`../../img/Dashboard/history-illustrations.png`)" />
              <div class="overlay-group">
                <div class="group-info">
                    <div class="GroupTitle inter-semi-bold-heavy-metal-36px" id="GroupTitle">{{item["title"]}}</div>
                    <div class="flex-row-cards-info">
                        <div class="CreationDate inter-semi-bold-heavy-metal-25px" id="CreationDate">Date Created: {{item["CreationDate"]}}</div>
                    </div>
                    <div class="StudentNumber inter-semi-bold-heavy-metal-25px" id="StudentNumber">No of Students {{item["StudentNumber"]}}</div>
                </div>
              <div class="overlay-tagName">
                <div class="tagName inter-semi-bold-heavy-metal-23px" id="tagName">{{item["tag"]}}</div>
              </div>
            </div>
          </div>
        </template>
<!--        </router-link>-->
      </div>
    <!-- </div> -->
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {collection,getDocs,getFirestore} from "firebase/firestore";

const auth = getAuth();
const db = getFirestore(firebaseApp);
var refDoc=[];

async function getCardDetails(userEmail){
  let userDecks = await getDocs(collection(db,"users",String(userEmail),"decks"));
  if (!userDecks.empty){
    userDecks.forEach((docs)=>{
      let deck = docs.data()
      let deckId = docs.id
      const title = deck.title
      const StudentNumber = deck.StudentNumber
      const needsRecapping = deck.needsRecapping
      const tag = deck.tag
      const CreationDate = deck.CreationDate
      const uncertainCards = deck.uncertainCards
      const tempDeckDetails = {
        'deckId':deckId,
        'title':title,
        'StudentNumber':StudentNumber,
        'needsRecapping':needsRecapping,
        'tag':tag,
        'CreationDate':CreationDate,
        'uncertainCards':uncertainCards,
      }
      refDoc.push(tempDeckDetails)
    })
  }
}




export default {
  name: "Groupings",
  methods:{
    async getData() {
      onAuthStateChanged(auth, async (user)=>{
        if(user) {
          await getCardDetails(user.email)
          await this.randomImage()
          this.documents = refDoc;
          this.loading = true;
        }
      })
    },
    randomImage() {
      console.log(this.images[Math.floor(Math.random() * this.images.length)]);
      return `url("../../img/Dashboard/${
        this.images[Math.floor(Math.random() * this.images.length)]
      }")`;
    }
  },
  mounted(){
    refDoc = []
    this.getData()
  },
  data(){
    return {
      loading: false,
      documents:[],
      images: ['history-illustrations.png', 'tab-illustration.png', 'security-illustration.png', 'computer-illustration.png'],
      colors: ['rgba(209, 245, 237, 1)', 'rgba(243, 217, 224, 1)', 'rgba(167, 134, 243, 1)'],
    }
  }
};
</script>


<style scoped>
.overlay-group{
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

.purple-deck:nth-child(odd){
  background-color: var(--vanilla-ice);
  border-radius: 40px;
  box-shadow: 0px 2px 8px #00000022;
}
.purple-deck:nth-child(even){
  background-color:  var(--humming-bird);
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

.CreationDate {
  letter-spacing: 0;
  line-height: 35px;
  min-height: 35px;
  min-width: 181px;
  white-space: nowrap;
}

.StudentNumber {
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