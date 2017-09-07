<template>
  <div>
    <h1>Landing</h1>
    <p>{{ context_1 }}</p>
    <b-card-group columns>
      <b-card v-for='post in posts'
              :title="post.title"
              img-src="https://lorempixel.com/600/300/food/5/"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          {{ post.body }}
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  import resources from '@/resources'
  export default {
    name: 'landing',
    data () {
      return {
        context_1: 'Test context',
        posts: []
      }
    },
    created () {
      resources.fetchPosts().then((response) => {
        this.posts = response.body
      })
    }
  }
</script>
