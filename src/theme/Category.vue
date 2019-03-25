<template>
  <div class="columns">
    <div class="column is-one-third"
      v-for="(post, title) in posts"
      v-bind:key="post.id">
        <app-post :link="post.rest_api_enabler.Link">
          <h3 slot="title" v-html="post.title.rendered"> </h3>
          <p slot="content" v-html="post.excerpt.rendered"> </p>
        </app-post>
    </div>
  </div>
</template>
<script>

import Post from './Post.vue'
// import { mapGetters } from '../vuex/post.js';
 import { mapGetters } from 'vuex'

export default {
  components : {
    'app-post': Post
  },
  computed: {
    ...mapGetters('postModule', ['posts'])
  },
  methods: {
    loadPost() {
      let categoryID = 2
      if (this.$route.params.id === 'mobile') {
        categoryID = 11
      }
      this.$store.dispatch('postModule/updateCategory', categoryID)
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadPost()
    }
  },
  created() {
    this.loadPost()
  }
}
</script>
<style lang="scss">
$primary: #287ab1;

.columns{
  flex-wrap: wrap;
}
</style>

