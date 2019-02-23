<template>
  <div class="container">
    <h1>testing slug</h1>

  </div>
</template>

<script>
import DynamicMarkdown from "~/components/DynamicMarkdown.vue";
//import post from ('~/content/blog/posts/' + this.$route.params.slug + '.md');


export default {
  data() {
    return {
       post: null
    };
  },
  created() {
    const post = require(`~/content/blog/posts/${this.$route.params.slug}.md`)
    this.post = post;
  }
};
</script>

<style>
</style>
