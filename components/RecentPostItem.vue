<template>
  <div class="post">
    <h3 class="post-title">{{ title }}</h3>
    <div class="post-content">
      <p>{{ summary }}</p>
    </div>
    <a :href="path" class="post-button">Read more</a>
  </div>
</template>
<script>
export default {
  name: "RecentPostItem",
  props: ["title", "summary", "path"]
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

.post {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin: 5px;
  padding: 10px;
  background-color: $white;
  border: 1px solid $separator;

  .post-content {
    // max-width: 200px;
    // overflow: hidden;
    // white-space: nowrap;
    // text-overflow: ellipsis;
    word-break: break-word;
    hyphens: auto;
    max-height: 100px;
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
    color: $blue;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .post-content p {
    font-size: 0.8rem;
    color: $black;
  }
}

@media only screen and (max-width: 767px) {
  .post {
    flex: 1 1 auto;

    cursor: pointer;
    &:hover {
      background-color: black;
    }
  }
  .post-button {
    display: none;
  }
}
</style>

