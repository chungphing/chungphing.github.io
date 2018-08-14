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
@import "~/assets/styles/variables.scss";
img {
  width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
body{
  box-sizing: border-box;
  margin: 0 ;
  padding: 0;
}
p{
  font-family: 'Avenir', 'Dosis', sans-serif;
}
/*end fix*/
#__nuxt {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}
#__layout {
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}
.container,
.header,
.header-list,
.footer {
	display: flex;
}
.container{
  justify-content: center;
  display: flex;
  max-width: 1180px;
  width: 90%;
  flex-direction: column;
  padding-top: 28px;
  padding-bottom: 28px;
  margin: 0 auto;
}
section{
    display: -webkit-box
}
//move soon
.section-heading {
    text-align: center;
    color: $blue;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 68px;
}
.section-subheading {
    text-align: center;
    color: $grey;
    text-transform: capitalize;
    font-weight: normal;
    letter-spacing: 1px;
}
</style>

