<template>
    <section id="introduction">
            <div class="container">
                <p class="introduction-greeting"> Hello,</p>
                <p class="introduction-name">I'm <span id="brand-name">Chungphing Ly</span></p>
                <div class="introduction-work">
                    <span class="i-do">
                        I'm a web and mobile developer.
                    </span>
                    <!-- <transition-group  tag="div" class="brand-slide" name="slide">
                        <span class="brand-skill" v-for="number in [index]" v-bind:key="number">{{ skilllist[Math.abs(index) % skilllist.length] }}</span>
                    </transition-group> -->
                </div>
            <div>
            <core-button 
            v-on:btnclick="smoothScrollTo('about')"
                title="Learn More"
                description="Learn More"
                >
            </core-button>
            </div>
        </div>
    </section>
</template>
<script>
//import core components
import CoreButton from "~/components/_baseComponents/core-button";

export default {
  name: "Introduction",
  components: {
    CoreButton
  }, methods: {
    smoothScrollTo: function (section) {
      
      if(section === 'home'){
        console.log('go home');
        
        this.$SmoothScroll(0,1000,null,null,'both')
        return null
      }
      let el = document.querySelector('#'+section)
      console.log(el);
      
      if(el !== null) {
        console.log('should be scrolling')
        this.$SmoothScroll(el,1000,null,null,'both')
      }
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";
#introduction{
  color: #fff;
  font-family: 'Dosis', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: url('~/assets/splash1.jpg') no-repeat; 
  background-size: cover;
  height: 30rem;
}
.introduction-greeting,
core-button,
.introduction-name,
.headline{
  margin: 2px;
}
.introduction-greeting {
  font-size: 28px;
  font-family: inherit;
}
.introduction-name {
  font-family: inherit;
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 28px;
}
.introduction-name #brand-name {
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
}
.introduction-work {
  display: flex;
  flex-direction: row;
  width: 100%;
  letter-spacing: 1px;
  font-family: inherit;
}
@media only screen and (max-width: 767px) {
  .introduction-container{
    height: 90vh;
  }
  .introduction{
    padding: 28px;
  }
  .introduction::after{
    height: 100vh;
  }
  .scroll {
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  .core-button {
    width: 100%;
  }
  
}
@media only screen and (min-width: 800px) {
  .brand-slide{
    width: 350px;
  }
  .i-do {
    font-size: 28px;
  }
  .core-button {
    min-width: 200px;
  }
}
/* animation */
.slide-leave-active,
.slide-enter-active {
  transition: 300ms;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
}
</style>

