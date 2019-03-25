<template>
  <div class="content">
    <h2>Login</h2>

    <div v-if="isAuthenticated">
      Authenticated
      <div >
          <button @click="logout()" class="button is-warning"> Logout </button>
      </div>
    </div>
    <div v-else>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input" v-model="username" type="text"
            placeholder="Your username">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input" v-model="password" type="password"
            placeholder="Your password">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <button @click="login()" class="button is-primary">
            Login
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import appServices from '../app.service.js';
  import { mapGetters, mapActions } from 'vuex'
  export default {
   data () {
     return {
       username : '',
       password : ''
      //  profile: {}
     }
   },
   computed: {
     ...mapGetters(['isAuthenticated'])
   },
  //  watch : {
    //  isAuthenticated : function (val) {
    //   if(val){
    //     appServices.getProfile()
    //       .then(profile => {
    //         this.profile = profile
    //       })
    //   }else{
    //     this.profile = {}
    //   }
    //  }
  //  },
   methods : {
     ...mapActions({
       logout: 'logout'
     }),
     login () {
       this.$store.dispatch('login', {username: this.username, password: this.password})
       .then(() => {
         this.username = ''
         this.password = ''
       })
     }
   }
  // created () {
  //   var expiration = window.localStorage.getItem('tokenExpiration')
  //   var unixTimeStamp = new Date().getTime() / 1000
  //   if(expiration !== null && parseInt(expiration) - unixTimeStamp > 0){
  //     // this.isAuthenticated = true
  //   }
  // }
 }
 </script>
 <style>

 </style>

