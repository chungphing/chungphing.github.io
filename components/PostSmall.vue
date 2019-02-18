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
  name: "PostSmall",
  props: ["title", "summary", "path"]
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

.post-content {
  max-width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

