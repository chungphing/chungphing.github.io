<template>
  <section id="header">
    <div class="header-container" :class="{sticky: position > 200}">
        <nav class="header">
            <ul class="header-list">
              <li><a href="#introduction" class="header-branding" ><svg id="brand-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs></defs><title>logo</title><rect class="0e5908c1-4a6d-431b-b506-6dba3d716f88" x="1.9" y="56.12" width="496.88" height="45.87"/><polyline class="59b20561-7fcc-4ff0-9f15-fa30ac27f0a2" points="209.45 349.71 0.78 171.92 0.8 230.48 250.77 443.88 251.15 261.94 499.23 443.88 499.19 385.31 209.14 171.89"/></svg></a></li>
              <li><a href="#about" class="header-item">About</a></li>
              <li><a href="#design" class="header-item">Design</a></li>
              <li><a href="#develop" class="header-item">Develop</a></li>
              <li><a href="#work" class="header-item">Works</a></li>
              <li><a href="#contact" class="header-item">Contact</a></li>
              <li><button aria-label="main menu" class="hamburger hamburger--collapse" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button></li>
            </ul>
        </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "Topbar",
  props: {
    showTopMenu: true
  },
  data() {
    return {
      position: 0
    }
  },
  created () {
    if (process.browser) {
      var self = this;
      document.onscroll = function(e){
        self.position = document.documentElement.scrollTop || document.body.scrollTop;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~/assets/styles/hamburgers.css";
@import "~/assets/styles/variables.scss";
@import "~/assets/styles/mixins.scss";
#brand-logo{
  fill: #ffffff;
}
/*start header */
.header-container{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  z-index: 99;
}


.header {
  max-width: 80rem;
  width: 100%;
  text-align: center;
  font-family: "Dosis", sans-serif;
  z-index: 10;
  padding: 0 10px;
  margin: 30px auto;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  transition: all 300ms ease-in-out;

  .header-branding {
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 3px;
    text-align: center;
    color: $blue;
  }
  .header-item {
    vertical-align: middle;
    text-align: center;
    letter-spacing: 2px;
    font-size: 1rem;
    color: $text;
    transition: all 300ms ease-in-out;
    position: relative;
    &::after{
        position: absolute;
        content: ' ';
        height: 3px;
        width: 0;
        background-color: #2d6fff;
        left: 0;
        bottom: -3px;
        transition: width 400ms ease-in-out;

    }
    &:hover {
      color: #2d6fff;
      cursor: pointer;
      &::after{
        width: 100%;
    }
    }

    @media only screen and (max-width: 767px) {
          display: none;
    }
  }

  .hamburger {
      z-index: 100;
      color: white;
      align-self: flex-start;
      display: none;
      
      .hamburger-box {
        color: white;
      }

      @media only screen and (max-width: 767px) {
        display: flex;
      }
    }
}



.sticky{
  background-color: #fff;
  transition: all 300ms ease-in-out;
  border-bottom: 1px solid #dfdede;
  & .header-item{
   color: $grey;
  }
  & .header-item:hover{
    color: #2d6fff;
  }
  & .header{
    margin: 2px auto;
  }
  & #brand-logo{
    fill: $grey;
  }
}

.active-item {
  color: #fff;
}

.header-list {
  width: 100%;
  display: flex;
  list-style: none;
  padding: 10px 0;
  margin: 0;
  align-items: center;

  & li:first-child{
    margin-right: auto;
  }
  & li {
    margin: 0;
  }
  & a {
    padding: 10px 18px;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
