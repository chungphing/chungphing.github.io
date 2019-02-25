<template>
  <div class="about-social-container bandaid">
    <h3>Find me on these places...</h3>
    <SocialItem
            v-for="socialItem in socialItems"
            :key="socialItem.alt"
            :url="socialItem.url"
            :icon="socialItem.icon"
            :alt="socialItem.alt"
          />
  </div>
</template>

<script>
import SocialItem from '~/components/SocialItem'

export default {
    name: 'SocialPanel',
    data: () => {
        return {
            socialItems: [
            { url: 'https://www.facebook.com/chungphing', icon: 'icon/social/facebook-logo.svg', alt: 'facebook' },
            { url: 'https://www.instagram.com/chungphingly/', icon: 'icon/social/instagram-logo.svg', alt: 'instagram' },
            { url: 'https://www.linkedin.com/in/chungphing', icon: 'icon/social/linkedin-logo.svg', alt: 'linkedin' },
            { url: 'https://github.com/chungphing', icon: 'icon/social/github-logo.svg', alt: 'github' },
        ]
        }
    },
    components:{
        SocialItem
    }
};
</script>

<style lang="scss" >
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
.about-social-container {
  padding: 24px 10px;
  margin: 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  //background-color: $grey-light;
  justify-content: center;
  h3 {
    flex: 4 1 auto;
    margin: 12px 26px;
    color: $text;
  }
  .about-social-item {
    flex: 1 1 auto;
    max-width: 25px;
    margin: 12px 26px;
    cursor: pointer;

    @media only screen and (max-width: 767px) {
      width: 25px;
      margin: 12px;
    }
    &:first-child {
      @media only screen and (max-width: 767px) {
        //margin: 12px auto;
      }
    }
  }
}
</style>
