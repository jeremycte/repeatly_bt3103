<template>
	<div class="students">
		<div class="student-container" v-for="item in items" :key="item">
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
	import {
		collection,
		getDocs,
		query,
		where,
		getFirestore,
	} from "firebase/firestore";

	const db = getFirestore(firebaseApp);

	const auth = getAuth();
	var a = [];
	// const user = auth.currentUser;
	let authEmail = "";
	// console.log(authEmail);

	async function displayStudents() {
		// Find all the groups this teacher is in
		const q1 = query(
			collection(db, "groups"),
			where("teacherEmail", "==", authEmail)
		);
		const querySnapshot = await getDocs(q1);

		// let ind = 1;
		var allGroups = [];

		querySnapshot.forEach((doc) => {
			let groupID = doc.data().groupID;
			allGroups.push(groupID);
		});

		let allStudent = [];
		for (const grpID of allGroups) {
			let allStudents = await getDocs(
				collection(db, "groups", grpID, "students")
			);
			allStudents.forEach((doc) => {
				let student = doc.data();
				console.log("Students: " + student);
				// var table = document.getElementById("studentList");
				// var row = table.insertRow(ind);

				var role = student.role;

				// If the user is a teacher, exclude from the output
				if (role == "teacher") {
					return;
				}

				var name = student.username;
				// var email = student.email;
				// var groups = grpID;

				if (
					!allStudent.some(function (o) {
						return o["message"] === name;
					})
				) {
					allStudent.push({ message: name });
				}

				// var cell1 = row.insertCell(0);
				// var cell2 = row.insertCell(1);
				// var cell3 = row.insertCell(2);
				// var cell4 = row.insertCell(3);
				// var cell5 = row.insertCell(4);

				// cell1.style.border = "1px solid #000";
				// cell2.style.border = "1px solid #000";
				// cell3.style.border = "1px solid #000";
				// cell4.style.border = "1px solid #000";
				// cell5.style.border = "1px solid #000";

				// cell1.innerHTML = ind;
				// cell2.innerHTML = name;
				// cell3.innerHTML = email;
				// cell4.innerHTML = role;
				// cell5.innerHTML = groups;

				// ind += 1;
			});
		}
		return allStudent;
	}

	export default {
		name: "StudentView",
		mounted() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					authEmail = user.email;
					a = await displayStudents();
					console.log(a);
					this.items = a;
					console.log(authEmail);
				}
			});
		},
		data() {
			// console.log("ALLSTUDENT: " + allStudent);
			return {
				items: [],
			};
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
	}
	.student-container:nth-child(even) {
		background-color: #d1f5ed;
	}
	.student-container:nth-child(odd) {
		background-color: #a786f3;
	}
</style>
