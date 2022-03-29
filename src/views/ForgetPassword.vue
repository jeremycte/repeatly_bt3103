<template>
  <div class="overlay-background">
  <div class="header-1-forgetpasswordheader">
    <h1 class="title-forgetpasswordheader inter-bold-black-36px">Reset Your Password</h1>
    <div class="description-forgetpasswordheader inter-normal-black-28px">
      Enter your Repeatly email you signed up with. We will email you a link to log in and reset your
      password.
    </div>
  </div>
  <div class="container-center-horizontal-forgetpasswordmain">
    <div class="forget-password-screen-forgetpasswordmain">
      <div class="overlap-group3-forgetpasswordmain">
        <div class="overlap-group2-forgetpasswordmain">
          <router-link to="/">
          <div class="background-setup-group">
            <div class="login-registration-side-header">
              <div class="repeatly-logo-header">
                <img class="logo-icon-login-header" :src='"https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6231a535d957d3330e6b3b51/img/logo-icon-1@1x.png"' />
                <div class="repeatlyLoginIcon inter-bold-black-28px" >Repeatly</div>
              </div>
              <img class="background-setup" draggable="false" src="../../img/Login/background.png" />
            </div>
            <img class="slice-1-forgetpasswordmain" :src='"https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6231a4a9c59722c0165f17f9/img/slice-1@2x.png"' />
          </div>
          </router-link>

          <div class="body-forgetpasswordmain">
            <form>
            <div class="email-or-username-emailsubsection">
                <div class="header-emailsubsection inter-bold-black-28px">Enter Your Email</div>
                <div class="overlap-group1-emailsubsection" :style="{ 'background-image': 'url(' + 'https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/62344395490c786a6849ba07/img/rectangle-1@1x.png' + ')' }">
                    <input
                        class="placeholder-value-emailsubsection inter-normal-silver-chalice-28px"
                        name= "placeholdervalue"
                        placeholder="Type your email or username"
                        type="email"
                        id="email"
                        v-model="email" 
                        required= true
                    />
                </div>
            </div>
            <div class="button-send-link-forgetpasswordbutton">
                <button v-on:click="sendLink()" type="button" class="overlap-group-1-forgetpasswordbutton">
                    <div class="send-link-forgetpasswordbutton valign-text-middle inter-bold-white-28px">Send Link</div>
                </button>
            </div>
            </form>
          </div>
        </div>
        <p class="can-access-your-account-sign-in-now-forgetpasswordmain valign-text-middle inter-bold-white-16px">
            <span class="inter-bold-black-16px">Can access your account? </span>
            <router-link to="/sign-in">
            <span class="span-forgetpasswordmain inter-bold-dull-lavender-16px">Sign in now</span>
            </router-link>
        </p>
        <img
          class="rectangle-9521-forgetpasswordmain"
          src="https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6237dcb521663abe445fd24c/img/rectangle-9521@2x.svg"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebaseApp from "../firebaseDetails";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import router from "../../router/router";
firebaseApp;

export default {
  name: "ForgetPassword",
  props: [
    // "validEmail"
  ],

  data(){
    return{
      validEmail: "no",
    }
  },

  methods:{
    async sendLink(){
      try{
        const auth = getAuth();
        const email = document.getElementById("email").value
        await sendPasswordResetEmail(auth,email)
        alert("A reset password link has been sent to your email.")
        console.log("forget password passed")
        this.validEmail = "yes"
        var validEmail = this.validEmail
        router.push({ name: 'ForgetPasswordStatus', params: {validEmail} })
      } catch(error){
        alert("Please provide a valid email")
        console.log("forget Password failed")
        console.log(error)
        validEmail = "no"
        this.validEmail = "no"
        router.push({ name: 'ForgetPasswordStatus', params: {validEmail} })
      }
    }
  }

};
</script>

<style>


.header-1-forgetpasswordheader {
  display: flex;
  flex-direction: column;
  height: 160px;
  left: 1126px;
  position: absolute;
  top: 298px;
  width: 602px;
}

.title-forgetpasswordheader {
  height: 44px;
  letter-spacing: 0;
  width: 372px;
}

.description-forgetpasswordheader {
  height: 102px;
  letter-spacing: 0;
  margin-top: 14px;
  width: 598px;
}

.forget-password {
  align-items: flex-start;
  background-color: var(--sauvignon);
  display: flex;
  height: 1024px;
  overflow: hidden;
  width: 1440px;
}

.overlap-group3-forgetpasswordmain {
  height: 1176px;
  margin-top: -150.25px;
  position: relative;
  width: 1410px;
}

.overlap-group2-forgetpasswordmain {
  height: 1026px;
  left: 0;
  position: absolute;
  top: 150px;
  width: 1406px;
}

.slice-1-forgetpasswordmain {
  height: 1px;
  margin-left: 482px;
  margin-top: 229px;
  width: 1px;
}

.body-forgetpasswordmain {
  display: flex;
  flex-direction: column;
  left: 1126px;
  position: absolute;
  top: 502px;
}

.can-access-your-account-sign-in-now-forgetpasswordmain {
  cursor: pointer;
  height: 37px;
  left: 1114px;
  width: 306px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 964px;
}

.span-forgetpasswordmain {
  text-decoration: underline;
}

.rectangle-9521-forgetpasswordmain {
  height: 695px;
  left: 186px;
  position: absolute;
  top: 0;
  width: 1067px;
}

.email-or-username-emailsubsection {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  width: 602px;
}

.header-emailsubsection {
  letter-spacing: 0;
  margin-left: 15px;
  min-height: 34px;
  width: 479px;
}

.overlap-group1-emailsubsection {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: 15px;
  min-width: 600px;
  padding: 0 16px;
}

.placeholder-value-emailsubsection {
  background-color: transparent;
  border: 0;
  height: 48px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  width: 546px;
}

.placeholder-value-emailsubsection::placeholder {
  color: #afafaf99;
}

.button-send-link-forgetpasswordbutton {
  align-items: flex-start;
  display: flex;
  height: 70px;
  margin-top: 48px;
  min-width: 600px;
}

.overlap-group-1-forgetpasswordbutton {
  align-items: flex-start;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/6231a346e960d27abb0c8fdd/releases/6231a453c59722c0165f17f8/img/rectangle-4@1x.png);
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: -1px;
  min-width: 600px;
  padding: 23px 18.2px;
  cursor: pointer;
  background-color: transparent;
  border: transparent;
}

.send-link-forgetpasswordbutton {
  height: 37px;
  letter-spacing: 0;
  text-align: center;
  width: 564px;
}


</style>
