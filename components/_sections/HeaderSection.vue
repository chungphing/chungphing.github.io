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
                    class="button-prime bandaid" >Learn More</a>
                </div>
            </div>
            <div class="background-art"></div>
    </section>
</template>
<script>
//import core components

export default {
  name: "HeaderSection",
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
    height: 80vh;
    .button-prime {
      width: 100%;
    }
    .container{
      align-items: center;
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
  font-size: .875rem;
  font-weight: bolder;
  padding: 5px 15px;
  cursor: pointer;
  //background-color: $blue;
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

.bandaid{
  position: relative;
}

.bandaid:after {
  content: '';
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/pattern/circle.svg');
  background-color: $blue;
}

#background-art {
  fill: $blue;
  opacity: .5;
  position: absolute;
  bottom: -150px;
  right: -100px;
  z-index: -1;
  pointer-events: none;

  @media only screen and (max-width: 767px){
    top: 20%;
    right: -80%;
  }
}

</style>

