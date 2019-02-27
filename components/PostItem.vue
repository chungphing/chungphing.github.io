<template>
  <div class="post">
    <div class="post-info">
      <a :href="path"><h1 class="post-title">{{ title }}</h1></a>
      <h2
        class="post-summary"
      >{{ summary }}</h2>
      <p class="post-date">{{ date }}</p>
    </div>
    <div class="post-thumbnail">
      <img :src="thumbnail" :alt="title" srcset>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostItem",
  props: ["title", "summary", "path", "date", "thumbnail"]
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

.post {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 15px 0;
  .post-info {
    flex: 1 1 auto;
  }
  .post-thumbnail {
    width: 300px;
    margin: 4px 0;

  }
  .post-title {
    font-size: 2rem;
    margin: 8px 0;
  }
   .post-summary {
    font-size: 1.2rem;
    font-weight: 400;
    margin: 8px 0;
    color: $grey;
    font-family: "Open Sans", sans-serif;
  }
  .post-date {
        font-family: "Open Sans", sans-serif;

    font-size: 1rem;
    font-weight: 350;
    color: $grey;
    margin: 8px 0;

  }
}
</style>

