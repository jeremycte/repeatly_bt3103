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
  height: 3.5em;
  left: 21em;
  position: absolute;
  top: 2.4375em;
  width: 10.4375em;
}

.title {
  height: 3.5em;
  letter-spacing: 0;
  line-height: 1em;
  white-space: nowrap;
  width: 10.3125em;
  font-size: 3.125em;
  font-style: normal;
  font-weight: 700;
  font-family: var(--font-family-inter);
}

.cancel-save {
  margin:6.25em;
  text-align: center;
}
.cancel-button {
    background-color: #A786F3; 
    border: none;
    color: white;
    font-family: inter;
    font-weight: bold;
    font-size: 2.125em;
    padding: 0.938em 2em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 1.375em;
    letter-spacing: 0;
    min-height: 2em;
    width: 10.75em;
    margin-left: 5.25em;    
    cursor: pointer;
  }
.save-button {
    background-color: #A786F3; 
    border: none;
    color: white;
    font-family: inter;
    font-weight: bold;
    font-size: 2.125em;
    padding: 0.938em 2em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 1.375em;
    letter-spacing: 0;
    min-height: 2em;
    width: 10.75em;
    margin-left: 5.25em;    
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
    box-shadow: 0 0.313em #666;
    transform: translateX(0.625em);
}
.update-user-details {
  align-items: flex-start;
  display: flex;
  height: 17.5em;
  left: 21em;
  min-width: 67em;
  position: absolute;
  top: 11.688em;
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
  border-radius: 2.5em;
  box-shadow: 0px 2px 8px #00000022;
  display: flex;
  justify-content: flex-end;
  margin-left: 2.5em;
  margin-top: -5em;
  min-width: 66.125em;
  height: 20em;
  width: 50em;
  padding: 19px 23px;
}

.update-user-details-1 {
  display: flex;
  flex-direction: column;
  height: 15.188em;
  width: 81.25em;
  margin-left: 0.938em;  
  }

.username {
  align-items: flex-end;
  display: flex;
  height: 4.375em;
  margin-top: 1.125em;
  min-width: 50.125em;

}
.confirm-password{
  align-items: flex-end;
  display: flex;
  height: 4.375em;
  margin-top: 1.125em;
  min-width: 50.125em;
}
.overlap-group-1-settings {
    height: 4.5em;
    margin-top: -0.063em;
    position: relative;
    width: 50.125em;
    
  }
.overlap-group-2-settings{
  align-items: center;
  background-image: url("../../img/Login/rectangle1.png");
  background-size: 100% 100%;
  display: flex;
  height: 4.5em;
  left: 15.438em;
  width:10em;
  min-width: 43.75em;
  padding: 0 1em;
  position: absolute;
  top: 0;
  
}

.header-1-settings {
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 1.188em;
  width: 31em;
}
.placeholder-value-1 {
  background-color: transparent;
  border: 0;
  height: 3em;
  letter-spacing: 0;
  line-height: 1em;
  padding: 0;
  width: 34.125em;
}

.placeholder-value-1::placeholder {
  color: #afafaf99;
}

.email{
  align-items: flex-start;
  display: flex;
  height: 4.375em;
  margin-top: 1em;
  min-width: 50.125em;
}
.dob{
  align-items: flex-start;
  display: flex;
  margin-top: 1em;
  min-width: 50.125em; 
}
.update-password {
    align-items: flex-start;
    display: flex;
    height: 31.25em;
    left: 21em;
    min-width: 67em;
    position: absolute;
    top: 22.5em
  }

.logo-and-title-1 {
    align-self: center;
    display: flex;
    flex-direction: column;
    height: 11.625em;
    margin-top: 0.016em;
    width: 10.938em;
    text-align: center;
  }

.carbonpassword {
    height: 7.091em;
    margin-left: 1.681em;
    margin-top: 0;
    width: 7.864em;
    margin-bottom: 1.25em;
  }

.update-password-1 {
    display: flex;
    flex-direction: column;
    height: 15.188em;
    width: 81.25em;
    margin-left: 0.938em;
  }

.container-1{
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 2.5em;
    box-shadow: 0px 0.125em 0.5em #00000022;
    display: flex;
    justify-content: flex-end;
    margin-left: 4.5em;
    margin-top: 5.625em;
    min-width: 66.125em;
    padding: 0.875em 1.438em;
    height: 17.5em;
    width: 50em;
    padding: 1.188em 1.438em;
    
  }
  .password{
  align-items: flex-start;
  display: flex;
  height: 4.375em;
  margin-top: 1.125em;
  min-width: 50.125em;  
  }

.placeholder-value-4 {
  background-color: transparent;
  border: 0;
  height: 4.375em;
  letter-spacing: 0;
  line-height: 1em;
  padding: 0;
  width: 34.125em;
}
.placeholder-value-4::placeholder {
  color: #afafaf99;
}
.header-5{
  left: 0;
  letter-spacing: 0;
  position: absolute;
  top: 1.188em;
  width: 31em;
}

  .delete-account {
    align-items: flex-start;
    display: flex;
    height: 31.25em;
    left: 21em;
    min-width: 67em;
    position: absolute;
    top: 38.75em;
  }

  .logo-and-title-3 {
    align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    height: 11.625em;
    margin-top: 0.016em;
    width: 10.938em;
    text-align: center;
  }

  .vector {
    height: 5.625em;
    margin-left: 0.313em;
    width: 5.625em;
    margin-bottom: 1.25em;
  }

  .container-2 {
    align-items: flex-start;
    background-color: var(--white);
    border-radius: 2.5em;
    box-shadow: 0px 2px 8px #00000022;
    display: flex;
    justify-content: flex-end;
    margin-left: 36.25em;
    margin-top: 47.188em;
    min-width: 66.125em;
    padding: 0.625em 1.438em;
    height: 12.5em;
    width: 50em;
  }

  .description {
    align-items: flex-start;
    display: flex;
    min-width: 29em;
  }

  .description-1{
    height: 6.375em;
    left: 0;
    letter-spacing: 0;
    position: absolute;
    top: 2em;
    width: 24.688em;
    text-align: center;
    margin-top: -0.625em;
    text-align: left;
  }

  .header-del {
    left: 0;
    letter-spacing: 0;
    position: absolute;
    top: 0;
    width: 28.75em;
    margin-top: -1.063em;
    
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
    border-radius: 1.563em;
    box-shadow: 0em 0.25em 0.25em #00000040;
    display: flex;
    height: 4.5em;
    margin-bottom: 0.125em;
    margin-left: 1em;
    min-width: 20.313em;
    padding: 1.188em 0.975em;
  }
  
  .del{
    margin-top: 3.125em;
    margin-right: 9.375em;
    cursor: pointer;
  }
  .del-button {
    background-color: rgb(230, 72, 72); 
    border: none;
    color: white;
    font-family: inter;
    font-weight: bold;
    font-size: 1.563em;
    padding: 0.938em 2em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 1.375em;
    letter-spacing: 0;
    min-height: 2em;
    width: 12.563em;
    margin-left: 5em;
    cursor: pointer;
  }
  
  .del-button:hover {
    background-color: rgb(243, 107, 107);
    cursor: pointer;
    }

  .del-button:active {
    background-color: rgb(243, 107, 107);
    box-shadow: 0 0.313em #666;
    transform: translateY(0.125em);
}
</style>