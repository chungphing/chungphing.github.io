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
                            <div class="about-social-container">
                                <div class="about-social-item">
                                    <a href="https://www.facebook.com/chungphing"><img src="~/assets/icon/facebook-logo.svg" alt="facebook"></a>
                                </div>
                                <div class="about-social-item">
                                    <a href="https://www.instagram.com/chungphingly/"><img src="~/assets/icon/instagram-logo.svg" alt="github"></a>
                                </div>
                                <div class="about-social-item">
                                    <a href="https://www.linkedin.com/in/chungphing"><img src="~/assets/icon/linkedin-logo.svg" alt="linkedin"></a>
                                </div>
                                <div class="about-social-item">
                                    <a href="https://github.com/chungphing"><img src="~/assets/icon/github-logo.svg" alt="linkedin"></a>
                                </div>
                            </div>
                            <div class="about-social-email">
                                Email: <a href="mailto:chungphing@gmail.com">chungphing@gmail.com</a>
                            </div>
                        </div>
                        <div class="about-card-detail-text">
                            <p>I'm a Web Developer based in Phnom Penh. From brochure website to commercial web application, I am excited to bringing new idea to life.</p>
                        </div>
                        <div class="about-card-detail-text">
                            <p>Throughout the years, I have worked on multiple platforms / frameworks with Node.js, React, Redux, Vue.js, Laravel, Codeigniter, Wordpress, and Android app development with Java and React Native</p>
                        </div>
                    </div>
                </div>
                
        </section>
    </div>
</template>
<script>
export default {
  name: "About"
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";
.about-card {
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
  }
  .about-card-detail-text {
      max-width: 900px;
      margin: 0 15px;
      line-height: 1.5;
  }
}
.about-card-portrait {
  width: 180px;
  margin: 20px 50px;
}
.about-social{
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width: 767px) {
      justify-content: center;
    }
    .about-social-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
  .about-social-item{
    width: 25px;
    margin: 12px;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
      width: 25px;
      margin: 12px;
    }
    &:first-child{
      @media only screen and (max-width: 767px) {
        //margin: 12px auto;
      }
    }
    
  }
  .about-description {
      display: column;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
  .about-social-email{
      margin: 5px;
      a{
          color: $blue;
          font-weight:600;
      }
  }
}

</style>

