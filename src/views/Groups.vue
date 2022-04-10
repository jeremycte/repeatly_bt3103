<template>
  <div className="container-center-horizontal">
    <SideNav/>
    <div id='groups-screen' className="groups-screen">
      <div v-if="role == 'teacher'">
        <GroupHeader :dashboardTitle="MyDashboard"/>
      </div>
      <div v-else>
        <HeaderGroup :dashboardTitle="MyDashboard"/>
      </div>
      <Groupings/>
    </div>
  </div>
</template>

<script>
import SideNav from "../components/SideNav.vue"
import Groupings from "../components/Groupings.vue"
import GroupHeader from '../components/GroupHeader.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";
import HeaderGroup from '../components/HeaderGroup.vue'
import {doc, getDoc, getFirestore} from "firebase/firestore";
import firebaseApp from "@/firebaseDetails";
import router from "../../router/router";

const auth = getAuth();
const db = getFirestore(firebaseApp);

async function getRole(email) {
  try {
    const docRef = doc(db, "users", email)
    const docVal = await getDoc(docRef)
    const role = String(docVal.data().role)
    return role
  } catch (error) {
    console.log("error")
  }
}

export default {
  name: "Groups",
  components: {
    Groupings,
    SideNav,
    GroupHeader,
    HeaderGroup

  },
  data() {
    return {
      role: ""
    }
  },
  mounted() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.email)
        const tempRole = await getRole(user.email)
        this.role = tempRole
      } else {
        router.push('/sign-in')
      }
    })
  },
  props: [
    "MyDashboard"
  ]
};
</script>

<style>
.groups-screen {
  margin-left: 290px;
}
</style>