<template>
    <button class="cdev-button" :class="color">{{ title }}</button>
</template>

<script>
export default {
    name: 'cdev-button',
    props: ['title', 'color']
}
</script>
<style lang="scss" scoped>

</style>
