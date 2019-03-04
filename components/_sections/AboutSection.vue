<template>
  <div class="container">
    <section id="about">
      <h1 class="about-header section-heading">about me</h1>
      <div class="about-card">
        <div class="about-card-portrait">
            <img src="~/assets/img/portrait.jpg" alt="portrait" class="about-card-portrait-img">
          </div>
        <div class="about-card-detail-text">
          <p>I'm a web developer based in Phnom Penh. I build website for a living and for fun.</p>
          <p>For the nerdy out there, my langauge of choice is Javascript. Although I do know and use PHP and Python, I find myself drawn into Javascript ecosystem more despite the exhausting amount of frameworks and libraries.</p>
        </div>
        <div class="button-wrapper">
          <button id="get-resume">Get My Resume</button>
        </div>
        <SocialPanel/>
      </div>
    </section>
  </div>
</template>
<script>
import SocialPanel from "~/components/SocialPanel";

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
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  .about-card-detail-text {
    max-width: 500px;
    align-self: center;
  }
  .about-card-detail-text p {
    color: $grey;
    text-align: center;
    font-weight: 500;
    line-height: 1.5;
  }
}
.about-card-portrait {
  width: 120px;
  margin: 20px auto;
}
.about-card-portrait img {
  border-radius: 100%;
}
</style>

