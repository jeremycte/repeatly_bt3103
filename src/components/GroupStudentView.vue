<template>
	<div class="students">
		<div class="student-container" v-for="(item,index) in items" :key="item" @click="deleteSelectedStudent(index)">
			<!-- Insert student name here -->
			<div class="student-name inter-semi-bold-heavy-metal-23px">
				{{ item.message }}
			</div>
		</div>
	</div>
</template>

<script>
	import firebaseApp from "@/firebaseDetails";
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { collection, getDocs, getFirestore, deleteDoc, doc, updateDoc, increment } from "firebase/firestore";
  import VueSimpleAlert from "vue-simple-alert";

	const db = getFirestore(firebaseApp);

	const auth = getAuth();
	var a = [];
  var studentEmail = []
	// const user = auth.currentUser;

	// console.log(authEmail);

	const prevPath = null;
	console.log("Router: " + prevPath);

	async function displayStudents() {
		const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));

		let studentResults = [];

		let allStudents = await getDocs(
			collection(db, "groups", groupObj["groupID"], "students")
		);
		allStudents.forEach((doc) => {
			let student = doc.data();
			console.log("Students: " + student);
			var name = student.username;
			if (
				!studentResults.some(function (o) {
					return o["message"] === name;
				})
			) {
				studentResults.push({ message: name });
        studentEmail.push(student.email)
			}
		});
		return studentResults;
	}

	export default {
		name: "GroupStudentView",
		mounted() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					a = await displayStudents();
					this.items = a;
				}
			});
		},
    methods:{
      async deleteSelectedStudent(selectedItemIndex){
        VueSimpleAlert.confirm("Delete this Student?").then(async() => {
          try{
            const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));
            const chosenEmail = studentEmail[selectedItemIndex]
            const deleteRef = doc(db,"groups",groupObj["groupID"],"students",chosenEmail)
            await deleteDoc(deleteRef)
            const updateStudentCountRef = doc(db,"groups",groupObj["groupID"])
            await updateDoc(updateStudentCountRef,{
              noOfStudent: increment(-1),
            })
            if (selectedItemIndex > -1) {
              studentEmail.splice(selectedItemIndex, 1); // 2nd parameter means remove one item only
            }
            window.location.reload()
          } catch (error){
            await VueSimpleAlert.fire({
              type: 'error',
              title: 'Delete Student Error',
              text: 'Refer to error message below',
              footer: '<p>' + error + '</p>'
            })
          }
        });
      }
    },
		data() {
			// console.log("ALLSTUDENT: " + allStudent);
			return {
				items: [],
			};
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.prevRoute = from;
			});
		},
	};
</script>
<style scoped>
	.student-name {
		text-transform: capitalize;
	}
	.students {
		display: flex;
		flex-wrap: wrap;
		width: 100em;
		column-gap: 3.5em;
		row-gap: 4em;
		margin-top: 3em;
	}
	.student-container {
		text-align: center;
		border-radius: 0.4em;
		font-size: 1.5em;
		width: 10em;
		height: 2.2em;
		border-radius: 40px;
		box-shadow: 0px 2px 8px #00000022;
		padding: 13px 36.8px;
		position: relative;
    cursor: pointer;
	}
	.student-container:nth-child(even) {
		background-color: #d1f5ed;
	}
	.student-container:nth-child(odd) {
		background-color: #a786f3;
	}
</style>
