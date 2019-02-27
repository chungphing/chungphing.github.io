<template>
  <div class="about-social-item">
    <a :href="url" target="_blank">
      <img :src="icon" :alt="alt">
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialItem",
  props: ["url", "icon", "alt"]
};
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.about-social-item {
  flex: 1 1 auto;
  width: 25px;
  max-width: 25px;
  margin: 26px;
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    width: 25px;
    max-width: 50px;
  }
  &:first-child {
    @media only screen and (max-width: 767px) {
      //margin: 12px auto;
    }
  }
}
</style>
