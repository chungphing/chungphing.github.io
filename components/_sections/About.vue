<template>
    <div class="container">
        <section id="about">
            <h1 class="about-header section-heading">about</h1>
                <div class="about-card">
                    <div class="about-card-portrait">
                        <img src="~/assets/img/portrait.png" alt="portrait" class="about-card-portrait-img">
                    </div>
                    <div class="about-card-detail">
                        <div class="about-card-detail-text">
                            <p>I’m currently a web developer and mobile developer based in Phnom Penh, Cambodia</p>
                        </div>
                        <div class="about-card-detail-text">
                            <p>I inspired to create beautiful and functional website and app. But my first priority is always making sure that the most standout aspect is the contents itself.</p>
                        </div>
                        <div class="about-card-detail-text">
                            <p>Other than Web and mobile, I also like graphic design and animation. I feel like motion graphic in general is undervalue in our local communities</p>
                        </div>
                        <div class="about-social">
                            <div class="about-social-item">
                                <img src="~/assets/icon/facebook-logo.svg" alt="facebook">
                            </div>
                            <div class="about-social-item">
                                <img src="~/assets/icon/linkedin-logo.svg" alt="linkedin">
                            </div>
                            <div class="about-social-item">
                                <img src="~/assets/icon/github-logo.svg" alt="github">
                            </div>
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
}
.about-card-portrait {
  width: 300px;
  margin: 20px 50px;
}
.about-social{
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 767px) {
      justify-content: center;

  }
  .about-social-item{
    width: 25px;
    margin: 12px;
    cursor: pointer;
    @media only screen and (max-width: 767px) {
      width: 50px;
      margin: 12px auto;
    }
    &:first-child{
      margin-left: 0;
      @media only screen and (max-width: 767px) {
        margin: 12px auto;
      }
    }
    
  }
}

</style>

