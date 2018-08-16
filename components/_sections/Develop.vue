<template>
	<div class="container">
		<section id="develop">
		<h1 class="develop-header section-heading">Develop</h1>
		<h1 class="develop-skill-header section-subheading">Back End Stack</h1>
			<div class="develop-skill-card">
					<div class="develop-skill-card-item">
							<div class="develop-skill-card-item-thumb">
									<img src="~assets/skills/js.svg" alt="Javascript">
							</div>
							<h1>Javascript</h1>
					</div>
					<div class="develop-skill-card-item">
							<div class="develop-skill-card-item-thumb">
									<img src="~assets/skills/node.svg" alt="Javascript">
							</div>
							<h1>Node.js</h1>
					</div>
					<div class="develop-skill-card-item">
							<div class="develop-skill-card-item-thumb">
									<img src="~assets/skills/php.svg" alt="Javascript">
							</div>
							<h1>PHP</h1>
					</div>
					<div class="develop-skill-card-item">
							<div class="develop-skill-card-item-thumb">
									<img src="~assets/skills/android.svg" alt="Javascript">
							</div>
							<h1>Android</h1>
					</div>
			</div>
			<div class="develop-skill-note">
					<p>For the average joe, it’s mean i am adaptable. I choose which technologies to use by value depend on situation</p>
			</div>
		</section>
	</div>
</template>
<script>
export default {
  name: "develop"
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";


.develop-skill-card{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 68px 26px;
    .develop-skill-card-item{
        width: calc(90% / 4);
        margin: 1.1%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: 767px) {
          width: 100%;
          flex-direction: row;
          justify-content: flex-start;
        }
      .develop-skill-card-item-thumb{
        width: 90%;
        max-width: 200px;
        margin: auto;

        @media screen and (max-width: 767px){
          width:  100px;
          margin: 0;
        }
      }
      h1 {

        @media screen and (max-width: 767px){
          display: block;
          flex: 1 1 auto;
          text-align: center;
        }
      }
    }
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: flex-start;
    }
}
 .develop-skill-note {
        text-align: center;
  }
</style>

