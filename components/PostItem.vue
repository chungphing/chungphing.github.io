<template>
  <article>
    <nuxt-link :to="path" class="post">
      <div class="post-thumbnail">
        <img :src="thumbnail" :alt="title" srcset>
      </div>
      <div class="post-info">
        <h1 class="post-title">{{ title }}</h1>
        <h2 class="post-summary">{{ summary }}</h2>
        <p class="post-date">{{ date }}</p>
      </div>
    </nuxt-link>
  </article>
</template>
<script>
export default {
  name: "PostItem",
  props: ["title", "summary", "path", "date", "thumbnail"]
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

article {
  width: 100%;
}
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
    order: 2;
  }
  .post-title {
    font-size: 1.2rem;
    margin: 8px 0;
    color: $grey;
  }
  .post-summary {
    font-size: 1rem;
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

  &:hover {
    .post-title {
      color: $blue;
    }
  }
}

@media screen and (max-width: 767px) {
  .post{
    flex-direction: column;
    border-bottom: 1px solid $separator;
    .post-thumbnail {
      width: 100%;
      order: 0;

    }
  }
}
</style>

