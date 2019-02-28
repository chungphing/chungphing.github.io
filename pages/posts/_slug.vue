<template>
  <div class="container">
    <h1>{{attr.title}}</h1>
    <h2>{{attr.summary}}</h2>
    <h4>{{attr.date}}</h4>
    <img :src="attr.thumbnail" :alt="attr.title">
    <span v-html="post.html"></span>
  </div>
</template>

<script>
import DynamicMarkdown from "~/components/DynamicMarkdown.vue";
//import post from ('~/content/blog/posts/' + this.$route.params.slug + '.md');

export default {
  components: {
    DynamicMarkdown
  },
  data() {
    return {
      post: null,
      attr: null
    };
  },
  created() {
    const post = require(`~/content/blog/posts/${this.$route.params.slug}.md`);
    console.log("POST", post);

    this.post = post;
    this.attr = post.attributes;
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

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

h1 {
  color: $grey;
  font-size: 1.8rem;
}

h2 {
  color: $grey;
  font-weight: 400;
  font-size: 1.5rem;
}
h4 {
  color: $grey;
}
</style>
