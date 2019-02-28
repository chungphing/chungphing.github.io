<template>
  <div class="container">
    <h1>{{title}}</h1>
    <h2>{{summary}}</h2>
    <h4>{{date}}</h4>
    <article>
    <img :src="thumbnail" :alt="title">
    <span v-html="html"></span>
    </article>
  </div>
</template>

<script>
import DynamicMarkdown from "~/components/DynamicMarkdown.vue";

export default {
  components: {
    DynamicMarkdown
  },
  data() {
    return {
      post: null,
      title: '',
      summary: '',
      date: '',
      thumbnail: '',
      html: '',
      error: null,
      loading: true
    };
  },
  mounted() {
    const post = require(`~/content/blog/posts/${this.$route.params.id}.md`);
    console.log('slug: ', this.$route.params.id);

    console.log('created() post:',post);

    this.post = post
    this.title = post.attributes.title
    this.summary = post.attributes.summary
    this.date = post.attributes.date
    this.thumbnail = post.attributes.thumbnail
    this.html = post.html
  }
};
</script>

<style lang="scss" scoped>
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

.navigation-item a{
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

p {
  padding: 5px 0;
}

article {
  margin: 15px 0;
}
</style>
