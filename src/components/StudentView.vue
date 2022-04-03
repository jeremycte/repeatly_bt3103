<template>
      <div class="students">
        <div class="student-container " v-for='item in items' :key='item'>
          <!-- Insert student name here -->
          <div class="student-name inter-semi-bold-heavy-metal-23px">{{item.message}}</div>
        </div>

      </div>
</template>

<script>
export default {
    name:"StudentView",
    data() {
      return{
        items:[{message:'ben'},{message:'dan'},{message:'dan'},{message:'dan'},{message:'dan'},{message:'dan'},{message:'dan'}]
      }
    }
}
</script>
<style scoped>
.student-name {
  text-transform: capitalize;
}
.students{
  display: flex;
  flex-wrap: wrap;
  width: 100em;
  column-gap: 3.5em;
  row-gap:4em;
  margin-top:3em;
}
.student-container{
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
.student-container:nth-child(even){
  background-color: #D1F5ED;
}
.student-container:nth-child(odd){
  background-color: #A786F3;
}


</style>
