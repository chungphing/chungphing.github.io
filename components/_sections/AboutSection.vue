<template>
  <div class="container">
    <section id="about">
      <h1 class="about-header section-heading">about me</h1>
      <div class="about-card">
        <div class="about-card-detail">
          <div class="about-social">
            <div class="about-card-portrait">
              <img src="~/assets/img/portrait.png" alt="portrait" class="about-card-portrait-img">
            </div>
          </div>
          <div class="about-card-detail-text">
            <p>I'm a Web Developer based in Phnom Penh. From brochure website to commercial web application, I am excited to bringing new idea to life.</p>
          </div>
          <div class="about-card-detail-text">
            <p>Throughout the years, I have worked on multiple platforms / frameworks with Node.js, React, Redux, Vue.js, Laravel, Codeigniter, Wordpress, and Android app development with Java and React Native</p>
          </div>
          <div class="about-card-detail">
            <SocialPanel />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SocialPanel from '~/components/SocialPanel'

export default {
  name: "About",
  components: {
    SocialPanel
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

#about {
  border-top: none;
}

.about-card {
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  .about-card-detail-text {
    line-height: 1.5;
  }
}
.about-card-portrait {
  width: 120px;
  margin: 20px 50px;
}
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
  background-color: $grey-light;
  justify-content: center;
  h3 {
    flex: 4 1 auto;
    margin: 12px 26px;
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

