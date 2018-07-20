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

<style>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
body{
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
/*end fix*/
#__nuxt {
  font-family:  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
#__layout {
   width: 100%;
  margin: auto;
  max-width: 1012px;
  min-height: 100vh;
  color: #454545;
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

