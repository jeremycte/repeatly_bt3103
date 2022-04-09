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
					<button class="deleteCardDeckbtn" v-on:click="deleteDeck()">
						<div class="frame-1-delanswers">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Delete
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
					<button class="editBtn" v-on:click="editDeck()">
						<div class="frame-1-editanswers">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Edit Deck
							</h1>
						</div>
					</button>
					<button class="resetBtn" v-on:click="resetDeck()">
						<div class="frame-1-resetanswers">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Reset Deck
							</h1>
						</div>
					</button>
					<button class="studyBtn" v-on:click="studyDeck()">
						<div class="frame-2-study">
							<h1
								class="studydeck-titleBtn inter-semi-bold-white-28px"
							>
								Study Deck
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
		getFirestore,
		collection,
		getDocs,
		doc,
		deleteDoc,
		getDoc,
		updateDoc,
	} from "firebase/firestore";
	import SideNav from "../components/SideNav.vue";
	import router from "../../router/router";
	import VueSimpleAlert from "vue-simple-alert";

	const auth = getAuth();
	const db = getFirestore(firebaseApp);
	var refDoc = [];
	var cardsObjArray = [];

	function searchDeckIndex(nameKey, arrayObj) {
		for (var i = 0; i < arrayObj.length; i++) {
			const abc = arrayObj[i].id;
			if (abc === nameKey) {
				return i;
			}
		}
	}

	async function displayDetails(userEmail, deckObj) {
		try {
			const isGroupDeck = deckObj["isGroupDeck"];
			const deckId = deckObj["deckId"];
			let deckRef = null;
			let deckResult = null;
			let deckData = {};

			// GROUP DECK
			if (isGroupDeck) {
				const userDocRef = doc(db, "users", userEmail);
				const userDoc = await getDoc(userDocRef);
				const userDocResults = userDoc.data();
				const userGroupDecks = userDocResults["groupDecks"];

				let currDeckInd = searchDeckIndex(deckId, userGroupDecks);
				const currDeck = userGroupDecks[currDeckInd];
				await updateDoc(currDeck.deckRef, currDeck.data);
				deckResult = await getDoc(currDeck.deckRef);
				deckData = deckResult.data();
			} else {
				deckRef = doc(db, "users", userEmail, "decks", deckId);
				deckResult = await getDoc(deckRef);
				deckData = deckResult.data();
			}

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

	async function getCards(userEmail, deckObj) {
		try {
			// GROUP DECK
			const isGroupDeck = deckObj["isGroupDeck"];
			const deckId = deckObj["deckId"];
			let userCards = {};

			if (isGroupDeck) {
				const userDocRef = doc(db, "users", userEmail);
				const userDoc = await getDoc(userDocRef);
				const userDocResults = userDoc.data();
				const userGroupDecks = userDocResults["groupDecks"];

				let currDeckInd = searchDeckIndex(deckId, userGroupDecks);
				const currDeck = userGroupDecks[currDeckInd];

				for (const card of currDeck["cards"]) {
					await updateDoc(card.cardRef, card.data);
				}
				const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));
				userCards = await getDocs(
					collection(
						db,
						"groups",
						groupObj["groupID"],
						"decks",
						deckId,
						"cards"
					)
				);
			} else {
				userCards = await getDocs(
					collection(
						db,
						"users",
						String(userEmail),
						"decks",
						deckId,
						"cards"
					)
				);
			}

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

	export default {
		name: "ViewCardDeck",
		components: {
			SideNav,
		},
		props: ["MyDashboard"],
		mounted() {
			const deckObj = JSON.parse(sessionStorage.getItem("deckObj"));
			refDoc = [];
			this.displayCards(deckObj);
		},
		data() {
			return {
				loading: false,
				documents: [],
			};
		},
		methods: {
			async displayCards(deckObj) {
				onAuthStateChanged(auth, async (user) => {
					if (user) {
						cardsObjArray = [];
						await displayDetails(user.email, deckObj);
						await getCards(user.email, deckObj);
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
						const userEmail = auth.currentUser.email;
						const deckId = deckObj["deckId"];
						deleteDoc(
							doc(db, "users", String(userEmail), "decks", deckId)
						);
						sessionStorage.clear();
						router.push({ name: "Home" });
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
					await router.push({ name: "EditCardDeck" });
				} catch (error) {
					console.log(error);
				}
			},
			async resetDeck() {
				VueSimpleAlert.confirm("Reset the whole study deck?").then(
					async () => {
						try {
							const deckObj = JSON.parse(
								sessionStorage.getItem("deckObj")
							);
							const userEmail = auth.currentUser.email;
							const deckId = deckObj["deckId"];
							for (let i = 0; i < cardsObjArray.length; i++) {
								const cardId = cardsObjArray[i].id;
								const docRef = doc(
									db,
									"users",
									userEmail,
									"decks",
									deckId,
									"cards",
									cardId
								);
								await updateDoc(docRef, {
									boxType: 1,
								});
							}
							await this.displayCards(deckObj);
						} catch (error) {
							console.log("rest Deck Error");
							console.log(error);
						}
					}
				);
			},
			async studyDeck() {
				try {
					if (this.documents.length !== 0) {
						sessionStorage.setItem(
							"retryQuestion",
							JSON.stringify(false)
						);
						sessionStorage.setItem(
							"deckCompleted",
							JSON.stringify(false)
						);
						const tempArray = [];
						sessionStorage.setItem(
							"questionOrder",
							JSON.stringify(tempArray)
						);
						await router.push({ name: "StudyDeck" });
					} else {
						VueSimpleAlert.fire({
							type: "info",
							title: "You have no questions available",
							timer: 3000,
						});
					}
				} catch (error) {
					console.log("study deck error");
				}
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
