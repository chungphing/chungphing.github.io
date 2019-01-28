<template>
  <div class="post">
    <h3 class="post-title">{{ title }}</h3>
    <div class="post-content">
      <p>{{ summary }}</p>
    </div>
    <a href="#" class="post-button">Read more</a>
  </div>
</template>
<script>
export default {
  name: "PostMini",  
  props: ['title', 'summary'],

};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";
</style>

