<template>
    <section id="header">
            <div class="container">
                <div class="hero">
                  <p class="hero-title dark"> Hello,</p>
                  <p class="hero-title dark">I'm <span id="brand-name">Chungphing Ly</span></p>
                  <div class="header-subtitle dark">I am a web developer, I guess...</div>
                  <a 
                    v-smooth-scroll="{duration:500, offset: -50}" 
                    href="#about" 
                    aria-label="description" 
                    class="button-prime" >Learn More</a>
                </div>
            </div>
            <svg 
                    id="background-art" 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 500 500"
                    width="1200px"
                    height="500px">
                      <defs></defs>
                      <rect class="0e5908c1-4a6d-431b-b506-6dba3d716f88" x="1.9" y="56.12" width="496.88" height="45.87"/>
                      <polyline 
                        width="496.88" height="45.87"
                        class="59b20561-7fcc-4ff0-9f15-fa30ac27f0a2" 
                        points="209.45 349.71 0.78 171.92 0.8 230.48 250.77 443.88 251.15 261.94 499.23 443.88 499.19 385.31 209.14 171.89"/>
                    </svg>
    </section>
</template>
<script>
//import core components

export default {
  name: "CustomHeader",
  components: {
    
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
  position: relative;
  overflow: hidden;
  .container{
    margin: 100px 0;
  }
  .hero {
    width: 250px;
    margin: 46px 0;
  }
  @media only screen and (max-width: 767px) {
    padding: 28px;
    height: 100vh;
    .button-prime {
      width: 100%;
    }
  }
  @media only screen and (min-width: 800px) {
    .button-prime {
      min-width: 200px;
    }
    
  }
}
.header-greeting,
.header-name,
.hero-title{
  margin: 2px 2px 2px 0;
}
.hero-title {
  font-weight: bold;
  font-size: 1.5rem;
  font-family: inherit;
  //color: $text;
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
.hero-subtitle {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: inherit;
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


.button-prime{ 
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
  margin: 14px 0;
  border-radius: 2px;
  transition: all 150ms ease-in-out;
}

.button-prime:hover {
  background-color: darken($blue, 5%);
  transform: scale(1.01);
  color: $black;
}
.button-prime:active {
  background-color: darken($blue, 10%);
}

#background-art {
  fill: $blue;
  opacity: .5;
  position: absolute;
  bottom: -150px;
  right: -100px;
  z-index: -1;
  pointer-events: none;
}

</style>

