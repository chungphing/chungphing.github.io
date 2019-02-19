<template>
  <div class="content">
    <HeaderSection />
    <RecentPostSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
  </div>
</template>

<script>

//import section components
import HeaderSection from '~/components/_sections/HeaderSection'
import AboutSection from '~/components/_sections/AboutSection'
import ContactSection from '~/components/_sections/ContactSection'
import ProjectsSection from '~/components/_sections/ProjectsSection'
import RecentPostSection from '~/components/_sections/RecentPostSection'
import DesignSection from '~/components/_sections/DesignSection'
import SkillsSection from '~/components/_sections/SkillsSection'
export default {
  components: {
    HeaderSection,
    AboutSection,
    ContactSection,
    ProjectsSection,
    DesignSection,
    SkillsSection,
    RecentPostSection
  },
  mounted() {
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

