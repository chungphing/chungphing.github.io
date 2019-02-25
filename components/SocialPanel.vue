<template>
  <div class="about-social-container">
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

<style>
</style>
