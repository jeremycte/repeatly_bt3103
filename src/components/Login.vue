<template>
  <div class="container-center-horizontal">
    <div class="sign-in-1920 screen">
      <div class="overlay-background">
        <router-link to="/">
          <div class="background-setup-group">
            <div class="login-registration-side-header">
              <div class="repeatly-logo-header">
                <img class="logo-icon-login-header" src="../../img/repeatlyIcon.png" />
                <div class="repeatlyLoginIcon inter-bold-black-28px" >Repeatly</div>
              </div>
              <img class="background-setup" draggable="false" />
            </div>
          </div>
        </router-link>
        <div class="credentials">
          <div class="email">
            <div class="header inter-bold-black-28px">Email</div>
            <div class="email-element">
              <input
                  id="email"
                  class="placeholder-value-1 inter-normal-silver-chalice-28px"
                  name="placeholdervalue"
                  placeholder="Type your email"
                  type="email"
                  required/>
            </div>
          </div>
          <div class="password">
            <div class="password-header inter-bold-black-28px">Password</div>
            <div class="password-rectangle">
              <input
                  id="password"
                  class="placeholder-value inter-normal-silver-chalice-28px"
                  name="placeholdervalue"
                  placeholder="Type your password"
                  type="password"
                  required/>
            </div>
          </div>

          <div class="sign-in-btn"><button style="background-color: transparent; border: none; cursor: pointer;"
                                           type="button" v-on:click="login()"
                                           class="log-in valign-text-middle inter-bold-white-28px">
            Log In</button>
          </div>
          <router-link to="/forgot-password">
            <div class="forgot-password valign-text-middle inter-bold-black-16px">Forgot password?</div>
          </router-link>
        </div>
        <div class="header-1">
          <h1 class="title inter-bold-black-36px">Welcome back!</h1>
          <div class="welcome-description inter-normal-black-28px">Let’s learn something today!</div>
        </div>
        <img class="rectangle-9521" :src="rectangle9521" />
      </div>
      <p class="dont-have-an-account-sign-up-now valign-text-middle inter-bold-white-16px">
        <span>
          <span class="inter-bold-black-16px">Don't have an account?</span>
          <router-link to="/pick-user">
            <span class="span1 inter-bold-dull-lavender-16px"> Sign Up Now</span>
          </router-link>
        </span>
      </p>
      <social-media-login/>
    </div>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import firebaseApp from "../firebaseDetails";
import SocialMediaLogin from "@/components/SocialMediaLogin.vue";
import VueSimpleAlert from "vue-simple-alert";
firebaseApp;



export default {
  name: "Login",
  components: {
    SocialMediaLogin,
  },
  methods:{
    async login(){
      const auth = getAuth();
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      try{
        await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
        console.log("login pass")
        
      } catch(error){
        console.log("login fail")
        console.log(error)
        VueSimpleAlert.fire({
          type: 'error',
          title: 'Sign In Failed',
          text: 'Please try again',
          footer: '<p>' + error +'</p>',
        })
      }
    }
  },
  props: ["backgroundSetup", "rectangle9521", "spanText1", "spanText2", "credentialsProps", "socialMediaLoginProps"],
};
</script>



<style scoped>
/*------------------------ LOGIN & REGISTRATION HEADER DO NOT COPY TO OTHER VUE CODE, ONLY HAVE ONE*/
.login-registration-side-header {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 1024px;
  min-width: 736px;
  padding: 25px 29px;
}

.repeatly-logo-header {
  display: flex;
  width: 217px;
}

.logo-icon-login-header {
  height: 51px;
  object-fit: cover;
  width: 51px;
  z-index: 10;
  margin-top: 3em;
  margin-right: 13px;
  margin-left: 2em;
}


.repeatlyLoginIcon {
  height: 27.96px;
    /* margin-left: 0.3px; */
  margin-top: 2.2em;
  width: 127.03px;
  z-index: 10
}

.background-setup {
  height: 1024px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1011px;
  background-image: url("../../img/Login/background.png");
  background-size: cover;
  width: 1011px;
  background-position-y: center;
  background-repeat: no-repeat;
  height: 1024px;
}

.background-setup-group {
  align-items: center;
  display: flex;
  height: 1026px;
  left: 0;
  min-width: 1219px;
  position: absolute;
  top: 0;
}

/* -------------------------- END OF LOGIN & REGISTRATION*/

.sign-in-1920 {
  background-color: var(--sauvignon);
  height: 1024px;
  overflow: hidden;
  position: relative;
  width: 1920px;
}

.overlap-background {
  height: 1175px;
  left: 0;
  position: absolute;
  top: -150px;
  width: 1757px;
}



.rectangle-9521 {
  height: 695px;
  left: 214px;
  position: absolute;
  top: 0;
  width: 1067px;
}

.dont-have-an-account-sign-up-now {
  height: 37px;
  left: 1266px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 960px;
  width: 379px;
}

.span1 {
  text-decoration: underline;
  cursor: pointer;
}

.email {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  width: 602px;
}

.header {
  letter-spacing: 0;
  margin-left: 15px;
  min-height: 34px;
  width: 479px;
}

.email-element {
  align-items: center;
  background-image: url("../../img/Login/rectangle1.png");
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: 15px;
  min-width: 600px;
  padding: 0 16px;
  border-color: transparent;

}

.placeholder-value-1 {
  background-color: transparent;
  border: 0;
  height: 48px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  width: 546px;
}

.placeholder-value-1::placeholder {
  color: #afafaf99;
}

.header-1 {
  display: flex;
  flex-direction: column;
  height: 92px;
  left: 1157px;
  position: absolute;
  top: 192px;
  width: 376px;
}

.title {
  height: 44px;
  letter-spacing: 0;
  width: 270px;
}

.welcome-description {
  height: 34px;
  letter-spacing: 0;
  margin-top: 14px;
  width: 372px;
}

.credentials {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 1157px;
  min-height: 483px;
  position: absolute;
  top: 319px;
  width: 600px;
}

.password {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 57px;
  min-height: 115px;
  width: 602px;
}

.password-header {
  letter-spacing: 0;
  margin-left: 15px;
  min-height: 29px;
  width: 501px;
}

.password-rectangle {
  background-image: url("../../img/Login/rectangle2.png");
  background-size: 100% 100%;
  height: 72px;
  margin-left: -1px;
  margin-top: 15px;
  position: relative;
  width: 600px;
}

.placeholder-value {
  background-color: transparent;
  border: 0;
  height: 45px;
  left: 16px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  position: absolute;
  top: 14px;
  width: 532px;
}

.placeholder-value::placeholder {
  color: #afafaf99;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  height: 42px;
  margin-top: 22px;
  min-width: 580px;
}

.remember-me {
  align-items: center;
  display: flex;
  height: 41px;
  min-width: 301px;
  position: relative;
}

.description {
  height: 20px;
  letter-spacing: 0.3px;
  line-height: 20px;
  margin-left: 8px;
  min-width: 113px;
  white-space: nowrap;
}

.forgot-password {
  align-self: center;
  height: 51px;
  letter-spacing: 0;
  margin-top: 24px;
  text-align: center;
  text-decoration: underline;
  width: 150px;
  cursor: pointer;
}

.sign-in-btn {
  align-items: flex-start;
  background-image: url("../../img/Login/loginrectangle.png");
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: 49px;
  min-width: 600px;
  padding: 17px 18.2px;
}

.log-in {
  height: 37px;
  letter-spacing: 0;
  text-align: center;
  width: 564px;
}

.button-long-google {
  align-items: flex-start;
  display: flex;
  height: 70px;
  margin-top: 2px;
  min-width: 600px;
}

.google-container {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: -1px;
  min-width: 600px;
  padding: 9.8px 107.9px;
}

.login-icons {
  align-items: flex-start;
  display: flex;
  height: 16px;
  justify-content: flex-end;
  margin-top: 8px;
  min-width: 16px;
}



.overlap-group-2 {
  height: 49px;
  position: relative;
  width: 597px;
}

.or-do-it-via-other-accounts {
  height: 49px;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 587px;
}

.vector-1 {
  height: 2px;
  left: 9px;
  position: absolute;
  top: 24px;
  width: 183px;
}

.vector-3 {
  height: 2px;
  left: 415px;
  position: absolute;
  top: 23px;
  width: 183px;
}
</style>