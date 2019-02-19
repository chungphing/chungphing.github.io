<template>
  <div>
    <div class="container">
      <section class="post-container">
        <!-- <div class="post post__first">
          <div class="post-info">
            <h1 class="post-title">Title</h1>
            <h2 class="post-summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, ex.</h2>
            <p class="post-date">Feb 19</p>
          </div>
          <div class="post-thumbnail">
            <img src="https://via.placeholder.com/400x150" alt srcset>
          </div>
        </div> -->


<!--         
        <div class="post">
          <div class="post-info">
            <h1 class="post-title">Title</h1>
            <h2 class="post-summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, ex.</h2>
            <p class="post-date">Feb 19</p>
          </div>
          <div class="post-thumbnail">
            <img src="https://via.placeholder.com/300x200" alt srcset>
          </div>
        </div>
        <div class="post">
          <div class="post-info">
            <h1 class="post-title">Title</h1>
            <h2 class="post-summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, ex.</h2>
            <p class="post-date">Feb 19</p>
          </div>
          <div class="post-thumbnail">
            <img src="https://via.placeholder.com/300x200" alt srcset>
          </div>
        </div> -->


          <PostItem
            v-for="post in blogposts"
            :key="post.title"
            :title="post.title"
            :summary="post.summary"
            :path="post.path"
            :date="post.date"
            :thumbnail="'https://via.placeholder.com/300x200'"
          />
      </section>
    </div>
  </div>
</template>

<script>
//import section components
import MyFooter from "~/components/_sections/My-Footer";
import PostItem from "~/components/PostItem";
import CustomHeader from "~/components/_sections/CustomHeader";

export default {
  computed: {
    blogposts() {
      return this.$store.getters.blogposts;
    }
  },
  components: {
    CustomHeader,
    MyFooter,
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

.post-container {
  display: flex;
  flex-direction: column;
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

