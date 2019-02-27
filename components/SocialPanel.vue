<template>
  <div class="portal bandaid">
    <h3>Find me on these places...</h3>
    <div class="email">
      <p>chungphing@gmial.com</p>
    </div>
    <h3>Or</h3>
    <div class="social">
      <SocialItem
        v-for="socialItem in socialItems"
        :key="socialItem.alt"
        :url="socialItem.url"
        :icon="socialItem.icon"
        :alt="socialItem.alt"
      />
    </div>
  </div>
</template>

<script>
import SocialItem from "~/components/SocialItem";

export default {
  name: "SocialPanel",
  data: () => {
    return {
      socialItems: [
        {
          url: "https://www.facebook.com/chungphing",
          icon: "icon/social/facebook-logo.svg",
          alt: "facebook"
        },
        {
          url: "https://www.instagram.com/chungphing_ly/",
          icon: "icon/social/instagram-logo.svg",
          alt: "instagram"
        },
        {
          url: "https://www.linkedin.com/in/chungphing",
          icon: "icon/social/linkedin-logo.svg",
          alt: "linkedin"
        },
        {
          url: "https://github.com/chungphing",
          icon: "icon/social/github-logo.svg",
          alt: "github"
        }
      ]
    };
  },
  components: {
    SocialItem
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.about-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
  .about-description {
    display: column;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .about-social-email {
    margin: 5px;
    a {
      color: $blue;
      font-weight: 600;
    }
  }
}
.social {
  //   margin: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    justify-content: space-evenly;
  }
}
.portal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
      width: 100%;
  }
}
h3 {
  margin: 12px 26px;
  text-align: center;
  color: $text;
}
.email {
  display: block;
  width: 100%;
  text-align: center;
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

  @media screen and (min-width: 767px) {
    //border-top: 10px solid $blue-dark;
  }
}
</style>
