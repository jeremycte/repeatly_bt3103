<template>
  <div id = "firstContainer">
    <form id = "deckForm">
      <h1 class = "titleofDiv">Create Deck</h1>
      <div class = "formli">
        <label for="deckName">Deck name:</label>
        <input type="text" id = "deckName" required="" placeholder="Enter deck name"> <br><br>

        <label for="deckTag">Deck tag:</label>
        <input type="text" id = "deckTag" required="" placeholder="Enter deck tag"> <br><br>

        <label for="description">Description:</label>
        <input type="text" id = "description" required="" placeholder="Enter description"> <br><br>

        <div class = "save">
          <button id="savebutton" type="button" v-on:click="save()"> Create Deck</button><br><br>
        </div>
      </div>
    </form>
  </div>
  <button id="backToHome" type="button" v-on:click="back()"> Back </button>
</template>


<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth} from "firebase/auth";
import {collection,addDoc,getFirestore} from "firebase/firestore";

const auth = getAuth();
const db = getFirestore(firebaseApp);

export default {
  name: "createDeck",
  methods:{
    async save(){
      try{
        const userEmail = auth.currentUser.email
        await addDoc(collection(db,"users",String(userEmail),"decks"),
            {
              title: document.getElementById("deckName").value,
              tag: document.getElementById("deckTag").value,
              description: document.getElementById("description").value,
              estimatedTime: 0,
              needsRecapping: 0,
              totalCards: 0,
              uncertainCards: 0,
            })
        await this.$router.push({name: "Dashboard"})
      }catch(error){
        console.log(error)
        console.log("create deck failed")
      }
    },
    async back(){
      await this.$router.push({name: "Dashboard"})
    }
  }
}
</script>

<style scoped>
form{
  text-align: center;
  align-items: center;
  margin: auto;
}

.formli{
  display: inline-block;
  text-align: right;
}

#description{
  display: inline-block;
  padding: 15px 10px;
  line-height: 140%;
}
</style>