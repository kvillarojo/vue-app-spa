<template>
  <div class="content">
    <h2>Login</h2>

    <div v-if="isAuthenticated">
      Authenticated
      <p>Name : {{ profile.firstName }}</p>
      <p>Favorite Sandwich : {{ profile.favoriteSandwich }}</p>
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
  import eventBus from '../event-bus.js';
  export default {
   data () {
     return {
       username : '',
       password : '',
       isAuthenticated: false,
       profile: {}
     }
   },
   watch : {
     isAuthenticated : function (val) {
      if(val){
        appServices.getProfile()
          .then(profile => {
            this.profile = profile
          })
      }else{
        this.profile = {}
      }
      eventBus.$emit('authStatusUpdate', val)
     }
   },
   methods : {
     login () {
       appServices.login({username: this.username, password: this.password})
        .then((data) => {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('tokenExpiration', data.expiration)
          this.isAuthenticated = true
          this.username = ''
          this.password = ''
        })
        .catch(() => window.alert('could not login'))
     },
     logout () {
       this.username = ''
       this.password = ''
       this.isAuthenticated = false
     }
   },
  created () {
    var expiration = window.localStorage.getItem('tokenExpiration')
    var unixTimeStamp = new Date().getTime() / 1000
    if(expiration !== null && parseInt(expiration) - unixTimeStamp > 0){
      this.isAuthenticated = true
    }
  }
 }
 </script>
 <style>

 </style>

