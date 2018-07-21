<template>
    <button @click="$emit('route')" class="core-button">{{ title }}</button>
</template>

<script>
export default {
  name: 'cdev-button',
  props: ['title', 'color']
}
</script>
<style lang="scss" scoped>

.core-button{ 
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  border: none;
  padding: 8px 32px;
  cursor: pointer;
  background-color: white;
  color: #128ee0;
  transition: all 0.08s ease-in-out;
}

.core-button:hover {
  background-color: #128ee0;
  color: white;
}

</style>
