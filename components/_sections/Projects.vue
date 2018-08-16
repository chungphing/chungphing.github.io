<template>
	<div class="container">
		<section id="projects">
				<h1 class="projects-header section-heading">Works</h1>
				<div class="projects-cards-grid">
					<!-- start card -->


				<div class="projects-card">
					<div class="projects-card-thumb">
						<img src="~/assets/thumb.png" alt="portrait" class="projects-card-portrait-img">
					</div>
					<div class="projects-card-detail">
						<div class="projects-card-detail-text">

						</div>
					</div>
				</div>

				<div class="projects-card">
					<div class="projects-card-thumb">
						<img src="~/assets/thumb.png" alt="portrait" class="projects-card-portrait-img">
					</div>
					<div class="projects-card-detail">
						<div class="projects-card-detail-text">

						</div>
					</div>
				</div>

				<div class="projects-card">
					<div class="projects-card-thumb">
						<img src="~/assets/thumb.png" alt="portrait" class="projects-card-portrait-img">
					</div>
					<div class="projects-card-detail">
						<div class="projects-card-detail-text">

						</div>
					</div>
				</div>

				<div class="projects-card">
					<div class="projects-card-thumb">
						<img src="~/assets/thumb.png" alt="portrait" class="projects-card-portrait-img">
					</div>
					<div class="projects-card-detail">
						<div class="projects-card-detail-text">

						</div>
					</div>
				</div>

				<div class="projects-card">
					<div class="projects-card-thumb">
						<img src="~/assets/thumb.png" alt="portrait" class="projects-card-portrait-img">
					</div>
					<div class="projects-card-detail">
						<div class="projects-card-detail-text">

						</div>
					</div>
				</div>

				<div class="projects-card">
					<div class="projects-card-thumb">
						<img src="~/assets/thumb.png" alt="portrait" class="projects-card-portrait-img">
					</div>
					<div class="projects-card-detail">
						<div class="projects-card-detail-text">

						</div>
					</div>
				</div>

				<!-- end card -->
				</div>
				<div class="projects-github">
					<a href="#" class="projects-github-link">See more on github.</a>
				</div>
				<div class="projects-skill-card"></div>
		</section>
	</div>
</template>
<script>
export default {
  name: "Projects"
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";

.projects-cards-grid {
  display: flex;
  flex-direction: row;
	flex-wrap: wrap;
	
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
}
.projects-github {
  margin: 26px;
  text-align: center;

  .projects-github-link {
    text-decoration: underline;
  }
}
.projects-card {
	width: calc(90% / 3);
  margin: 10px auto;
	filter: brightness(90%);
	z-index: 2;
  transition: filter 200ms ease-in-out, transform 200ms ease-in-out;
  &:hover {
    filter: brightness(100%);
    transform: scale(1.03, 1.03);
	}
	
	@media screen and (max-width: 767px) {
			width: 90%;
	}

  .projects-card-thumb {
    max-width: 100%;
  }
}
</style>

