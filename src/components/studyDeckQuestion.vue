<template>
  <div class="questionGrp">
    <h1 id="questionDisplay">This is the question</h1> <br><br>
    <label for="answerInput">Answer:</label>
    <input type="text" id = "answerInput" required="" placeholder="Enter Answer"> <br><br>
    <button id="checkAnswers" type="button">Check Answers</button><br><br>
  </div>
</template>

<script>
import firebaseApp from "@/firebaseDetails";
import {getAuth,onAuthStateChanged} from "firebase/auth";
import {doc,getDoc,getFirestore,collection,getDocs,deleteDoc} from "firebase/firestore";
import cardClassObj from "@/cardClassObj";
import cardClassList from "@/cardClassList"

const auth = getAuth();
const db = getFirestore(firebaseApp);


export default {
  name: "studyDeckQuestion"
}
</script>

<style scoped>

</style>