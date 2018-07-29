<template>
    <button v-bind:aria-label="description" @click="$emit('btnclick')" class="core-button">{{ title }}</button>
</template>

<script>
export default {
  name: 'cdev-button',
  props: ['title', 'color', 'description']
}
</script>
<style lang="scss" scoped>

.core-button{ 
  text-transform: uppercase;
  border: none;
  letter-spacing: 2px;
  padding: 12px 32px;
  cursor: pointer;
  background-color: white;
  color: black;
  transition: all 0.08s ease-in-out;
}

.core-button:hover {
  background-color: #128de0af;
  color: white;
}

</style>
