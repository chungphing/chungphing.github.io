<template>
  <section id="navigation">
    <div class="navigation-container" :class="{sticky: position > 200}">
      <nav class="navigation container">
        <ul class="navigation-list">
          <li class="navigation-branding">
            <a :href="baseUrl + '#header'" v-smooth-scroll="{duration:500, offset: -50}">
              <svg
                id="brand-logo"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                width="46px"
                height="46px"
              >
                <defs></defs>
                <title>Chungphing LY</title>
                <rect
                  class="0e5908c1-4a6d-431b-b506-6dba3d716f88"
                  x="1.9"
                  y="56.12"
                  width="496.88"
                  height="45.87"
                ></rect>
                <polyline
                  width="496.88"
                  height="45.87"
                  class="59b20561-7fcc-4ff0-9f15-fa30ac27f0a2"
                  points="209.45 349.71 0.78 171.92 0.8 230.48 250.77 443.88 251.15 261.94 499.23 443.88 499.19 385.31 209.14 171.89"
                ></polyline>
              </svg>
            </a>
          </li>
          <li class="navigation-item">
            <a :href="baseUrl + '#about'" v-smooth-scroll="{duration:500, offset: -50}">About</a>
          </li>
          <li class="navigation-item">
            <a :href="baseUrl + '#develop'" v-smooth-scroll="{duration:500, offset: -50}">Skills</a>
          </li>
          <li class="navigation-item">
            <a :href="baseUrl + '#project'" v-smooth-scroll="{duration:500, offset: -50}">Works</a>
          </li>
          <li class="navigation-item">
            <a :href="baseUrl + '/blog'" v-smooth-scroll="{duration:500, offset: -50}">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "CustomNavigation",
  props: {
    showTopMenu: true
  },
  data() {
    return {
      position: 0
    };
  },
  mounted() {
    if (process.browser) {
      var self = this;
      document.onscroll = function(e) {
        self.position =
          document.documentElement.scrollTop || document.body.scrollTop;
      };
    }
  },
  computed: {
    baseUrl: {
      get: function() {
        return process.env.baseUrl;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~/assets/styles/hamburgers.css";
@import "~/assets/styles/variables.scss";
@import "~/assets/styles/mixins.scss";
/*start navigation */
.navigation-container {
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  z-index: 99;
}

.navigation {
  max-width: 900px;
  width: 90%;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  z-index: 10;
  margin: 30px auto;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  transition: all 300ms ease-in-out;

  .navigation-branding {
    color: $blue;
    padding-left: 0;
  }

  .navigation-list {
    width: 100%;
    display: flex;
    list-style: none;
    padding: 5px 0;
    margin: 0;
    align-items: center;
    .navigation-branding {
      margin-right: auto;
    }
    .navigation-item {

      a {
        vertical-align: middle;
        text-align: center;
        font-size: 0.9rem;
        transition: all 300ms ease-in-out;
        position: relative;
        padding: 10px 18px;

        &:hover {
          color: $blue;
          cursor: pointer;
          &::after {
            width: 100%;
          }
        }
        &:last-child {
          padding-right: 0;
          margin-right: 0;
        }

        @media only screen and (max-width: 767px) {
          display: none;
        }
      }
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

      .navigation-branding {
        align-self: center;
      }
    }
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
