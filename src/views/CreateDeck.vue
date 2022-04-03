<template>
<div class="container-center-horizontal">
    <SideNav />
    <div class="student-dashboard-homepage screen">
    <Header2 :dashboardTitle="MyDashboard"/>
  <div class="create-deck-overlap-group">
    <div class="overlap-group-createdeck">
      <img class="illustration" src="../../img/Dashboard/history-illustrations.png" />
      <div class="overlap-group-nameUrDeck border-1px-quick-silver">
        <input
          class="createDeck inter-normal-silver-chalice-30px"
          id="deckName"
          name="nameyourdeck"
          placeholder="Name your deck"
          type="text"
          required
        />
      </div>
      <div class="overlap-group-createdeckTag border-1px-quick-silver">
        <input
          class="createDeck inter-normal-silver-chalice-30px"
          id="deckTag"
          name="decktag"
          placeholder="Deck Tag e.g. Sem 1"
          type="text"
          required
        />
      </div>
      <div class="overlap-group-txtareaCreateDeck border-1px-quick-silver">
        <textarea class="deck-description" id="description" name="deckdescription" placeholder="Deck Description" type="text"></textarea>
      </div>
      <btn class="add-student-createdeckbtn" v-on:click="save()">
        <div class="frame-1-createdeck">
          <h1 class="createdeck-titleBtn inter-semi-bold-white-28px">Create Deck</h1>
        </div>
      </btn>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Header2 from "../components/Header2.vue"
import firebaseApp from "@/firebaseDetails";
import {getAuth} from "firebase/auth";
import {collection,addDoc,getFirestore} from "firebase/firestore";
import VueSimpleAlert from "vue-simple-alert";

const auth = getAuth();
const db = getFirestore(firebaseApp);
console.log(auth.userEmail)
export default {
    
  name: "CreateDeck",
  components: {
        Header2,
        SideNav
    },
    methods: {
      async save(){
        try{
          const userEmail = auth.currentUser.email;
          const title = document.getElementById("deckName").value;
          const Title = title.charAt(0).toUpperCase() + title.slice(1);
          const tag = document.getElementById("deckTag").value;
          const Tag = tag.charAt(0).toUpperCase() + tag.slice(1);
          await addDoc(collection(db,"users",String(userEmail),"decks"),
            {
              title: Title,
              tag: Tag,
              description: document.getElementById("description").value,
              estimatedTime: 0,
              needsRecapping: 0,
              totalCards: 0,
              uncertainCards: 0,
            })
          VueSimpleAlert.fire({
              type: 'success',
              title: 'Successfully Created '+ Title +' Card Deck',
              // footer: '<a href>Why do I have this issue?</a>'
          }).then(() => {
            this.$router.push({name: "Home"})
          });
        }catch(error){
          console.log(error)
          VueSimpleAlert.fire({
            type: 'error',
            title: 'Create Deck Failed',
            text: 'Refer to error message below',
            footer: '<p>' + error +'</p>'
          })
          console.log("create deck failed")
        }
      },
      async back(){
        await this.$router.push({name: "Dashboard"})
      }
  },
     props: [
        "MyDashboard"
    ]
};
</script>


<style>
  .create-deck-overlap-group {
    align-items: flex-start;
    display: flex;
    height: 856px;
    min-width: 1491px;
  }

  .overlap-group-createdeck {
    align-items: flex-end;
    background-color: var(--humming-bird);
    border-radius: 40px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    flex-direction: column;
    margin-left: -1px;
    margin-top: 10px;
    min-height: 858px;
    padding: 31px 384.3px;
    position: relative;
    width: 1487px;
  }

  .overlap-group-nameUrDeck {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    height: 74px;
    margin-top: 29px;
    min-width: 718px;
    padding: 15px 20.2px;
  }

  .createDeck {
    background-color: transparent;
    border: 0;
    height: 42px;
    letter-spacing: 0;
    line-height: 42px;
    padding: 0;
    white-space: nowrap;
    font-family: var(--font-family-inter);
    font-size: var(--font-size-l);
    width: 418px;
  }

  .createDeck::placeholder {
    color: 
#afafaf99;
  }

  .overlap-group-createdeckTag {
    align-items: flex-start;
    background-color: var(--white);

    border-radius: 20px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    height: 74px;
    margin-top: 28px;
    min-width: 718px;
    padding: 15px 20.2px;
  }

  .overlap-group-txtareaCreateDeck {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    box-shadow: 0px 2px 8px 
#00000022;
    display: flex;
    height: 206px;
    margin-top: 28px;
    min-width: 718px;
    padding: 13px 20.2px;
  }

  .deck-description {
    background-color: transparent;
    border: 0;
    font-family: var(--font-family-inter);
    font-size: var(--font-size-l);
    height: 145px;
    letter-spacing: 0;
    line-height: 42px;
    padding: 0;
    width: 600px;
  }

  .deck-description::placeholder {
    color: #afafaf7a;
  }

  .add-student-createdeckbtn {
    background-color: var(--shamrock);
    border-radius: 25px;
    height: 74px;
    width: 312px;
    cursor: pointer;
    align-items: flex-start;
    box-shadow: 0px 2px 8px #00000022;
    margin-top: 29px;
    /* min-width: 718px; */
    margin-right: 12em;
  }

  .frame-1-createdeck {
    border-radius: 25px;
    display: flex;
    align-items: flex-start;
    margin-top: 29px;
    margin-left: 89.2px;
    margin-top: 26.7px;
    /* width: 155.43px; */
    
  }

  .createdeck-titleBtn {
    height: 34px;
    letter-spacing: 0;
    /* margin-left: -5.8px;
    margin-top: -1.7px; */
    /* width: 167px; */
  }
  .illustration {
    align-self: center;
    background-position: 50% 50%;
    background-size: cover;
    height: 236px;
    margin-left: 1px;
    margin-top: 18px;
    width: 236px;
  }
</style>