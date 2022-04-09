<template>
  <div class="container-center-horizontal-fps">
    <div class="forget-password-status screen">
        <div class="body-fps">
            <div>
                <router-link to="/registration">
                <div class="button-send-link-fps" v-on:click="studentChoice()">
                    <div class="overlap-group-fps-pickuser">
                        <div class="login-page-fps valign-text-middle inter-bold-white-28px">Student</div>
                    </div>
                </div>
                </router-link>
                <router-link to="/registration">
                <div class="button-send-link-fps" v-on:click="teacherChoice()">
                    <div class="overlap-group-fps-pickuser">
                        <div class="login-page-fps valign-text-middle inter-bold-white-28px">Teacher</div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="overlap-group2-fps">
        <div class="header-fps-pickuser">
            <h1 class="title-fps inter-bold-black-36px">Which type of user are you creating?</h1>
        </div>
        <router-link to="/">
        <img
          class="rectangle-9521-fps"
          src="../../img/ForgetPasswordStatus/rectangle-9521-2@2x.svg"
        />
        <div class="overlap-group1-fps">
            <img
            class="logo-icon-1-fps"
            src="@/assets/logo.png"
            />
            <img
            class="repeatly-fps"
            src="../../img/ForgetPasswordStatus/repeatly@1x.png"
            />
        </div>
        </router-link>
    </div>
</div>
</template>

<script>


export default {
  name: "ForgetPasswordStatus",
  components: {

  },
  props: ['validEmail'],

  data(){
    return{
    }
  },
  methods: {
    debug (event) {
      console.log(event)
  },
    studentChoice(){
      sessionStorage.setItem("choice","student")
    },
    teacherChoice(){
      sessionStorage.setItem("choice","teacher")
    }
  },
  computed: {
    console: () => console,
    window: () => window,
  },
};
</script>

<style scoped>
.forget-password-status {
  background-color: var(--sauvignon);
  height: 1023px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.body-fps {
  cursor: pointer;
  display: flex;
  height: 70px;
  left: 1152px;
  position: absolute;
  top: 44%;
  width: 598px;
}

.overlap-group2-fps {
  /*height: 1176px;*/
  left: 0;
  position: absolute;
  top: -150px;
  width: 1754px;
}

.header-fps-pickuser {
  display: flex;
  flex-direction: column;
  /* height: 210px; */
  left: 1152px;
  position: absolute;
  top: 496px;
  /* width: 602px; */
}

.title-fps {
  height: 44px;
  letter-spacing: 0;
  width: 20em;
}

.description-fps {
  height: 102px;
  letter-spacing: 0;
  margin-top: 64px;
  width: 598px;
}

.rectangle-9521-fps {
  height: 695px;
  left: 186px;
  position: absolute;
  top: 0;
  width: 1067px;
}

.overlap-group1-fps {
  align-items: flex-start;
  background-image: url(../../img/ForgetPasswordStatus/left-image@1x.png);
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 1024px;
  left: 0;
  min-width: 1011px;
  padding: 60px 63px;
  position: absolute;
  top: 151px;
}

.logo-icon-1-fps {
  height: 85px;
  object-fit: cover;
  width: 85px;
}

.repeatly-fps {
  height: 37px;
  margin-left: 31px;
  margin-top: 24px;
  width: 169px;
}

.button-send-link-fps {
  align-items: flex-start;
  display: flex;
  height: 114px;
  min-width: 600px;
  cursor: pointer;
}

.overlap-group-fps-pickuser {
  align-items: flex-start;
  background-image: url(../../img/ForgetPasswordStatus/rectangle-4@1x.png);
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: -1px;
  min-width: 600px;
  padding: 17px 18.2px;
}

.login-page-fps {
  height: 37px;
  letter-spacing: 0;
  text-align: center;
  width: 564px;
}

</style>
