<template>
  <div class="container-center-horizontal">
    <div class="registration screen">
      <div class="overlap-group8-registration">
        <router-link to="/">
          <div class="background-setup-group">
            <div class="login-registration-side-header">
              <div class="repeatly-logo-header">
                <img class="logo-icon-login-header" src='../../img/repeatlyIcon.png' />
                <div class="repeatlyLoginIcon inter-bold-black-28px" >Repeatly</div>
              </div>
              <img class="background-setup" draggable="false" src="../../img/Login/background.png" />
            </div>
          </div>
        </router-link>
        <div class="body-registration">
            <div class="social-media-login-register">
              <div class="other-accountRegisterRegister">
                <div class="line-spanRegister">
                  <p class="span-line-accountRegister  valign-text-middle inter-normal-black-14px">
                    or do it via other accounts
                  </p>
                  <img
                    class="vector-1-register"
                    src="../../img/Login/vector1.png"
                  />
                  <img
                    class="vector-3-register"
                    src="../../img/Login/vector1.png"
                  />
                </div>
              </div>
              <button class="button-long-google-register" id="googleLogin" type="button" v-on:click="googleLogin()">
              <div class="overlap-group-google-register border-1px-pumice">
                <img class="flat-color-iconsgoogleRegister" src="../../img/Login/google_login.png" />
                <h1 class="title-googleRegister inter-bold-black-28px">Log In with Google</h1>
              </div>
            </button>
            </div>
          <div class="overlap-group7-registration">
            <div class="credentials-registration">
              <div class="overlap-group5-registration">
                <div class="username-registration">
                    <div class="header-registration inter-bold-black-28px">Username</div>
                    <img
                    class="rectangle-1-registration"
                    src="../../img/Login/rectangle1.png"
                    />
                </div>
                <input
                  class="placeholder-value-registration inter-normal-silver-chalice-28px"
                  name="placeholdervalue"
                  placeholder= "Type your username"
                  type= "text"
                  id="username"
                  required
                />
              </div>
              <div class="email-registration">
                <div class="header-1-registration inter-bold-black-28px">Email</div>
                <div class="overlap-group4-registration">
                  <input
                    class="placeholder-value-1-registration inter-normal-silver-chalice-28px"
                    name="placeholdervalue"
                    placeholder="Type your email"
                    type="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="password-registration">
                <div class="header-2-registration inter-bold-black-28px">Password</div>
                <div class="overlap-group3-registration">
                    <input
                    class="placeholder-value-2-registration inter-normal-silver-chalice-28px"
                    name="placeholdervalue"
                    placeholder="Type your password"
                    type="password"
                    id="password"
                    required
                    />
                <div class="button-show-password-registration">
                    <div class="login-icons-registration"></div>
                </div>
                </div>
            </div>
              <div class="dob-registration">
                <div class="header-3-registration inter-bold-black-28px">Date of Birth</div>
                <div class="overlap-group-container-registration">
                <div class="overlap-group2-registration">
                    <select id = "day" name = "day">
                      <option value="" disabled selected hidden>Day</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                  </select>
                </div>
                <div class="overlap-group1-registration">
                    <select id = "month" name = "month">
                      <option value="" disabled selected hidden>Month</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                </div>
                <div class="overlap-group-2-registration" >
                    <select id = "year" name="year">
                      <option value="" disabled selected hidden>Year</option>
                      <option :key="year" v-for="year in years" :value="year">{{ year }}</option>
                    </select>
                </div>
                </div>
            </div>
              <div class="_radio-container-registration">
                <div class="student_radio-registration">
                    <div class="radio-registration">
                    <div class="mdc-radio mdc-radio--touch" data-id="anima-widget">
                        <input class="mdc-radio__native-control" type="radio" id="radio-1-student" value="student" v-model="userrole" name="radios" />
                        <div class="mdc-radio__background">
                        <div class="mdc-radio__outer-circle"></div>
                        <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    </div>
                    <div class="im-a-registration inter-normal-black-20px">I'm a student</div>
                </div>
                <div class="teacher_radio-registration">
                    <div class="radio-registration">
                    <div class="mdc-radio mdc-radio--touch" data-id="anima-widget">
                        <input class="mdc-radio__native-control" type="radio" id="radio-1-teacher" value="teacher" v-model="userrole" name="radios" />
                        <div class="mdc-radio__background">
                        <div class="mdc-radio__outer-circle"></div>
                        <div class="mdc-radio__inner-circle"></div>
                        </div>
                        <div class="mdc-radio__ripple"></div>
                    </div>
                    </div>
                    <div class="im-a-registration inter-normal-black-20px">I'm a Teacher</div>
                </div>
              </div>
            </div>
            <div class="overlap-group6-registration">
              <img class="vector-4-registration" src='../../img/Login/vector1.png' />
              <img class="vector-5-registration" src='../../img/Login/vector2.png' />
              <div class="or-continue-with-email-registration valign-text-middle inter-normal-black-14px">
                or continue with email
              </div>
            </div>
          </div>
          <button class="overlap-group-1-registration" type="button" v-on:click="register()">
            <div class="sign-up-registration valign-text-middle inter-bold-white-28px">Sign Up</div>
          </button>
        </div>
        <p class="have-an-account-sign-in-now-registration valign-text-middle inter-bold-white-16px">
          <span>
            <span class="inter-bold-black-16px">Have an account? </span>
            <router-link to="/sign-in">
            <span class="span inter-bold-dull-lavender-16px">Sign</span>
            <span class="span inter-bold-dull-lavender-16px"> in now</span>
            </router-link>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth,GoogleAuthProvider,  
  signInWithEmailAndPassword, signInWithRedirect,getRedirectResult, createUserWithEmailAndPassword} from "firebase/auth";
import firebaseApp from "../firebaseDetails";
import {doc, setDoc,getFirestore} from "firebase/firestore";

const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
const auth = getAuth();
var user = null;

async function googleRegisterFirebase() {
  try{
    if (user != null){
      const eMail = user.email;
      const userName = user.displayName;
      const date = new Date(user.metadata.creationTime);
      const day = (date.getDate()>=10) ? date.getDate().toString() : "0"+date.getDate().toString();
      const month = "0" + (date.getMonth() + 1).toString();
      const year = date.getFullYear().toString();
      const dob = year + "/" + month + "/" + day;

      const userDocRef = await setDoc(doc(db,'users',eMail),{
        username: userName,
        email: eMail,
        DOB: dob,
      })
      console.log(userDocRef);
      console.log("google registration Passed")
    }
  }catch(error){
    console.log("google registration failed")
    console.log(error)
  }
}

getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      user = result.user;
      googleRegisterFirebase();
      console.log(user,token);
      console.log("login successful")
    }).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  console.log(errorCode,errorMessage,email,credential)
});
//import SocialMediaLogin from "@/components/SocialMediaLogin.vue";

export default {
  name: "Registration",

  components: {
  },

  data(){
    return{
      userrole: "",
    }
  },

  computed : {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index)
    }
  },

  methods:{

    async login(){
      const auth = getAuth();
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      try{
        const userDetails = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
        console.log(userDetails.user);
        console.log("login pass")
        await this.$router.push({name: "Dashboard"})
      } catch(error){
        console.log("login fail")
        console.log(error)
      }
    },

    async googleLogin(){
      try{
        await signInWithRedirect(auth,provider)
      }catch(error){
        console.log("google login fail")
        console.log(error)
      }
    },

    async register(){
      const auth = getAuth();
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const userName = document.getElementById("username").value
      const day = document.getElementById("day").value.toString()
      const month = document.getElementById("month").value.toString()
      const year = document.getElementById("year").value.toString()
      const dob = year + "/" + month + "/" + day;
      alert("registering account")
      try {

        if (userName == "" || email == "" || password == "" || day == "" || month == "" || year == "" || this.userrole == "") {
          alert("Please fill up all fields and try again.")
        } else if (password.length < 6){
          alert("Please use a stronger password of at least 6 characters")
          }
          else {
          const userDetails = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        )
          const userDocRef = await setDoc(doc(db,'users',userDetails.user.email),{
            username: userName,
            email: userDetails.user.email,
            DOB: dob,
            role: this.userrole,

        })
          console.log(userDetails.user)
          console.log(userDocRef)
          console.log("registration pass")
          alert("Registration succesful. Please sign in again.")
          await this.$router.push({name: "SignIn"})
        }
      }catch(error){
        console.log("registration fail")
        console.log(error)
        alert("You already have an account with this email, or you have given an invalid email. Please try again.")
      }
    },

  props: ["socialMediaLoginProps"]
  }
}
</script>

<style>

.background-setup {
  background-image: url("../../img/Login/background.png");
  background-size: cover;
  width: 1011px;
  background-position-y: center;
  background-repeat: no-repeat;
  /* height: 972px; */
}
.registration {
  background-color: var(--sauvignon);
  height: 1020px;
  overflow: hidden;
  position: relative;
  width: 1903px;
}

.body-registration {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 71em;
  min-height: 890px;
  position: absolute;
  top: 7em;
  width: 600px;
}

.overlap-group7-registration {
  height: 549px;
  margin-top: 35px;
  position: relative;
  width: 602px;
}

.credentials-registration {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  top: 45px;
  width: 602px;
}

.overlap-group5-registration {
  height: 120px;
  margin-right: 3px;
  position: relative;
  width: 599px;
}

.placeholder-value-registration {
  background-color: transparent;
  border: 0;
  height: 48px;
  left: 15px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  position: absolute;
  top: 61px;
  width: 546px;
}

.placeholder-value-registration::placeholder {
  color: #afafaf99;
}

._radio-container-registration {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 35px;
  min-width: 584px;
  position: relative;
  justify-content: space-around;
}

.overlap-group6-registration {
  height: 49px;
  left: 0;
  position: absolute;
  top: 0;
  width: 598px;
}

.vector-4-registration {
  height: 2px;
  left: 0;
  position: absolute;
  top: 24px;
  width: 186px;
}

.vector-5-registration {
  height: 2px;
  left: 410px;
  position: absolute;
  top: 23px;
  width: 186px;
}

.or-continue-with-email-registration {
  height: 49px;
  left: 2px;
  letter-spacing: 0;
  line-height: 16px;
  position: absolute;
  text-align: center;
  top: 15px;
  width: 596px;
}

.overlap-group-1-registration {
  background-image: url(../../img/Login/loginrectangle.png);
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: 2px;
  margin-top: 115px;
  min-width: 593px;
  padding: 17px 18px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 12px;
  border: none;
}

.sign-up-registration {
  height: 37px;
  letter-spacing: 0;
  text-align: center;
  width: 557px;
}

.have-an-account-sign-in-now-registration {
    cursor: pointer;
    height: 37px;
    left: 73em;
    letter-spacing: 0;
    position: absolute;
    text-align: center;
    top: 4em;
    width: 557px;
}

.span {
  text-decoration: underline;
}

.repeatly-logo-registration {
  display: flex;
  height: 51px;
  left: 161px;
  position: absolute;
  top: 404px;
  width: 217px;
}

.logo-icon-1-registration {
  height: 51px;
  object-fit: cover;
  width: 51px;
}

.titl-registration {
  height: 49.72px;
  letter-spacing: 0;
  line-height: 42px;
  margin-left: 10.2px;
  white-space: nowrap;
  width: 154.27px;
}

.social-media-signup-registration {
  display: flex;
  width: 597px;
}

.google-registration {
  align-items: flex-start;
  display: flex;
  height: 70px;
  min-width: 599px;
}

.google-container-registration {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 0px 4px 4px #00000040;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: -1px;
  min-width: 599px;
  padding: 9.8px 90px;
}

.flat-color-iconsgoogleRegister-registration {
  height: 49px;
  width: 51px;
}

.continue-with-google-registration {
  align-self: center;
  letter-spacing: 0;
  margin-bottom: 2.81px;
  margin-left: 15px;
  min-height: 32px;
  width: 352px;
}

.username-registration {
  display: flex;
  flex-direction: column;
  height: 120px;
  left: 0;
  position: absolute;
  top: 0;
  width: 599px;
}

.header-registration {
  height: 34px;
  letter-spacing: 0;
  margin-left: 15px;
  width: 478.2px;
}

.rectangle-1-registration {
  height: 72px;
  margin-left: -1px;
  margin-top: 15px;
  width: 599px;
}

.password-registration {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
  margin-top: 20px;
  min-height: 120px;
  width: 601px;
}

.header-2-registration {
  letter-spacing: 0;
  margin-left: 14.97px;
  min-height: 34px;
  width: 478px;
}

.overlap-group3-registration {
  background-image: url(../../img/Login/rectangle1.png);
  background-size: 100% 100%;
  height: 72px;
  margin-left: -1px;
  margin-top: 15px;
  position: relative;
  width: 599px;
}

.placeholder-value-2-registration {
  background-color: transparent;
  border: 0;
  height: 48px;
  left: 16px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  position: absolute;
  top: 12px;
  width: 546px;
}

.placeholder-value-2-registration::placeholder {
  color: #afafaf99;
}

.button-show-password-registration {
  display: flex;
  height: 32px;
  justify-content: flex-end;
  left: 525px;
  position: absolute;
  top: 28px;
  width: 24px;
}

.login-icons-registration {
  height: 16px;
  margin-top: 8px;
  width: 16px;
}

.dob-registration {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 3px;
  margin-top: 20px;
  min-height: 120px;
  width: 597px;
}

.header-3-registration {
  letter-spacing: 0;
  margin-left: 13px;
  min-height: 34px;
  width: 478px;
}

.overlap-group-container-registration {
  align-items: flex-start;
  display: flex;
  margin-left: -1px;
  margin-top: 15px;
  min-width: 597px;
}

.overlap-group2-registration {
  background-image: url(../../img/Login/rectangleSmall.png);
  background-size: 100% 100%;
  height: 72px;
  position: relative;
  width: 190px;
}

.chevron-1-registration {
  height: 10px;
  left: 106px;
  position: absolute;
  top: 35px;
  width: 21px;
}

.placeholder-value-4-registration {
  background-color: transparent;
  height: 48px;
  left: 17px;
  letter-spacing: 0;
  line-height: 47px;
  position: absolute;
  top: 12px;
  width: 121px;
}

.overlap-group1-registration {
  background-image: url(../../img/Login/rectangleSmall.png);
  background-size: 100% 100%;
  height: 72px;
  margin-left: 20px;
  position: relative;
  width: 190px;
}

.chevron-registration {
  height: 10px;
  left: 137px;
  position: absolute;
  top: 35px;
  width: 21px;
}

.placeholder-value-3-registration {
  height: 48px;
  left: 20px;
  letter-spacing: 0;
  line-height: 47px;
  position: absolute;
  top: 12px;
  width: 146px;
}

.placeholder-value-5-registration {
  height: 48px;
  left: 20px;
  letter-spacing: 0;
  line-height: 47px;
  position: absolute;
  top: 12px;
  width: 146px;
}

.overlap-group-2-registration {
  background-image: url(../../img/Login/rectangleSmall.png);
  background-size: 100% 100%;
  height: 72px;
  margin-left: 20px;
  position: relative;
  width: 190px;
}

.student_radio-registration {
  display: flex;
  width: 193px;
}

.radio-registration {
  height: 40px;
  width: 40px;
}

.im-a-registration {
  height: 24px;
  letter-spacing: 0;
  margin-left: -13px;
  width: 141px;
}

.teacher_radio-registration {
  display: flex;
  width: 193px;
}

.radio-registration .mdc-radio {
  --mdc-theme-secondary: #8b5df5;
  box-sizing: content-box;
}

select {
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  width: 188px;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('../../img/Registration/chevron-3@2x.png');
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%; 
  padding: 20px;
  border-radius: 9px;
  border: transparent;
  outline: none;
}


.social-media-login {
  display: flex;
  flex-direction: column;
  height: 121px;
  left: 1157px;
  position: absolute;
  top: 779px;
  width: 598px;
}

.other-accountRegister {
  align-items: flex-start;
  display: flex;
  min-width: 600px;
}

.line-spanRegister {
  height: 49px;
  position: relative;
  width: 597px;
}

.span-line-accountRegister {
  height: 49px;
  left: 9px;
  letter-spacing: 0;
  line-height: 16px;
  position: absolute;
  text-align: center;
  top: 14px;
  width: 587px;
}

.vector-1-register {
  height: 2px;
  left: 9px;
  position: absolute;
  top: 24px;
  width: 183px;
}

.vector-3-register {
  height: 2px;
  left: 415px;
  position: absolute;
  top: 23px;
  width: 183px;
}

.button-long-google-register {
    align-items: flex-start;
    display: flex;
    height: 70px;
    min-width: 600px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .overlap-group-google-register {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 25px;
    box-shadow: 0px 4px 4px #00000040;
    display: flex;
    height: 72px;
    margin-left: -1px;
    margin-top: -1px;
    min-width: 600px;
    padding: 11.8px 133.9px;
  }
  
  .title-googleRegister {
    align-self: center;
    letter-spacing: 0;
    /* margin-bottom: 2.81px; */
    margin-left: 27px;
    /* min-height: 32px; */
    width: 281px;
  }

  .email-registration {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 1px;
  margin-top: 20px;
  min-height: 120px;
  width: 601px;
}

.header-1-registration {
  letter-spacing: 0;
  margin-left: 14.97px;
  min-height: 34px;
  width: 478px;
}

.overlap-group4-registration {
  align-items: center;
  background-image: url(../../img/Login/rectangle1.png);
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  margin-left: -1px;
  margin-top: 15px;
  min-width: 599px;
  padding: 0 16px;
}

.placeholder-value-1-registration {
  background-color: transparent;
  border: 0;
  height: 48px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  width: 546px;
}

.placeholder-value-1-registration::placeholder {
  color: #afafaf99;
}

</style>
