<template>
    <section id="header">
            <div class="container">
                <p class="header-greeting"> Hello,</p>
                <p class="header-name">I'm <span id="brand-name">Chungphing Ly</span></p>
                <div class="header-work">
                    <span class="i-do">
                        Web Designer / Developer.
                    </span>
                </div>
                <a v-smooth-scroll="{duration:500, offset: -50}" href="#about" aria-label="description" class="core-button" >Learn More</a>

            </div>
    </section>
</template>
<script>
//import core components
import CoreButton from "~/components/_baseComponents/core-button";

export default {
  name: "CustomHeader",
  components: {
    CoreButton
  }, methods: {
    onLearnmore: function () {
        // let el = document.querySelector('#about')
        // el.scrollIntoView({ 
        //   behavior: 'smooth',
        //   block: 'start',
        //   inline: 'start',
        // })      
        
    }
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";
#header{
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  justify-content: center;
  align-content: center;
  height: 30rem;

  @media only screen and (max-width: 767px) {
    padding: 28px;
    height: 100vh;
    .core-button {
      width: 100%;
    }
  }
  @media only screen and (min-width: 800px) {
    .core-button {
      min-width: 200px;
    }
  }
}
.header-greeting,
core-button,
.header-name,
.headline{
  margin: 2px;
}
.header-greeting {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: inherit;
}
.header-name {
  font-family: inherit;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.5rem;

  #brand-name {
    text-transform: uppercase;
    font-family: inherit;
    font-weight: bolder;
  }
}
.header-work {
  display: flex;
  flex-direction: row;
  width: 100%;
  letter-spacing: 1px;
  font-family: inherit;
  @media only screen and (min-width: 800px) {
    .i-do {
     font-size: 1.5rem;
    }
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


.core-button{ 
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: none;
  letter-spacing: 2px;
  font-size: .8rem;
  font-weight: bold;
  padding: 5px 15px;
  cursor: pointer;
  background-color: #318FD5;
  color: $text;
  height: 40px;
  width: 80px;
  margin: 30px 0;
  border-radius: 2px;
  transition: all 150ms ease-in-out;
}

.core-button:hover {
  background-color: #128de0af;
  color: white;
}
.core-button:active {
  background-color: #2573ad;
  color: white;
}
</style>

