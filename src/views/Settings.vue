<template>
<div class="header">
    <h1 class="title inter-bold-heavy-metal-40px">Settings</h1>
</div>
<SideNav/>
  <div class="update-user-details">
    <div class="logo-and-title">
      <img
        class="oval"
        src="../../img/Setting/oval-37@2x.png"
      />
      <div class="header-2-settings valign-text-middle inter-bold-black-28px">Update<br />User Details</div>
    </div>
    <div class="container border-1px-alto">
      <div class="update-user-details-1">
        <div class="username">
            <div class="overlap-group-1-settings">  
              <div class="overlap-group-2-settings">
                <input
                    class="placeholder-value-1 inter-normal-silver-chalice-28px"
                    placeholder="UserName"
                    v-model="username"
                    type="text"
                    required/>
            </div>
            <div class="header-1-settings inter-bold-black-28px">User Name</div>
        </div>
        </div>
      
        <div class="email">        
          <div class="overlap-group-1-settings">
            <div class="overlap-group-2-settings">
                <input
                    class="placeholder-value-1 inter-normal-silver-chalice-28px"
                    v-model="email"
                    placeholder="Type your email"
                    type="text"
                    required/>
            </div>
            <div class="header-1-settings inter-bold-black-28px">Email</div>
            </div>
        </div>
        
        <div class="dob">        
          <div class="overlap-group-1-settings">
            <div class="overlap-group-2-settings">
                <input
                    class="placeholder-value-1 inter-normal-silver-chalice-28px"
                    v-model="dob"
                    placeholder="DD/MM/YYYY"
                    type="text"
                    required/>
            </div>
              <div class="header-1-settings inter-bold-black-28px">Date Of Birth</div>
            </div>

        </div> 
        </div>
      </div>
  </div>
     <div class="update-password">
    <div class="logo-and-title-1">
      <img class="carbonpassword" src="../../img/Setting/carbon-password-5@2x.png" />
      <div class="header-2-settings valign-text-middle inter-bold-black-28px">Update Password</div>
    </div>
    <div class="container-1 border-1px-alto">
      <div class="update-password-1">
        <div class="password">    
            <div class="overlap-group-1-settings">
              <div class="overlap-group-2-settings">
                <input
                class="placeholder-value-4 inter-normal-silver-chalice-28px"
                v-model="password"
                placeholder="******"
                type="text"
                >
              </div>
            <div class="header-5 inter-bold-black-28px">Password</div>
            </div>
            </div>
          <div class="confirm-password">    
            <div class="overlap-group-1-settings">
              <div class = "overlap-group-2-settings">
                <input
                class = "placeholder-value-4 inter-normal-silver-chalice-28px"
                v-model="confirmPassword"
                placeholder = "******"
                type="text"
                >
              </div>
            <div class="header-5 inter-bold-black-28px">Confirm <br> Password</div>
            </div>
        </div>
        </div>
    </div>
  </div>
  <div class="delete-account">
    <div class="logo-and-title-3">
      <img class="vector" src="../../img/Setting/vector-6@2x.png" />
      <div class="header-6  valign-text-middle inter-bold-black-28px">Delete<br />Account</div>
    </div>
  </div>
  
  <div class="container-2 border-1px-alto">
    <div class="description">
      <div class="overlap-group1-settings">
        <div class="description-1 valign-text-middle inter-normal-black-20px">
          This will delete all your data on Repeatly. <br/> Action cannot be undone!
        </div>
        <h1 class="header-del inter-bold-black-28px">Permanently delete account</h1>
      </div>
    </div>
    <div class="del">
      <button class="del-button" v-on:click="deleteAcc()">Delete Account</button>
    </div>

  </div>
<div class="cancel-save">
  <button class="cancel-button" v-on:click="clear()">Cancel</button>
  <button class="save-button" v-on:click="save()" >Save</button>
</div>    
</template>
<script>
import SideNav from '../components/SideNav.vue';

export default {
  name: "Settings",
    components: {
        SideNav
    },
    data(){
      return{
        username:"",
        dob:"",
        email:"",
        password:"",
        confirmPassword:""
      };
    },

    methods: {
      clear(){
        this.username = "";
        this.dob = "";
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
      },
      save(){
        //dummy codes
        alert("Your infomation has been saved!");
      },
      deleteAcc(){
        const ok = confirm("Are you sure you want to delete your account?");

        if(ok){
          //insert deleting firebase account code here
          alert("Your account has been deleted");
        } else {
          alert("Your account has not been deleted");
        }
      }


  }
};
</script>


<style scoped>

.header {
  display: flex;
  height: 56px;
  left: 336px;
  position: absolute;
  top: 39px;
  width: 167px;
}

.title {
  height: 56px;
  letter-spacing: 0;
  line-height: 56px;
  white-space: nowrap;
  width: 165px;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  font-family: var(--font-family-inter);
}

.cancel-save {
  margin:100px;

  text-align: center;

}
.cancel-button {
    background-color: #A786F3; 
    border: none;
    color: white;
    font-family: inter;
    font-weight: bold;
    font-size: 50px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 22px;
    letter-spacing: 0;
    min-height: 32px;
    width: 300px;
    margin-left:100px;
  }
.save-button {
    background-color: #A786F3; 
    border: none;
    color: white;
    font-family: inter;
    font-weight: bold;
    font-size: 50px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 22px;
    letter-spacing: 0;
    min-height: 32px;
    width: 300px;
    margin-left:100px;
    cursor: pointer;

} 
.cancel-button {
  cursor: pointer;
}
.cancel-button:hover ,.save-button:hover {
    background-color: #cdb9fa
  }

.cancel-button:active , .save-button:active {
    background-color: #cdb9fa;
    box-shadow: 0 5px #666;
    transform: translateX(10px);
}
.update-user-details {
  align-items: flex-start;
  display: flex;
  height: 280px;
  left: 336px;
  min-width: 1072px;
  position: absolute;
  top: 187px;
}

.logo-and-title {
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 5.14px;
  min-height: 254px;
  width: 211px;
}

.oval {
  height: 175px;
  margin-right: 3px;
  margin-top: -5px;
  object-fit: cover;
  width: 186px;
}

.header-2-settings {
  height: 64px;
  letter-spacing: 0;
  margin-right: 2px;
  margin-top: 21px;
  text-align: center;
  width: 209px;
}

.container {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 40px;
  box-shadow: 0px 2px 8px #00000022;
  display: flex;
  justify-content: flex-end;
  margin-left: 40px;
  margin-top: -80px;
  min-width: 1058px;
  height: 320px;
  width: 800px;
  padding: 19px 23px;
}

.update-user-details-1 {
  display: flex;
  flex-direction: column;
  height: 243px;
  width: 1300px;
  margin-left: 15px;
}

.username {
  align-items: flex-end;
  display: flex;
  height: 70px;
  margin-top: 18px;
  min-width: 802px;

}
.overlap-group-1-settings {
    height: 72px;
    margin-top: -1px;
    position: relative;
    width: 801px;
    
  }
.overlap-group-2-settings{
  align-items: center;
  background-image: url("../../img/Login/rectangle1.png");
  background-size: 100% 100%;
  display: flex;
  height: 72px;
  left: 247px;
  min-width: 700px;
  padding: 0 16px;
  position: absolute;
  top: 0;
  
}

.header-1-settings {
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 19px;
  width: 496px;
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


.email{
  align-items: flex-start;
  display: flex;
  height: 70px;
  margin-top: 20px;
  min-width: 802px;
}
.dob{
  align-items: flex-start;
  display: flex;
  margin-top: -30px;
  min-width: 802px; 
}
 .update-password {
    align-items: flex-start;
    display: flex;
    height: 500px;
    left: 336px;
    min-width: 1072px;
    position: absolute;
    top: 360px;
  }

  .logo-and-title-1 {
    align-self: center;
    display: flex;
    flex-direction: column;
    height: 186px;
    margin-top: 0.25px;
    width: 175px;
    text-align: center;
  }

  .carbonpassword {
    height: 113.45px;
    margin-left: 26.9px;
    margin-top: 0;
    width: 125.82px;
    margin-bottom: 20px;
  }

  .update-password-1 {
    display: flex;
    flex-direction: column;
    height: 243px;
    width: 1300px;
    margin-left: 15px;
  }

  .container-1{
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 40px;
    box-shadow: 0px 2px 8px #00000022;
    display: flex;
    justify-content: flex-end;
    margin-left: 70px;
    margin-top: 90px;
    min-width: 1058px;
    padding: 14px 23px;
    height: 280px;
    width: 800px;
    padding: 19px 23px;
  }
  .password{
  align-items: flex-start;
  display: flex;
  height: 70px;
  margin-top: 18px;
  min-width: 802px;
  
  }

.placeholder-value-4 {
  background-color: transparent;
  border: 0;
  height: 70px;
  letter-spacing: 0;
  line-height: 16px;
  padding: 0;
  width: 546px;
}
.placeholder-value-4::placeholder {
  color: #afafaf99;
}
.header-5{
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 19px;
  width: 496px;
}

  .delete-account {
    align-items: flex-start;
    display: flex;
    height: 500px;
    left: 336px;
    min-width: 1072px;
    position: absolute;
    top: 620px;
  }

  .logo-and-title-3 {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    height: 186px;
    margin-top: 0.25px;
    width: 175px;
    text-align: center;
  }

  .vector {
    height: 90px;
    margin-left: 5px;
    width: 90px;
    margin-bottom: 20px;
  }

  .container-2 {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 40px;
    box-shadow: 0px 2px 8px #00000022;
    display: flex;
    justify-content: flex-end;
    margin-left: 580px;
    margin-top: 755px;
    min-width: 1058px;
    padding: 10px 23px;
    height: 200px;
    width: 800px;
  }

  .description {
    align-items: flex-start;
    display: flex;
    min-width: 464px;
  }

  .description-1{
    height: 102px;
    left: 0;
    letter-spacing: 0;
    position: absolute;
    top: 32px;
    width: 395px;
    text-align: center;
    margin-top: -10px;
    text-align: left;
  }

  .header-del {
    left: 0;
    letter-spacing: 0;
    position: absolute;
    top: 0;
    width: 460px;
    margin-top: -17px;
    
  }

  .overlap-group1-settings {
    position: relative;
    width: 1500px;
    font-size:  20px;
    font-family: inter;
    align-content: center;
    /* height: 580px; */
    left: 77px;
    top: 73px;
    margin-left: initial;
    
  }

  .overlap-group {
    align-items: flex-start;
    background-color: var(--cinnabar-2);
    border-radius: 25px;
    box-shadow: 0px 4px 4px 
#00000040;
    display: flex;
    height: 72px;
    margin-bottom: 2px;
    margin-left: 16px;
    min-width: 325px;
    padding: 19px 15.6px;
  }

  .del{
    margin-top: 50px;
    margin-right: 150px;
    cursor: pointer;
  }
  .del-button {
    background-color: rgb(230, 72, 72); 
    border: none;
    color: white;
    font-family: inter;
    font-weight: bold;
    font-size: 25px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 22px;
    letter-spacing: 0;
    min-height: 32px;
    width: 265px;
    cursor: pointer;
  }
  
  .del-button:hover {
    background-color: rgb(243, 107, 107);
    cursor: pointer;
  }

  .del-button:active {
    background-color: rgb(243, 107, 107);
    box-shadow: 0 5px #666;
    transform: translateY(2px);
}
</style>