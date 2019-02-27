<template>
  <section id="header">
    <header class="hero">
      <p class="hero-title dark">Hello,</p>
      <p class="hero-title dark">
        I'm
        <span id="brand-name">Chungphing Ly</span>
      </p>
      <p class="header-subtitle dark">I am a web developer, I guess...</p>
      <a
        v-smooth-scroll="{duration:500, offset: -50}"
        href="#about"
        aria-label="description"
        class="button-prime"
      >Learn More</a>
      <div class="background-art"></div>
    </header>
  </section>
</template>
<script>
//import core components

export default {
  name: "HeaderSection",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";
#header {
  color: #fff;
  font-family: "Open Sans", sans-serif;
  justify-content: center;
  align-content: center;
  position: relative;
  overflow: hidden;

  .container {
    margin: 100px 0;
  }
  .hero {
    position: relative;
    width: 250px;
    margin: 100px 0;
    margin-top: 200px;
  }
  @media only screen and (max-width: 767px) {
    padding: 28px;
    height: 80vh;
    .button-prime {
      width: 100%;
    }
    .container {
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
.hero-title {
  margin: 2px 2px 2px 0;
}
.header-subtitle {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: inherit;

  animation-name: fade-down;
  animation-duration: 1s;
  animation-delay: 250ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.hero-title {
  font-weight: bold;
  font-family: inherit;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.5rem;

  animation-name: fade-down;
  animation-duration: 1s;
  animation-delay: 200ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;

  #brand-name {
    font-family: inherit;
    font-weight: bolder;
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

.button-prime {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: none;
  letter-spacing: 2px;
  font-size: 0.875rem;
  font-weight: bolder;
  padding: 5px 15px;
  cursor: pointer;
  background-color: $blue;
  color: $text;
  height: 40px;
  margin: 14px 0;
  border-radius: 2px;
  transition: all 150ms ease-in-out;

  animation-name: fade-down;
  animation-duration: 1s;
  animation-delay: 450ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}

.button-prime:hover {
  background-color: darken($blue, 5%);
  transform: scale(1.01);
  color: $black;
}
.button-prime:active {
  background-color: darken($blue, 10%);
}

.bandaid {
  position: relative;
}

.bandaid:after {
  content: "";
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/pattern/circle_white.svg");
  background-color: $blue;
}

.background-art:before {
  content: "";
  //opacity: .5;
  position: absolute;
  top: -20%;
  left: -10%;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: transparentize($blue, 0.8);
  animation-name: slide-left-right;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.background-art:after {
  content: "";
  fill: $blue;
  //opacity: .5;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 100%;
  height: 100%;
  z-index: -2;
  pointer-events: none;
  background-image: url("/pattern/circle_blue.svg");
  animation-name: slide-right-left;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}

@keyframes slide-left-right {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  70% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes slide-right-left {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  70% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes fade-down {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

