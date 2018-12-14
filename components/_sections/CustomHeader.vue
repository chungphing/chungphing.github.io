<template>
    <section id="header">
            <div class="container">
                <p class="header-greeting"> Hello,</p>
                <p class="header-name">I'm <span id="brand-name">Chungphing Ly</span></p>
                <div class="header-work">Web Designer / Developer.</div>
                <a 
                  v-smooth-scroll="{duration:500, offset: -50}" 
                  href="#about" 
                  aria-label="description" 
                  class="core-button" >Learn More</a>
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
  background: url('~/assets/splash1.jpg') no-repeat; 
  background-size: cover;
  .container{
    margin: 150px 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 28px;
    height: 100vh;
    .core-button {
      width: 100%;
    }
    .container{
      //margin: 0px 0;
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
  margin: 2px 2px 2px 0;
}
.header-greeting {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: inherit;
  color: $text;

}
.header-name {
  font-family: inherit;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.5rem;
  color: $text;

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
  color: $text;

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
  background-color: $blue;
  color: $text;
  height: 40px;
  width: 80px;
  margin: 30px 0;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(50,50,50,.5);
  transition: all 150ms ease-in-out;
}

.core-button:hover {
  background-color: lighten($blue, 2%);
  box-shadow: 0px 4px 10px rgba(50,50,50,0.5);

  color: white;
}
.core-button:active {
  background-color: darken($blue, 2%);
  color: white;
}
</style>

