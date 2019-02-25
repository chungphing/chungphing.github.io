<template>
  <div class="recent-wrapper">
    <div class="container">
      <section id="recent">
        <div class="posts">
          <RecentPostItem
            v-for="post in recentPosts"
            :key="post.title"
            :title="post.title"
            :summary="post.summary"
            :path="post.path"
          />
        </div>
        <a :href="baseUrl + '/blog'" class="post-button">All Posts</a>
      </section>
    </div>
  </div>
</template>
<script>
import RecentPostItem from "~/components/RecentPostItem";
export default {
  name: "RecentPostSection",
  components: {
    RecentPostItem
  },
  computed: {
    recentPosts() {
      return this.$store.getters.recentPosts;
    },
    baseUrl: {
      get: function() {
        return process.env.baseUrl;
      }
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";
.recent-wrapper {
  background-color: $grey-light;
  border-top: $separator;
  border-bottom: $separator;
  #recent {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0;
    .posts {
      width: 100%;
      display: flex;
    }
  }
  .post-button {
    align-self: flex-end;
    font-size: 0.8rem;
    font-weight: 500;
    border-bottom: 1.3px solid $blue;
  }

  @media only screen and (max-width: 767px) {
    .posts {
      flex-direction: column;
    }
  }
}
</style>

