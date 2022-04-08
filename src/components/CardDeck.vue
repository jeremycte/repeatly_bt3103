<template>

    <!-- <div class="student-dashboard-homepage screen"> -->
      <div class="deck-card-group">
        <div class="background-dashboard"></div>
        <router-link to="/view-card-deck">
        <template v-if="loading">
          <div class="purple-deck" v-for="(item,index) in documents" :key="item" @click="displaySelectedItem(index)">
             <div class="illustration" id="imageDeck" :style="randomImage()" />
              <div class="overlay-deck">
                <div class="deck-cards-info">
                    <div class="card-title inter-semi-bold-heavy-metal-36px" id="Deck Title">{{item["title"]}}</div>
                    <div class="flex-row-cards-info">
                        <div class="total-cards inter-semi-bold-heavy-metal-25px" id="totalCards">Total Cards: {{item["totalCards"]}}</div>
                        <div class="needs-recaping inter-semi-bold-mustard-25px" id="needsRecapping">Needs Recapping: {{item["needsRecapping"]}}</div>
                        <div class="uncertain-cards inter-semi-bold-mexican-red-25px" id="uncertainCards">Uncertain Cards: {{item["uncertainCards"]}}</div>
                    </div>
                    <div class="estimated-time inter-semi-bold-heavy-metal-25px" id="estimatedTime">Estimated Time (min): {{item["estimatedTime"]}}</div>
                </div>
              <div class="overlay-tagName">
                <div class="tagName inter-semi-bold-heavy-metal-23px" id="tagName">{{item["tag"]}}</div>
              </div>
            </div>
          </div>
        </template>
        </router-link>
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
  console.log("i am running")
  if (!userDecks.empty){
    userDecks.forEach((docs)=>{
      let deck = docs.data()
      let deckId = docs.id
      const title = deck.title
      const estimatedTime = deck.estimatedTime
      const needsRecapping = deck.needsRecapping
      const tag = deck.tag
      const totalCards = deck.totalCards
      const uncertainCards = deck.uncertainCards
      const tempDeckDetails = {
        'deckId':deckId,
        'title':title,
        'estimatedTime':estimatedTime,
        'needsRecapping':needsRecapping,
        'tag':tag,
        'totalCards':totalCards,
        'uncertainCards':uncertainCards,
      }
      refDoc.push(tempDeckDetails)
    })
  }
}




export default {
  name: "CardDeck",
  methods:{
    async getData() {
      onAuthStateChanged(auth, async (user)=>{
        if(user) {
          await getCardDetails(user.email)
          this.randomImage()
          console.log(refDoc)
          this.documents = refDoc;
          this.loading = true;
          var image = document.getElementsByClassName("illustration");
          image.src = `../../img/${this.images[Math.floor(Math.random() * this.images.length * Math.PI)]}`
          // document.getElementById("imageDeck").src=`../../img/${this.images[Math.floor(Math.random() * this.images.length)]}`;
        }
      })
    },
    randomImage() {
      return "background-image: " + `url(${
        this.images[Math.floor(Math.random() * this.images.length)]
      });`;
    },
    displaySelectedItem(selectedItemIndex){
      // console.log(selectedItemIndex)
      // console.log(refDoc[parseInt(selectedItemIndex)])
      sessionStorage.setItem('deckObj',JSON.stringify(refDoc[parseInt(selectedItemIndex)]))
    }
  },
  mounted(){
    refDoc = []
    this.documents = []
    this.getData()
  },
  data(){
    return {
      loading: false,
      documents:[],
      images: ['https://res.cloudinary.com/jeremycte23/image/upload/v1649429503/repeatly/tab-illustration_urxjbb.png', 
      'https://res.cloudinary.com/jeremycte23/image/upload/v1649429503/repeatly/security-illustration_kuf6rq.png', 
      'https://res.cloudinary.com/jeremycte23/image/upload/v1649429503/repeatly/computer-illustration_rcirpn.png', 
      'https://res.cloudinary.com/jeremycte23/image/upload/v1649429503/repeatly/history-illustrations_h1vzpp.png'],
      colors: ['rgba(209, 245, 237, 1)', 'rgba(243, 217, 224, 1)', 'rgba(167, 134, 243, 1)'],
    }
  }
};
</script>


<style scoped>
.purple-deck {
  transition: all 0.3s ease;
   border-radius: 40px;
   box-shadow: 0px 2px 8px #00000022;
   
}

.overlay-deck {
    align-items: flex-start;
    /* background-color: var(--dull-lavender); */
    border-radius: 40px;
    box-shadow: 0px 2px 8px #00000022;
    display: flex;
    height: 210px;
    margin-top: 30px;
    min-width: 1429px;
    padding: 19.6px 36.8px;
    position: relative;
    transition: all 0.2s ease;
}


.purple-deck:nth-child(odd){
  background-color: var(--vanilla-ice);
}
.purple-deck:nth-child(even){
  background-color:  var(--dull-lavender);
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

.deck-card-group {
  /* height: 1118px; */
  margin-bottom: 28px;
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

.deck-cards-info {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 14em;
  min-height: 153px;
  width: 726px;
}

.card-title {
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
  color: #000;
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