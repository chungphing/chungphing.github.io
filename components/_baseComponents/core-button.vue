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
  color: #318FD5;
  font-weight: 600;
  transition: all 0.08s ease-in-out;
  min-width: 200px;
  height: 40px;
  margin: 10px 0;
  border-radius: 4px;

}

.core-button:hover {
  background-color: #128de0af;
  color: white;
}

</style>
