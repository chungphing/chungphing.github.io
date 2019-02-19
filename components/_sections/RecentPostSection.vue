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
        <a href="#" class="post-button">More Posts</a>
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
      flex-direction: row;

      .post {
        display: flex;
        flex-direction: column;
        width: 33.3333%;
        margin: 16px;
        padding: 24px;
        background-color: $white;
        border: 1px solid $separator;

        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }

        .post-title {
          color: $blue;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .post-content p {
          font-size: 0.8rem;
          color: $black;
        }
      }
    }
  }
  .post-button {
    align-self: flex-end;
    font-size: 0.8rem;
    font-weight: 500;
    border-bottom: 1.3px solid $blue;
  }
}
</style>

