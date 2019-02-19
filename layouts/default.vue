<template>
  <div>
    <navigation></navigation>
    <nuxt/>
    <FooterSection />
  </div>
</template>
<script>
import Navigation from '~/components/Navigation.vue'
import FooterSection from '~/components/_sections/FooterSection.vue'
export default {
   components: {
    Navigation,
    FooterSection
  },
  mounted: function () {
  if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
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
  color: $blue;

  &:hover {
    color: $blue-dark;
  }
}
body{
  box-sizing: border-box;
  margin: 0 ;
  padding: 0;
}
p{
  font-family: 'Helvetica Neue', sans-serif;
  color: #353535;
}
h1{
  font-family: 'Open Sans', sans-serif;
  margin-top: 2px;
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 1.5rem;
}
h3 {
    margin-top: 2px;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 1rem;
}
/*end fix*/
#__nuxt {
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  max-width: 900px;
  width: 90%;
  flex-direction: column;
  margin: 0 auto;
}
section{
    display: -webkit-box;
    display: flex;
  flex-direction: column;
   //centering about
  align-items: center;
}

.container section {
  border-top: 1px solid $separator;
}

.section-heading {
    text-align: center;
    color: $blue;
    text-transform: uppercase;
    font-weight: normal;
    letter-spacing: 1px;
    margin: 1.5rem 3rem;
}
.section-subheading {
    text-align: center;
    color: $grey;
    text-transform: capitalize;
    font-weight: normal;
    letter-spacing: 1px;
}


.dark {
  color: $grey;
}
.light {
  color: $white;
}
.black {
  color: $black;
}
</style>

