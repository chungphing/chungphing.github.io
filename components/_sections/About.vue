<template>
    <div class="container">
        <section id="about">
            <h1 class="about-header section-heading">about</h1>
                <div class="about-card">
                    <div class="about-card-portrait">
                        <img src="/img/portrait.png" alt="portrait" class="about-card-portrait-img">
                    </div>
                    <div class="about-card-detail">
                        <div class="about-card-detail-text">
                            <p>I’m currently a web developer and mobile developer based in Phnom Penh, Cambodia</p>
                        </div>
                        <div class="about-card-detail-text">
                            <p>I inspire to create beautiful and functional website and app. But my first priority is always making sure that the most standout aspect is the contents itself.</p>
                        </div>
                        <div class="about-card-detail-text">
                            <p>Other than Web and mobile, I also like graphic design and animation*. While i’m not very good at the “design” part yet, I’m quite critical when it come to judging it.</p>
                        </div>
                        <div class="about-social">
                            <div class="about-social-item">
                                <img src="~/assets/icon/facebook-logo.svg" alt="facebook">
                            </div>
                            <div class="about-social-item">
                                <img src="~/assets/icon/linkedin-logo.svg" alt="linkedin">
                            </div>
                            <div class="about-social-item">
                                <img src="~/assets/icon/linkedin-logo.svg" alt="linkedin">
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="about-skill-header section-subheading">what i can do</h1>
                <div class="about-skill-card">
                    <div class="about-skill-card-item">
                        <div class="about-skill-card-item-thumb">
                            <img src="~assets/skills/js.svg" alt="Javascript">
                        </div>
                    </div>
                    <div class="about-skill-card-item">
                        <div class="about-skill-card-item-thumb">
                            <img src="~assets/skills/node.svg" alt="Javascript">
                        </div>
                    </div>
                    <div class="about-skill-card-item">
                        <div class="about-skill-card-item-thumb">
                            <img src="~assets/skills/php.svg" alt="Javascript">
                        </div>
                    </div>
                    <div class="about-skill-card-item">
                        <div class="about-skill-card-item-thumb">
                            <img src="~assets/skills/android.svg" alt="Javascript">
                        </div>
                    </div>
                </div>
                <div class="about-skill-note">
                    <p>For the average joe, it’s mean i am adaptable. I choose which technologies to use by value depend on situation</p>
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
#about {
  display: flex;
  flex-direction: column;
}
.about-header {
}
.about-card {
  display: flex;
  flex-direction: row;
}
.about-card-portrait {
  width: 300px;
  margin: 20px 50px;
}
.about-social{
    display: flex;
    flex-direction: row;
}
.about-social-item{
    width: 25px;
    margin: 12px;
}
.about-social-item:first-child{
    margin-left: 0;
}
.about-skill-card{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 68px 26px;
}
.about-skill-card-item{
    width: calc(100% / 4);
}
.about-skill-card-item-thumb{
    width: 50%;
    margin: auto;
}
.about-skill-note {
    text-align: center;
}
</style>

