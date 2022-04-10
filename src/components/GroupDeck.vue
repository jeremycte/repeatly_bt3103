<template>
	<!-- <div class="student-dashboard-homepage screen"> -->
	<div class="deck-card-group">
		<div class="background-dashboard"></div>
		<router-link to="/view-group-card-deck">
			<template v-if="loading">
				<!-- <template v-if="checkTextPresence() && visibility">
					<div
						class="purple-deck"
						v-for="(item, index) in intemediateDoc"
						:key="item"
						@click="displaySelectedItem(index, intemediateDoc)"
					>
						<div
							class="illustration"
							id="imageDeck"
							:style="randomImage()"
						/>
						<div class="overlay-deck">
							<div class="deck-cards-info">
								<div
									class="card-title inter-semi-bold-heavy-metal-36px"
									id="Deck Title"
								>
									{{ item["title"] }}
								</div>
								<div class="flex-row-cards-info">
									<div
										class="total-cards inter-semi-bold-heavy-metal-25px"
										id="totalCards"
									>
										Total Cards: {{ item["totalCards"] }}
									</div>
									<div
										class="needs-recaping inter-semi-bold-mustard-25px"
										id="needsRecapping"
									>
										Needs Recapping:
										{{ item["needsRecapping"] }}
									</div>
									<div
										class="uncertain-cards inter-semi-bold-mexican-red-25px"
										id="uncertainCards"
									>
										Uncertain Cards:
										{{ item["uncertainCards"] }}
									</div>
								</div>
								<div
									class="estimated-time inter-semi-bold-heavy-metal-25px"
									id="estimatedTime"
								>
									Estimated Time (min):
									{{ item["estimatedTime"] }}
								</div>
							</div>
							<div class="overlay-tagName">
								<div
									class="tagName inter-semi-bold-heavy-metal-23px"
									id="tagName"
								>
									{{ item["tag"] }}
								</div>
							</div>
						</div>
					</div>
				</template> -->
				<!-- <template v-else> -->
				<div
					class="purple-deck"
					v-for="(item, index) in documents"
					:key="item"
					@click="displaySelectedItem(index, documents)"
				>
					<div
						class="illustration"
						id="imageDeck"
						:style="randomImage()"
					/>
					<div class="overlay-deck">
						<div class="deck-cards-info">
							<div
								class="card-title inter-semi-bold-heavy-metal-36px"
								id="Deck Title"
							>
								{{ item["title"] }}
							</div>
							<div class="flex-row-cards-info">
								<div
									class="total-cards inter-semi-bold-heavy-metal-25px"
									id="totalCards"
								>
									Total Cards: {{ item["totalCards"] }}
								</div>
								<div
									class="needs-recaping inter-semi-bold-mustard-25px"
									id="needsRecapping"
								>
									Needs Recapping:
									{{ item["needsRecapping"] }}
								</div>
								<div
									class="uncertain-cards inter-semi-bold-mexican-red-25px"
									id="uncertainCards"
								>
									Uncertain Cards:
									{{ item["uncertainCards"] }}
								</div>
							</div>
							<div
								class="estimated-time inter-semi-bold-heavy-metal-25px"
								id="estimatedTime"
							>
								Estimated Time (min):
								{{ item["estimatedTime"] }}
							</div>
						</div>
						<div class="overlay-tagName">
							<div
								class="tagName inter-semi-bold-heavy-metal-23px"
								id="tagName"
							>
								{{ item["tag"] }}
							</div>
						</div>
					</div>
				</div>
				<!-- </template> -->
			</template>
		</router-link>
	</div>
	<!-- </div> -->
</template>

<script>
	import firebaseApp from "@/firebaseDetails";
	import { getAuth, onAuthStateChanged } from "firebase/auth";
	import { collection, getDocs, getFirestore } from "firebase/firestore";
	// import VueSimpleAlert from "vue-simple-alert";

	const auth = getAuth();
	const db = getFirestore(firebaseApp);
	var refDoc = [];
	let authEmail = "";
	const prevPath = null;
	console.log("Router: " + prevPath);
	const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));

	async function getCardDetails() {
		// const groupObj = JSON.parse(sessionStorage.getItem("groupObj"));
		let userDecks = await getDocs(
			collection(db, "groups", groupObj["groupID"], "decks")
		);
		if (!userDecks.empty) {
			userDecks.forEach((docs) => {
				let deck = docs.data();
				let deckId = docs.id;
				const title = deck.title;
				const estimatedTime = deck.estimatedTime;
				const needsRecapping = deck.needsRecapping;
				const tag = deck.tag;
				const totalCards = deck.totalCards;
				const uncertainCards = deck.uncertainCards;
				const tempDeckDetails = {
					deckId: deckId,
					title: title,
					estimatedTime: estimatedTime,
					needsRecapping: needsRecapping,
					tag: tag,
					totalCards: totalCards,
					uncertainCards: uncertainCards,
				};
				refDoc.push(tempDeckDetails);
			});
		}
	}

	// async function copyDeck(groupObj, deckObj) {
	// 	var cardDict = {};
	// 	const grpID = groupObj["groupID"];
	// 	console.log("GROUP ID RETRIEVED: " + grpID);
	// 	const deckSelected = deckObj;
	// 	console.log("DECK RETRIEVED: " + deckSelected.deckId);
	// 	try {
	// 		const deckRef = doc(
	// 			db,
	// 			"groups",
	// 			grpID,
	// 			"decks",
	// 			deckSelected.deckId
	// 		);
	// 		const selectedDeck = await getDoc(deckRef);
	// 		console.log("Got Deck Here to Copy: " + selectedDeck);
	// 		// console.log('Decks Exsits: ' + allDecks.exists());

	// 		var deckIndex = 1;

	// 		console.log("Checkpoint 1");
	// 		let currDeck = selectedDeck.data();
	// 		let deckKey = "d" + String(deckIndex);
	// 		cardDict[deckKey] = { data: currDeck, cards: {} };
	// 		console.log("Checkpoint 2");
	// 		// Get Cards in the Deck
	// 		const q2 = query(
	// 			collection(
	// 				db,
	// 				"groups",
	// 				grpID,
	// 				"decks",
	// 				deckSelected.deckId,
	// 				"cards"
	// 			)
	// 		);
	// 		const allCards = await getDocs(q2);
	// 		var cardIndex = 1;
	// 		for (const card of allCards.docs) {
	// 			console.log("Checkpoint 3");
	// 			let currCard = card.data();
	// 			let cardKey = "c" + String(cardIndex);
	// 			cardDict[deckKey]["cards"][cardKey] = currCard;
	// 			cardIndex++;
	// 		}
	// 		deckIndex++;

	// 		console.log(
	// 			"Deck copying from " + grpID + " completed successfully"
	// 		);
	// 		return cardDict;
	// 	} catch (error) {
	// 		console.log("Failed to copy " + grpID + " decks");
	// 		console.log(error);
	// 	}
	// }

	// async function copy(groupObj, deckObj) {
	// 	// Copy existing groups deck into users account
	// 	try {
	// 		const groupDecks = await copyDeck(groupObj, deckObj);
	// 		console.log("Copy Deck Done!");
	// 		let totalDecks = Object.keys(groupDecks).length;
	// 		for (let i = 1; i <= totalDecks; i++) {
	// 			var currDeck = "d" + String(i);
	// 			var deckData = groupDecks[currDeck]["data"];
	// 			console.log("Current Deck " + currDeck + " Done!");

	// 			// Add Deck
	// 			try {
	// 				let newDeckAdded = {};
	// 				const copyDeckRef = doc(
	// 					db,
	// 					"groups",
	// 					groupObj.groupID,
	// 					"decks",
	// 					deckObj.deckId
	// 				);
	// 				// const deckRef = query(
	// 				// 	collection(db, "groups", authEmail, "decks"),
	// 				// 	where("title", "==", deckObj.title)
	// 				// );

	// 				// const groupSnap = await getDocs(deckRef);
	// 				// console.log("GET GET! : " + groupSnap.empty);
	// 				// console.log("REF! : " + JSON.stringify(groupSnap));

	// 				// if (groupSnap != null) {
	// 				// 	console.log("Deck exists: " + true);
	// 				// 	return;
	// 				// } else {
	// 				newDeckAdded = await addDoc(
	// 					collection(db, "users", authEmail, "decks"),
	// 					{
	// 						title: deckData.title,
	// 						tag: deckData.tag,
	// 						description: deckData.description,
	// 						estimatedTime: deckData.estimatedTime,
	// 						needsRecapping: 0,
	// 						totalCards: deckData.totalCards,
	// 						uncertainCards: 0,
	// 						isGroupDeck: true,
	// 						originalRef: copyDeckRef,
	// 					}
	// 				);
	// 				// Add Cards (if any)
	// 				if ("cards" in groupDecks[currDeck]) {
	// 					let totalCards = Object.keys(
	// 						groupDecks[currDeck]["cards"]
	// 					).length;
	// 					console.log("NEW DECK ID: " + newDeckAdded.id);
	// 					for (let j = 1; j <= totalCards; j++) {
	// 						var currCard = "c" + String(j);
	// 						var cardData =
	// 							groupDecks[currDeck]["cards"][currCard];
	// 						const newCardAdded = await addDoc(
	// 							collection(
	// 								db,
	// 								"users",
	// 								authEmail,
	// 								"decks",
	// 								newDeckAdded.id,
	// 								"cards"
	// 							),
	// 							{
	// 								question: cardData.question,
	// 								answer: cardData.answer,
	// 								title: cardData.title,
	// 								boxType: 1,
	// 								firstAnswered: false,
	// 								isWrong: false,
	// 							}
	// 						);
	// 						console.log("NEW CARD ID: " + newCardAdded.id);
	// 					}
	// 					// }
	// 				}
	// 				console.log("Deck Imported Successfully!");
	// 				VueSimpleAlert.fire({
	// 					type: "success",
	// 					title: "Deck Imported Successfully!",
	// 				});
	// 			} catch (error) {
	// 				console.log("Add Deck Error!");
	// 				console.log(error);
	// 			}
	// 		}
	// 	} catch (error) {
	// 		console.log("Import Deck Failed");
	// 		console.log(error);
	// 	}
	// }

	export default {
		name: "CardDeck",
		methods: {
			async getData() {
				onAuthStateChanged(auth, async (user) => {
					if (user) {
						await getCardDetails();
						this.randomImage();
						this.documents = refDoc;
						this.intemediateDoc = [];
						this.loading = true;
					}
				});
			},
			randomImage() {
				return (
					"background-image: " +
					`url(${
						this.images[
							Math.floor(Math.random() * this.images.length)
						]
					});`
				);
			},
			async displaySelectedItem(selectedItemIndex, refDeck) {
				console.log(
					"refDeck RETRIEVED: " + refDeck[parseInt(selectedItemIndex)]
				);
				sessionStorage.setItem(
					"deckObj",
					JSON.stringify(refDeck[parseInt(selectedItemIndex)])
				);

				// await copy(groupObj, refDeck[parseInt(selectedItemIndex)]);
			},
		},
		mounted() {
			onAuthStateChanged(auth, async (user) => {
				if (user) {
					authEmail = user.email;
					console.log(authEmail);
					refDoc = [];
					this.documents = [];
					this.intemediateDoc = [];
					this.getData();
				}
			});
		},
		data() {
			return {
				loading: false,
				documents: [],
				intemediateDoc: [],
				images: [
					"https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/tab-illustration_urxjbb.png",
					"https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/security-illustration_kuf6rq.png",
					"https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/computer-illustration_rcirpn.png",
					"https://res.cloudinary.com/jeremycte23/image/upload/f_auto,q_50/v1649429503/repeatly/history-illustrations_h1vzpp.png",
				],
				colors: [
					"rgba(209, 245, 237, 1)",
					"rgba(243, 217, 224, 1)",
					"rgba(167, 134, 243, 1)",
				],
				prevRoute: null,
			};
		},
		beforeRouteEnter(to, from, next) {
			next((vm) => {
				vm.prevRoute = from;
			});
		},
		props: ["textVal", "visibility"],
	};
</script>

<style scoped>
	.purple-deck {
		transition: all 0.3s ease;
		border-radius: 40px;
		box-shadow: 0px 2px 8px #00000022;
		cursor: pointer;
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

	.purple-deck:nth-child(odd) {
		background-color: var(--vanilla-ice);
	}
	.purple-deck:nth-child(even) {
		background-color: var(--dull-lavender);
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
