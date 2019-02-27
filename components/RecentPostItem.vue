<template>
  <li class="post">
    <a :href="path">
      <img :src="thumbnail" :alt="title">
      <article class="post-content">
        <h3 class="post-title">{{ title }}</h3>
        <p>{{ summary }}</p>
      </article>
    </a>
  </li>
</template>
<script>
export default {
  name: "RecentPostItem",
  props: ["title", "summary", "path", "thumbnail"]
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

@for $i from 1 through 10 {
  .post:nth-child(#{$i}n) {
    animation-delay: #{$i * 150}ms;
  }
}
.post {
  display: block;
  width: 32%;
  margin: 5px auto;
  background-color: $white;
  border: 1px solid $separator;
  transition: all 100ms ease-in-out;
  .post-content {
    margin: 10px;
    word-break: break-word;
    hyphens: auto;
  }
  &:hover,
  & a:focus {
    transition: all 100ms ease-in-out;
    border-bottom: 1px solid $blue;
    .post-title {
      transition: all 100ms ease-in-out;
      color: $blue;
    }
  }
  @media only screen and (min-width: 767px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  .post-title {
    color: $grey;
    font-size: 0.8rem;
    font-weight: 500;
    transition: all 100ms ease-in-out;
  }
  .post-content p {
    font-size: 0.8rem;
    color: $black;
  }
}

@media only screen and (max-width: 767px) {
  .post {
    width: 100%;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      background-color: $grey-light;
      border: 1px solid $separator-dark;
    }
  }
}
</style>

