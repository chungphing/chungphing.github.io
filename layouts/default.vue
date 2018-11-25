<template>
  <div>
    <navigation></navigation>
    <nuxt/>
  </div>
</template>
<script>
import Navigation from '~/components/Navigation.vue'

export default {
   components: {
    Navigation
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
  background: url('~/assets/splash1.jpg') no-repeat; 
  background-size: 100% 600px;
}
p{
  font-family: 'Avenir', 'Dosis', sans-serif;
}
/*end fix*/
#__nuxt {
  font-family: 'Avenir', 'Dosis', sans-serif;
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
  margin: 0 auto;
}
.container-about {
   background-color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 auto;
    border-radius: 30px 30px 0 0;
    margin-top: 40px;
    box-shadow: 0 -5px 10px -6px #616161;
      transition: all 300ms ease-in-out;
}
section{
    display: -webkit-box;
    display: flex;
  flex-direction: column;
   //centering about
  align-items: center;

}
// section#about {
//   //centering about
//   align-items: center;
// }
//move soon
.section-heading {
    text-align: center;
    color: $blue;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 3rem;
}
.section-subheading {
    text-align: center;
    color: $grey;
    text-transform: capitalize;
    font-weight: normal;
    letter-spacing: 1px;
}

</style>

