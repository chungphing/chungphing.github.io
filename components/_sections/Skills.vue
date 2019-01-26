<template>
	<div class="container">
		<section id="skills">
		<h1 class="skills-header section-heading">Skills</h1>
		<!-- <h1 class="skills-skill-header section-subheading">Back End Stack</h1> -->
    <div class="skill-cards">
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <!-- <div class="skill-card-item">
            <div class="skill-card-item-thumb">
                <img src="~assets/skills/node.svg" alt="Javascript">
            </div>
            <h1>Node.js</h1>
        </div>
        <div class="skill-card-item">
            <div class="skill-card-item-thumb">
                <img src="~assets/skills/php.svg" alt="Javascript">
            </div>
            <h1>PHP</h1>
        </div>
        <div class="skill-card-item">
            <div class="skill-card-item-thumb">
                <img src="~assets/skills/android.svg" alt="Javascript">
            </div>
            <h1>Android</h1>
        </div> -->
    </div>
		</section>
	</div>
</template>
<script>
import SkillCard from "~/components/_baseComponents/skill-card";
export default {
  name: "skills",
  components: {
    SkillCard
  }
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";


.skill-cards{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: flex-start;
    }
}
</style>

