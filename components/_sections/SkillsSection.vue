<template>
  <div class="container">
    <section id="skills">
      <h1 class="skills-header section-heading">Skills</h1>
      <!-- <h1 class="skills-skill-header section-subheading">Back End Stack</h1> -->
      <div class="skill-cards">
        <SkillCard
          v-for="skillItem in skillItems"
          :key="skillItem.title"
          :title="skillItem.title"
          :description="skillItem.description"
          :icon="skillItem.icon"
          :alt="skillItem.alt"
        />
      </div>
    </section>
  </div>
</template>
<script>
import SkillCard from "~/components/_baseComponents/SkillCard";
export default {
  name: "SkillsSection",
  data: () => {
    return {
      skillItems: [
        {
          title: "CSS",
          description:
            "Technology doesn't have to look boring! With the help of CSS and many of other framework and pre-compiler ala SCSS, Bootstrap, Bulma etc, pave the way for beautiful, responsive and intuitive user experinces",
          icon: "icon/lang/css3-plain.svg",
          alt: "css"
        },
        {
          title: "Javascript",
          description:
            "One of the backbone of the modern web, Javascript is an essential part of any website. It allow developer to bring interactivity to web applicaiton in the front-end and find its way into the back-end and now become the most popular language for building web applicaitons",
          icon: "icon/lang/javascript-original.svg",
          alt: "javascript"
        },
        {
          title: "PHP",
          description:
            "Battle-tested, proven technology that millions of businesses relied on, Some might say PHP is outdated. But with the right tools - for example Laravel framework, nothing can match it rapid development speed and convinences",
          icon: "icon/lang/php-plain.svg",
          alt: "php"
        }
      ]
    };
  },
  components: {
    SkillCard
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

.skill-cards {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 24px 0;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>

