<template>
  <div class="container">
    <main class="posts">
      <h1>Blog</h1>
      <PostItem
        v-for="post in blogposts"
        :key="post.title"
        :title="post.title"
        :summary="post.summary"
        :path="post.path"
        :date="post.date"
        :thumbnail="post.thumbnail"
      />
    </main>
  </div>
</template>

<script>
//import section components
import PostItem from "~/components/PostItem";

export default {
  computed: {
    blogposts() {
      return this.$store.getters.blogposts;
    }
  },
  components: {
    PostItem
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/hamburgers.css";
@import "~/assets/styles/variables.scss";
@import "~/assets/styles/mixins.scss";
.navigation-container {
  position: relative;
}
.sticky {
  background-color: #fff;
  transition: all 300ms ease-in-out;
  border-bottom: 0.5px solid #f3f3f3;
  & .navigation-item {
    color: $grey;
  }
  & .navigation-item:hover {
    color: $blue;
  }
  & .navigation {
    margin: 2px auto;
  }
  & #brand-logo {
    fill: $grey;
  }
}

.active-item {
  color: #fff;
}

.navigation-item {
  color: $grey;
}
#brand-logo {
  fill: $grey;
}

.posts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.post h1 {
  color: $text;
}
.post__first {
  flex-direction: column;
  .post-thumbnail {
    width: 100%;
  }
  .post-title {
    //TODO
    font-size: 2rem;
    font-weight: 600;
    color: $black;
  }
  .post-summary {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 2px 0;
    color: $grey;
  }
}
</style>

