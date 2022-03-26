<template>

    <!-- <div class="student-dashboard-homepage screen"> -->
      <div class="deck-card-group">
        <div class="background-dashboard"></div>
        <div class="purple-deck">
           <img class="illustration" src="../../img/Dashboard/history-illustrations.png" />
            <div class="overlay-deck">
                <div v-for="(value, name) in object" :key="value.message">
                    {{ name }}: {{ value }}
                </div>
            
            <div class="deck-cards-info">
                <div class="card-title inter-semi-bold-heavy-metal-36px" id="Deck Title">Deck Title</div>
                <div class="flex-row-cards-info">
                    <div class="total-cards inter-semi-bold-heavy-metal-25px" id="totalCards">Total Cards: NIL</div>
                    <div class="needs-recaping inter-semi-bold-mustard-25px" id="needsRecapping">Needs Recapping: NIL</div>
                    <div class="uncertain-cards inter-semi-bold-mexican-red-25px" id="uncertainCards">Uncertain Cards: NIL</div>
                </div>
                <div class="estimated-time inter-semi-bold-heavy-metal-25px" id="estimatedTime">Estimated Time (min): NIL</div>
            </div>
            <div class="overlay-tagName">
              <div class="tagName inter-semi-bold-heavy-metal-23px" id="tagName">TAG</div>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
</template>

<script>


export default {
  name: "CardDeck",
};
</script>


<style scoped>
.overlay-deck {
    align-items: flex-start;
    background-color: var(--dull-lavender);
    border-radius: 40px;
    box-shadow: 0px 2px 8px #00000022;
    display: flex;
    height: 210px;
    margin-top: 30px;
    min-width: 1429px;
    padding: 19.6px 36.8px;
    position: relative;
}

.overlay-tagName {
    align-items: center;
    background-color: var(--white-22);
    border-radius: 16px;
    display: flex;
    height: 61px;
    margin-left: 250px;
    margin-top: 14.44px;
    padding: 14px 51.7px
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
  height: 1118px;
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
  width: 1922px;
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
}

.illustration {
  height: 188px;
  left: 37px;
  position: absolute;
  top: 7px;
  width: 188px;
  z-index: 2;
}
</style>