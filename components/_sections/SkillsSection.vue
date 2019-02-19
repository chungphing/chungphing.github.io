<template>
	<div class="container">
		<section id="skills">
		<h1 class="skills-header section-heading">Skills</h1>
		<!-- <h1 class="skills-skill-header section-subheading">Back End Stack</h1> -->
    <div class="skill-cards">
        <SkillCard />
        <SkillCard />
        <SkillCard />
    </div>
		</section>
	</div>
</template>
<script>
import SkillCard from "~/components/_baseComponents/SkillCard";
export default {
  name: "SkillsSection",
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

