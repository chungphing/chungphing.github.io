<template>
  <div class="recent-wrapper">
    <div class="container">
      <section id="recent">
        <ul class="posts">
          <RecentPostItem
            v-for="post in recentPosts"
            :key="post.title"
            :title="post.title"
            :summary="post.summary"
            :path="post.path"
            :thumbnail="post.thumbnail"
          />
        </ul>
        <a :href="baseUrl + '/blog'" class="post-button">
          <span>All Posts</span>
        </a>
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
<style lang="scss" scoped>
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
      padding: 0;
      width: 100%;
      display: flex;
    }
  }
  .post-button {
    padding: 10px;
    margin: 0;
    align-self: flex-end;
    transition: all 100ms ease-in-out;
    span {
      border-bottom: 1px dotted $blue;
    }
  }
  .post-button:hover {
    color: $blue-dark;
    background-color: $button-hover;
    border-radius: 5px;
    transition: all 100ms ease-in-out;
    span {
      border-bottom: 1px dotted $blue-dark;
    }
  }

  @media only screen and (max-width: 767px) {
    .posts {
      flex-direction: column;
    }
  }
}
</style>

