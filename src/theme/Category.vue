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
import appService from '../app.service.js'
export default {
  components : {
    'app-post': Post
  },
  data() {
    return {
      id: this.$route.params.id,
      posts:[]
    }
  },
  methods: {
    loadPost() {
      let categoryID = 2
      if (this.id === 'mobile') {
        categoryID = 11
      }
      appService.getPost(categoryID).then(data => {
        this.posts = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
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

