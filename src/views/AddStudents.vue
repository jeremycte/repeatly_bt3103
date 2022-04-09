<template>
	<div class="container-center-horizontal">
		<SideNav />
		<div class="student-dashboard-homepage screen">
			<Header2 :dashboardTitle="MyDashboard" />

			<div class="add-students-overlap-group">
				<form id="studentGroupForm" ref="studentGroupForm">
					<div class="overlap-group-allStudentsEmail">
						<img
							class="illustration"
							src="../../img/CreateGroup/createGrpImage.png"
						/>

						<div
							class="overlap-group-nameUrGroup border-1px-quick-silver"
						>
							<input
								class="allStudentsEmail inter-normal-silver-chalice-30px"
								id="student-email"
								name="studentEmail"
								placeholder="Enter Student Email"
								type="text"
								required
							/>
						</div>
						<div
							class="overlap-group-groupName border-1px-quick-silver"
						>
							<input
								class="allGroups"
								id="assigned-group"
								name="assignedGroup"
								placeholder="Enter Group Name"
								type="text"
								required=""
							/>
							<!-- <select id = "group-name" name="group-name">
              <option value="" disabled selected hidden>Choose Group</option>
              <option :key="group" v-for="group in groups" :value="group">{{ group }}</option>
            </select> -->
						</div>
						<btn
							id="addStudentBtn"
							class="add-student-allStudentsEmailbtn"
							v-on:click="save()"
						>
							<div class="frame-1-allStudentsEmail">
								<h1
									class="allStudentsEmail-titleBtn inter-semi-bold-white-28px"
								>
									Add Student
								</h1>
							</div>
						</btn>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import SideNav from "../components/SideNav.vue";
	import Header2 from "../components/Header2.vue";
	import firebaseApp from "@/firebaseDetails";
	// import { getAuth } from "firebase/auth";
	import {
		// addDoc,
		collection,
		doc,
		getDoc,
		getDocs,
		getFirestore,
		increment,
		query,
		setDoc,
		updateDoc,
	} from "firebase/firestore";

	// const auth = getAuth();
	const db = getFirestore(firebaseApp);

	function searchIndex(nameKey, arrayObj) {
		for (var i = 0; i < arrayObj.length; i++) {
			const abc = arrayObj[i].deckRef;
			if (abc === nameKey) {
				return i;
			}
		}
	}

	async function getUser(email) {
		try {
			const docRef = doc(db, "users", email);
			const docVal = await getDoc(docRef);
			if (docVal.exists()) {
				console.log("User in database!");
				console.log(docVal.data());
				return docVal.data();
			} else {
				console.log("User not registered in database!");
			}
		} catch (error) {
			console.log("Display User not working");
			console.log(error);
		}
	}

	async function copyDeck(grpID) {
		var cardDict = {};
		var NEWCARDDICT = [];
		try {
			const q1 = query(collection(db, "groups", grpID, "decks"));
			const allDecks = await getDocs(q1);
			// console.log('Decks Exsits: ' + allDecks.exists());

			var deckIndex = 1;
			for (const d of allDecks.docs) {
				console.log("Checkpoint 1");
				let currDeck = d.data();
				let deckKey = "d" + String(deckIndex);
				cardDict[deckKey] = { data: currDeck, cards: {} };

				// NEW NEW NEW NEW NEW
				let deckRef = await doc(db, "groups", grpID, "decks", d.id);
				NEWCARDDICT.push({
					data: currDeck,
					deckRef: deckRef,
					id: d.id,
					cards: [],
				});
				// NEW NEW NEW NEW NEW

				console.log("Checkpoint 2");
				// Get Cards in the Deck
				const q2 = query(
					collection(db, "groups", grpID, "decks", d.id, "cards")
				);
				const allCards = await getDocs(q2);
				var cardIndex = 1;
				for (const card of allCards.docs) {
					console.log("Checkpoint 3");
					let currCard = card.data();
					let cardKey = "c" + String(cardIndex);
					cardDict[deckKey]["cards"][cardKey] = currCard;

					// NEW NEW NEW NEW NEW
					let cardRef = doc(
						db,
						"groups",
						grpID,
						"decks",
						d.id,
						"cards",
						card.id
					);

					console.log("HERE");
					let deckInd = searchIndex(deckRef, NEWCARDDICT);
					console.log("HERE 2, " + "Number is: " + deckInd);

					NEWCARDDICT[deckInd]["cards"].push({
						data: currCard,
						cardRef: cardRef,
						id: card.id,
					});
					console.log("HERE 3");
					// NEW NEW NEW NEW NEW

					cardIndex++;
				}
				deckIndex++;
			}
			console.log(
				"Deck copying from " + grpID + " completed successfully"
			);
			return NEWCARDDICT;
		} catch (error) {
			console.log("Failed to copy " + grpID + " decks");
			console.log(error);
		}
	}

	// function reset(btn) {
	// 	btn.addEventListener("click", function handleClick(event) {
	// 		event.preventDefault();

	// 		const inputs = document.querySelector(
	// 			"#student-email",
	// 			"#assigned-group"
	// 		);

	// 		inputs.forEach((input) => {
	// 			input.value = "";
	// 		});
	// 	});
	// }

	// console.log(auth.userEmail);
	export default {
		name: "addStudents",
		components: {
			Header2,
			SideNav,
		},
		// data() {
		// 	return {
		// 		groups: ["cs2040", "cs2030", "bt3103", "bt3102"],
		// 	};
		// },
		methods: {
			async save() {
				try {
					const email =
						document.getElementById("student-email").value;
					const student = await getUser(email);
					console.log("Student found: " + student);
					const groupName = document
						.getElementById("assigned-group")
						.value.toString();
					// console.log("Group Name found: " + groupName);
					// Check if student is already in the group. Else, add them in.
					try {
						const groupRef = doc(db, "groups", groupName);
						const groupSnap = await getDoc(groupRef);
						console.log("Student exists: " + groupSnap.exists());
						if (groupSnap.exists()) {
							const studentRef = doc(
								db,
								"groups",
								groupName,
								"students",
								email
							);
							const studentSnap = await getDoc(studentRef);
							if (studentSnap.exists()) {
								alert(
									studentSnap.data().email +
										" already enrolled in " +
										groupName
								);
								console.log(
									studentSnap.data().email +
										" already enrolled in " +
										groupName
								);
							} else {
								const newStudent = await setDoc(
									doc(
										db,
										"groups",
										groupName,
										"students",
										email
									),
									{
										email: email,
										username: student.username,
										role: student.role,
									}
								);
								await updateDoc(groupRef, {
									noOfStudent: increment(1),
								});

								// NEW NEW NEW NEW NEW
								const studentRef = doc(db, "users", email);
								const allGroupDecksRef = await copyDeck(
									groupName
								);
								console.log("Copy Deck Done!");
								let totalDecks =
									Object.keys(allGroupDecksRef).length;
								// let allDecks = Object.keys(groupDecks);
								for (let i = 0; i < totalDecks; i++) {
									var currDeckID = allGroupDecksRef[i];
									console.log(
										"Current Deck " + currDeckID + " Done!"
									);
									await updateDoc(studentRef, {
										groupDecks: allGroupDecksRef,
									});
								}
								// NEW NEW NEW NEW NEW

								// // Copy existing groups deck into users account
								// const groupDecks = await copyDeck(groupName);
								// console.log("Copy Deck Done!");
								// let totalDecks = Object.keys(groupDecks).length;
								// for (let i = 1; i <= totalDecks; i++) {
								// 	var currDeck = "d" + String(i);
								// 	var deckData = groupDecks[currDeck]["data"];
								// 	console.log(
								// 		"Current Deck " + currDeck + " Done!"
								// 	);

								// 	// Add Deck
								// 	const newDeckAdded = await addDoc(
								// 		collection(db, "users", email, "decks"),
								// 		{
								// 			title: deckData.title,
								// 			tag: deckData.tag,
								// 			description: deckData.description,
								// 			estimatedTime:
								// 				deckData.estimatedTime,
								// 			needsRecapping: 0,
								// 			totalCards: deckData.totalCards,
								// 			uncertainCards: 0,
								// 		}
								// 	);

								// 	// Add Cards (if any)
								// 	if ("cards" in groupDecks[currDeck]) {
								// 		let totalCards = Object.keys(
								// 			groupDecks[currDeck]["cards"]
								// 		).length;
								// 		console.log(
								// 			"NEW DECK ID: " + newDeckAdded.id
								// 		);
								// 		for (let j = 1; j <= totalCards; j++) {
								// 			var currCard = "c" + String(j);
								// 			var cardData =
								// 				groupDecks[currDeck]["cards"][
								// 					currCard
								// 				];
								// 			const newCardAdded = await addDoc(
								// 				collection(
								// 					db,
								// 					"users",
								// 					email,
								// 					"decks",
								// 					newDeckAdded.id,
								// 					"cards"
								// 				),
								// 				{
								// 					question: cardData.question,
								// 					answer: cardData.answer,
								// 					title: cardData.title,
								// 					boxType: 1,
								// 					firstAnswered: false,
								// 					isWrong: false,
								// 				}
								// 			);
								// 			console.log(
								// 				"NEW CARD ID: " +
								// 					newCardAdded.id
								// 			);
								// 		}
								// 	}
								// }
								console.log(newStudent);
								console.log(
									"New student enrolled to Group: " +
										groupName
								);
							}
						} else {
							alert("Group (" + groupName + ") do not exists!");
							console.log(
								"Group (" + groupName + ") do not exists!"
							);
							// await this.$router.push({ name: "students" });
						}
					} catch (error) {
						alert(
							"Student failed to be enrolled to Group: " +
								groupName
						);
						console.log(
							"Student failed to be enrolled to Group: " +
								groupName
						);
						console.log(error);
					}
					// document.getElementById("student-email").value = null;
					// document.getElementById("assigned-group").value = null;
					// await this.$router.push({ name: "students" });
				} catch (error) {
					console.log(error);
					console.log("Add Student failed");
				}
				document.getElementById("student-email").value = null;
				document.getElementById("assigned-group").value = null;
			},
			async back() {
				await this.$router.push({ name: "Dashboard" });
			},
		},
		props: ["MyDashboard"],
	};
</script>

<style scoped>
	.add-students-overlap-group {
		align-items: flex-start;
		display: flex;
		height: 856px;
		min-width: 1491px;
	}

	.overlap-group-allStudentsEmail {
		align-items: flex-end;
		background-color: var(--humming-bird);
		border-radius: 40px;
		box-shadow: 0px 2px 8px #00000022;
		display: flex;
		flex-direction: column;
		margin-left: -1px;
		margin-top: 10px;
		min-height: 858px;
		padding: 31px 384.3px;
		position: relative;
		width: 1487px;
	}

	.overlap-group-nameUrGroup {
		align-items: flex-start;
		background-color: var(--white);
		border-radius: 20px;
		box-shadow: 0px 2px 8px #00000022;
		display: flex;
		height: 74px;
		margin-top: 29px;
		min-width: 718px;
		padding: 15px 20.2px;
	}

	.allStudentsEmail,
	.allGroups {
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

	.allStudentsEmail::placeholder,
	.allGroups::placeholder {
		color: #afafaf99;
	}

	.overlap-group-groupName {
		align-items: flex-start;
		background-color: var(--white);
		border-radius: 20px;
		box-shadow: 0px 2px 8px #00000022;
		display: flex;
		height: 74px;
		margin-top: 28px;
		min-width: 718px;
		padding: 15px 20.2px;
	}

	.overlap-group-txtareaallStudentsEmail {
		align-items: flex-start;
		background-color: var(--white);
		border-radius: 20px;
		box-shadow: 0px 2px 8px #00000022;
		display: flex;
		height: 206px;
		margin-top: 28px;
		min-width: 718px;
		padding: 13px 20.2px;
	}
	#group-name {
		min-width: 670px;
		text-align: center;
		margin-top: -10px;
		cursor: pointer;
	}

	.add-student-allStudentsEmailbtn {
		background-color: var(--shamrock);
		border-radius: 25px;
		height: 74px;
		width: 312px;
		cursor: pointer;
		align-items: flex-start;
		box-shadow: 0px 2px 8px #00000022;
		margin-top: 15em;
		/* min-width: 718px; */
		margin-right: 12em;
	}

	.frame-1-allStudentsEmail {
		border-radius: 25px;
		display: flex;
		align-items: flex-start;
		margin-top: 29px;
		margin-left: 89.2px;
		margin-top: 26.7px;
		/* width: 155.43px; */
	}

	.allStudentsEmail-titleBtn {
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
