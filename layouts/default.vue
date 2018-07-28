<template>
  <div>
    <topbar></topbar>
    <nuxt/>
  </div>
</template>
<script>
import Topbar from '~/components/topbar.vue'

export default {
   components: {
    Topbar
  }
}
</script>

<style lang="scss">
@import url('~/assets/styles/variables.scss');
img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
body{
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/*end fix*/
#__nuxt {
  font-family: 'Catamaran', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  width: 100%;
  display: flex;
  justify-content: center;
}
#__layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}
.container,
.content,
.header,
.header-list,
.footer {
	display: flex;
}
.container{
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 28px;
}
.content{
  flex: 1;
}
</style>

