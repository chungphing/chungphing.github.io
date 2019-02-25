<template>
  <div class="about-social-item">
    <a :href="url">
      <img :src="icon" :alt="alt">
    </a>
  </div>
</template>

<script>

export default {
    name: 'SocialItem',
    props: ['url', 'icon', 'alt']
};
</script>

<style>
</style>
