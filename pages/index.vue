<template>
  <div class="content">
    <CustomHeader></CustomHeader>
    <RecentPost />
    <About />
    <Skills />
    <Projects />
  </div>
</template>

<script>

//import section components
import CustomHeader from '~/components/_sections/CustomHeader'
import About from '~/components/_sections/About'
import Contact from '~/components/_sections/Contact'
import Projects from '~/components/_sections/Projects'
import RecentPost from '~/components/_sections/RecentPost'
import Design from '~/components/_sections/Design'
import Skills from '~/components/_sections/Skills'
export default {
  components: {
    CustomHeader,
    About,
    Contact,
    Projects,
    Design,
    Skills,
    RecentPost
  }
} 
</script>

<style lang="scss">
@import "~/assets/styles/hamburgers.css";
@import "~/assets/styles/variables.scss";
@import "~/assets/styles/mixins.scss";

//set light color for dark background
// .sticky{
//   background-color: #fff;
//   transition: all 300ms ease-in-out;
//   border-bottom: .5px solid #f3f3f3;
//   & .navigation-item{
//    color: $grey;
//   }
//   & .navigation-item:hover{
//     color: $blue;
//   }
//   & .navigation{
//     margin: 2px auto;
//   }
//   & #brand-logo{
//     fill: $grey;
//   }
// }

// .active-item {
//   color: #fff;
// }

// .navigation-item{
//   color: $text;
// }
// #brand-logo{
//   fill: #fcfcfc;
// }


//set dark color for light background
.sticky{
  background-color: #fff;
  transition: all 300ms ease-in-out;
  border-bottom: .5px solid #f3f3f3;
  & .navigation-item{
   color: $grey;
  }
  & .navigation-item:hover{
    color: $blue;
  }
  & .navigation{
    margin: 2px auto;
  }
  & #brand-logo{
    fill: $grey;
  }
}

.active-item {
  color: #fff;
}

.navigation-item{
  color: $grey;
}
#brand-logo{
  fill: $grey;
}
</style>

