<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <router-link to="/">
        <img src="http://bit.ly/vue-img"
          alt="Vue SPA"/>
      </router-link>
      <router-link :to="{name: 'category', params: {id: 'front-end'}}" class="navbar-item is-tab">
        Front End
      </router-link>
       <router-link :to="{ name: 'category', params: {id: 'mobile' }}" class="navbar-item is-tab">
        Mobile
      </router-link>
      <router-link to="/login" class="navbar-item is-tab">
        <span v-if="isAuthenticated">Log out</span> <span v-else>  Login </span>
      </router-link>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  // data() {
  //   return {
  //     isAuthenticated: false
  //   }
  // },
  // created(){
  //   eventBus.$on('authStatusUpdate', isAuthenticated => {
  //     this.isAuthenticated = isAuthenticated
  //   })
  // }
  computed: {
    // isAuthenticated() {
      // return this.$store.state.isAthenticated
    // }
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

