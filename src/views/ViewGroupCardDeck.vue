<template>
	<div class="container-center-horizontal">
		<SideNav />

		<div class="student-dashboard-homepage screen">
			<div class="headerDashboardTitle">
				<h1 class="dashboard-title inter-bold-heavy-metal-50px">
					{{ MyDashboard }}
				</h1>
				<router-link to="/home">
					<img
						class="crossBtnDashboard"
						src="../../img/cross-arrow.png"
					/>
				</router-link>
			</div>
			<div class="study-deck-group">
				<div class="study-deck-inner">
					<div class="deck-cards-info">
						<div
							class="card-title inter-semi-bold-heavy-metal-36px"
							id="Deck Title"
						>
							Title
						</div>
						<div class="flex-row-cards-info">
							<div
								class="total-cards inter-semi-bold-heavy-metal-25px"
								id="totalCards"
							>
								Total Cards: nill
							</div>
							<div
								class="needs-recaping inter-semi-bold-mustard-25px"
								id="needsRecapping"
							>
								Needs Recapping: null
							</div>
							<div
								class="uncertain-cards inter-semi-bold-mexican-red-25px"
								id="uncertainCards"
							>
								Uncertain Cards: NA
							</div>
						</div>
						<div
							class="estimated-time inter-semi-bold-heavy-metal-25px"
							id="estimatedTime"
						>
							Estimated Time (min): NA
						</div>
					</div>
					<button
						class="deleteCardDeckbtn"
						v-if="role == 'teacher'"
						v-on:click="deleteDeck()"
					>
						<div class="frame-1-delanswers">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Delete
							</h1>
						</div>
					</button>
					<button
						class="studyBtn"
						v-if="role == 'student'"
						v-on:click="copyDeck()"
					>
						<div class="frame-2-study">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Copy Deck
							</h1>
						</div>
					</button>
				</div>
				<div
					class="view-card-description-title inter-semi-bold-heavy-metal-36px"
				>
					Description
				</div>
				<div
					class="view-card-description inter-semi-bold-heavy-metal-25px"
					id="descriptionText"
				>
					Card deck description
				</div>

				<div
					class="overlap-group-txtareaViewDeck border-1px-quick-silver"
					style="overflow-y: scroll; height: 500px"
				>
					<template v-if="loading">
						<p
							class="questions inter-bold-black-28px"
							v-for="item in documents"
							:key="item"
						>
							{{ item }}
						</p>
					</template>
				</div>
				<div class="viewCardDeckBtns">
					<button
						class="editBtn"
						v-if="role == 'teacher'"
						v-on:click="editDeck()"
					>
						<div class="frame-1-editanswers">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Edit Deck
							</h1>
						</div>
					</button>
					<!-- <button class="resetBtn" v-on:click="resetDeck()">
						<div class="frame-1-resetanswers">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Reset Deck
							</h1>
						</div>
					</button> -->
					<button
						class="studyBtn"
						v-if="role == 'teacher'"
						v-on:click="copyDeck()"
					>
						<div class="frame-2-study">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Copy Deck
							</h1>
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import firebaseApp from "@/firebaseDetails";
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import {
		addDoc,
		collection,
		deleteDoc,
		doc,
		getDoc,
		getDocs,
		getFirestore,
		query,
		// where,
	} from "firebase/firestore";
	import SideNav from "../components/SideNav.vue";
	import router from "../../router/router";
	import VueSimpleAlert from "vue-simple-alert";

	const auth = getAuth();
	const db = getFirestore(firebaseApp);
	let authEmail = "";
	var refDoc = [];
	var cardsObjArray = [];
	const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));

	async function displayDetails(deckObj, groupObj) {
		try {
			const deckId = deckObj["deckId"];
			const groupId = groupObj["groupID"];
			const deckRef = doc(db, "groups", groupId, "decks", deckId);

			const deckResult = await getDoc(deckRef);
			const deckData = deckResult.data();
			console.log("GROUP DECK DATA: " + deckData);
			const dispTitle = deckData.title;
			const dispTotalCards = deckData.totalCards;
			const dispEstimatedTime = deckData.estimatedTime;
			const dispNeedsRecapping = deckData.needsRecapping;
			const dispUncertainCards = deckData.uncertainCards;
			const disDescription = deckData.description;

			document.getElementById("Deck Title").innerHTML = dispTitle;
			document.getElementById("totalCards").innerHTML =
				"Total Cards: " + dispTotalCards;
			document.getElementById("estimatedTime").innerHTML =
				"Estimated Time (min): " + dispEstimatedTime;
			document.getElementById("needsRecapping").innerHTML =
				"Needs Recapping: " + dispNeedsRecapping;
			document.getElementById("uncertainCards").innerHTML =
				"Uncertain Cards: " + dispUncertainCards;
			document.getElementById("descriptionText").innerHTML =
				disDescription;
		} catch (error) {
			console.log(error);
			console.log("display deck stats error");
		}
	}

	async function getCards(deckObj, groupObj) {
		try {
			const deckId = deckObj["deckId"];
			const groupId = groupObj["groupID"];
			const userCards = await getDocs(
				collection(db, "groups", groupId, "decks", deckId, "cards")
			);
			const cardBoxMap = new Map();
			if (!userCards.empty) {
				userCards.forEach((docs) => {
					const card = docs.data();
					const cardId = docs.id;
					const question = card.question;
					const answer = card.answer;
					const cardTitle = card.title;
					const boxType = card.boxType;
					const firstAnswered = card.firstAnswered;
					const isWrong = card.isWrong;
					const tempCardDetails = {
						answer: answer,
						boxType: boxType,
						firstAnswered: firstAnswered,
						isWrong: isWrong,
						question: question,
						title: cardTitle,
						id: cardId,
						tries: 0,
					};
					cardsObjArray.push(tempCardDetails);
					refDoc.push(question);
					cardBoxMap.set(cardId, boxType);
				});
				sessionStorage.setItem(
					"cardDetails",
					JSON.stringify(cardsObjArray)
				);
				sessionStorage.setItem(
					"cardBoxMap",
					JSON.stringify(Array.from(cardBoxMap.entries()))
				);
			}
		} catch (error) {
			console.log(error);
			console.log("get cards error");
		}
	}

	async function copyDeck(groupObj, deckObj) {
		var cardDict = {};
		const grpID = groupObj["groupID"];
		console.log("GROUP ID RETRIEVED: " + grpID);
		const deckSelected = deckObj;
		console.log("DECK RETRIEVED: " + deckSelected.deckId);
		try {
			const deckRef = doc(
				db,
				"groups",
				grpID,
				"decks",
				deckSelected.deckId
			);
			const selectedDeck = await getDoc(deckRef);
			console.log("Got Deck Here to Copy: " + selectedDeck);
			// console.log('Decks Exsits: ' + allDecks.exists());

			var deckIndex = 1;

			console.log("Checkpoint 1");
			let currDeck = selectedDeck.data();
			let deckKey = "d" + String(deckIndex);
			cardDict[deckKey] = { data: currDeck, cards: {} };
			console.log("Checkpoint 2");
			// Get Cards in the Deck
			const q2 = query(
				collection(
					db,
					"groups",
					grpID,
					"decks",
					deckSelected.deckId,
					"cards"
				)
			);
			const allCards = await getDocs(q2);
			var cardIndex = 1;
			for (const card of allCards.docs) {
				console.log("Checkpoint 3");
				let currCard = card.data();
				let cardKey = "c" + String(cardIndex);
				cardDict[deckKey]["cards"][cardKey] = currCard;
				cardIndex++;
			}
			deckIndex++;

			console.log(
				"Deck copying from " + grpID + " completed successfully"
			);
			return cardDict;
		} catch (error) {
			console.log("Failed to copy " + grpID + " decks");
			console.log(error);
		}
	}

	async function copy(groupObj, deckObj) {
		// Copy existing groups deck into users account
		try {
			const groupDecks = await copyDeck(groupObj, deckObj);
			console.log("Copy Deck Done!");
			let totalDecks = Object.keys(groupDecks).length;
			for (let i = 1; i <= totalDecks; i++) {
				var currDeck = "d" + String(i);
				var deckData = groupDecks[currDeck]["data"];
				console.log("Current Deck " + currDeck + " Done!");

				// Add Deck
				try {
					let newDeckAdded = {};
					const copyDeckRef = doc(
						db,
						"groups",
						groupObj.groupID,
						"decks",
						deckObj.deckId
					);
					newDeckAdded = await addDoc(
						collection(db, "users", authEmail, "decks"),
						{
							title: deckData.title,
							tag: deckData.tag,
							description: deckData.description,
							estimatedTime: deckData.estimatedTime,
							needsRecapping: 0,
							totalCards: deckData.totalCards,
							uncertainCards: 0,
							isGroupDeck: true,
							originalRef: copyDeckRef,
						}
					);

					// Add Cards (if any)
					if ("cards" in groupDecks[currDeck]) {
						let totalCards = Object.keys(
							groupDecks[currDeck]["cards"]
						).length;
						console.log("NEW DECK ID: " + newDeckAdded.id);
						for (let j = 1; j <= totalCards; j++) {
							var currCard = "c" + String(j);
							var cardData =
								groupDecks[currDeck]["cards"][currCard];
							const newCardAdded = await addDoc(
								collection(
									db,
									"users",
									authEmail,
									"decks",
									newDeckAdded.id,
									"cards"
								),
								{
									question: cardData.question,
									answer: cardData.answer,
									title: cardData.title,
									boxType: 1,
									firstAnswered: false,
									isWrong: false,
								}
							);
							console.log("NEW CARD ID: " + newCardAdded.id);
						}
						// }
					}
					console.log("Deck Imported Successfully!");
					VueSimpleAlert.fire({
						type: "success",
						title: "Deck Imported Successfully!",
					});
				} catch (error) {
					console.log("Add Deck Error!");
					console.log(error);
				}
			}
		} catch (error) {
			console.log("Import Deck Failed");
			console.log(error);
		}
	}

	async function getRole(email) {
		try {
			const docRef = doc(db, "users", email);
			const docVal = await getDoc(docRef);
			const role = String(docVal.data().role);
			return role;
		} catch (error) {
			console.log("error");
		}
	}

	export default {
		name: "ViewCardDeck",
		components: {
			SideNav,
		},
		props: ["MyDashboard"],
		mounted() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					authEmail = user.email;
					console.log(authEmail);
					const deckObj = JSON.parse(
						sessionStorage.getItem("deckObj")
					);
					refDoc = [];
					this.displayCards(deckObj);
					const tempRole = await getRole(user.email);
					this.role = tempRole;
				}
			});
		},
		data() {
			return {
				loading: false,
				documents: [],
				role: "",
			};
		},
		methods: {
			async displayCards(deckObj) {
				onAuthStateChanged(auth, async (user) => {
					if (user) {
						const groupObj = JSON.parse(
							sessionStorage.getItem("groupObj")
						);
						console.log("View Group Card Deck: " + groupObj);
						cardsObjArray = [];
						await displayDetails(deckObj, groupObj);
						await getCards(deckObj, groupObj);
						this.documents = refDoc;
						this.loading = true;
					} else {
						router.push("/sign-in");
					}
				});
			},
			async deleteDeck() {
				VueSimpleAlert.confirm("Delete the whole deck?").then(() => {
					try {
						const deckObj = JSON.parse(
							sessionStorage.getItem("deckObj")
						);
						// const userEmail = auth.currentUser.email;
						const deckId = deckObj["deckId"];
						const groupObj = JSON.parse(
							sessionStorage.getItem("groupObj")
						);
						const groupId = groupObj["groupID"];
						deleteDoc(doc(db, "groups", groupId, "decks", deckId));
						// sessionStorage.clear();
						router.push({ name: "ViewGroupDeck" });
					} catch (error) {
						VueSimpleAlert.fire({
							type: "error",
							title: "Delete Deck Error",
							text: "Refer to error message below",
							footer: "<p>" + error + "</p>",
						});
					}
				});
			},
			async editDeck() {
				try {
					await router.push({ name: "EditGroupCardDeck" });
				} catch (error) {
					console.log(error);
				}
			},
			// async resetDeck() {
			// 	VueSimpleAlert.confirm("Reset the whole study deck?").then(
			// 		async () => {
			// 			try {
			// 				const deckObj = JSON.parse(
			// 					sessionStorage.getItem("deckObj")
			// 				);
			// 				const userEmail = auth.currentUser.email;
			// 				const deckId = deckObj["deckId"];
			// 				for (let i = 0; i < cardsObjArray.length; i++) {
			// 					const cardId = cardsObjArray[i].id;
			// 					const docRef = doc(
			// 						db,
			// 						"users",
			// 						userEmail,
			// 						"decks",
			// 						deckId,
			// 						"cards",
			// 						cardId
			// 					);
			// 					await updateDoc(docRef, {
			// 						boxType: 1,
			// 					});
			// 				}
			// 				await this.displayCards(deckObj);
			// 			} catch (error) {
			// 				console.log("rest Deck Error");
			// 				console.log(error);
			// 			}
			// 		}
			// 	);
			// },
			// async studyDeck() {
			// 	try {
			// 		if (this.documents.length !== 0) {
			// 			sessionStorage.setItem(
			// 				"retryQuestion",
			// 				JSON.stringify(false)
			// 			);
			// 			sessionStorage.setItem(
			// 				"deckCompleted",
			// 				JSON.stringify(false)
			// 			);
			// 			const tempArray = [];
			// 			sessionStorage.setItem(
			// 				"questionOrder",
			// 				JSON.stringify(tempArray)
			// 			);
			// 			await router.push({ name: "StudyDeck" });
			// 		} else {
			// 			VueSimpleAlert.fire({
			// 				type: "info",
			// 				title: "You have no questions available",
			// 				timer: 3000,
			// 			});
			// 		}
			// 	} catch (error) {
			// 		console.log("study deck error");
			// 	}
			// },
			async copyDeck() {
				const deckObj = JSON.parse(sessionStorage.getItem("deckObj"));
				console.log("Copying: " + deckObj["deckId"]);
				await copy(groupObj, deckObj);
			},
		},
	};
</script>

<style scoped>
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
	.viewCardDeckBtns {
		display: flex;
	}
	.overlap-group-txtareaViewDeck {
		/* align-items: flex-start; */
		background-color: var(--white);
		border-radius: 20px;
		box-shadow: 0px 2px 8px #00000022;
		/* display: flex; */
		height: 32em;
		margin-top: 28px;
		margin-left: 2em;
		width: 83em;
		padding: 8px 20.2px;
		text-align: center;
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

	.frame-1-editanswers {
		border-radius: 25px;
		display: flex;
		align-items: flex-start;
		margin-top: 29px;
		margin-left: 85px;
		margin-top: 20.7px;
	}

	.frame-1-resetanswers {
		border-radius: 25px;
		display: flex;
		align-items: flex-start;
		margin-top: 29px;
		margin-left: 80px;
		margin-top: 20.7px;
	}

	.frame-2-study {
		border-radius: 25px;
		display: flex;
		align-items: flex-start;
		margin-top: 29px;
		margin-left: 71px;
		margin-top: 20.7px;
	}

	.studyBtn {
		background-color: var(--shamrock);
		border-color: transparent;
		border-radius: 25px;
		height: 74px;
		width: 22em;
		margin-left: 5em;
		cursor: pointer;
		align-items: flex-start;
		box-shadow: 0px 2px 8px #00000022;
		margin-top: 29px;
		display: flex;
	}

	.resetBtn {
		background-color: var(--dull-lavender);
		border-color: transparent;
		border-radius: 25px;
		height: 74px;
		width: 22em;
		margin-left: 5em;
		cursor: pointer;
		align-items: flex-start;
		box-shadow: 0px 2px 8px #00000022;
		margin-top: 29px;
		display: flex;
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

	.study-deck-inner {
		display: flex;
		justify-content: space-between;
	}
</style>
