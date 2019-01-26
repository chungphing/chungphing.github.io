<template>
  <div class="container">
    <section id="projects">
      <h1 class="projects-header section-heading">Works</h1>
      <!-- Stack of card ripped straight from css-tricks.com -->
      <div class="card-container">
        <div class="card">
          <div class="project-wrapper">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deleniti.</h3>
            <div class="project-content">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ex amet, nesciunt aperiam sed rerum voluptate facere natus eius voluptatum!</p>
            </div>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div class="card">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deleniti.</h3>
          <div class="project-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ex amet, nesciunt aperiam sed rerum voluptate facere natus eius voluptatum!</p>
          </div>
          <a href="#">Learn more</a>
        </div>
        <div class="card">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deleniti.</h3>
          <div class="project-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ex amet, nesciunt aperiam sed rerum voluptate facere natus eius voluptatum!</p>
          </div>
          <a href="#">Learn more</a>
        </div>
        <div class="card">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, deleniti.</h3>
          <div class="project-content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ex amet, nesciunt aperiam sed rerum voluptate facere natus eius voluptatum!</p>
          </div>
          <a href="#">Learn more</a>
        </div>
      </div>
      <div class="projects-github">
        <a href="#">See more on github.</a>
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
<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.card-container {
  padding: 3rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-overflow-scrolling: touch;
}

.card {
  background-color: lighten($grey-light, 3%);
  max-width: 300px;
  max-height: 300px;
  border-radius: 5px;
  box-shadow: 0 0 10px #3131312a;
  flex-direction: column;
  transition: 0.2s;
  position: relative;
  padding: 24px;

  h3 {
    z-index: 2;
    font-size: 1.3rem;
    font-weight: 500;
    color: $black;
  }
  .project-content {
    z-index: 2;
    font-size: 0.8rem;
    font-weight: 400;
    color: $black;
  }

  .project-thumb {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 5px;
  }
}
.projects-github {
  margin: 46px;
}
.card:not(:first-child) {
  margin-left: -130px;
}

.card:focus-within,
.card:hover {
  background-color: $white;
  transform: translate(0, -1rem);
}
.card:focus-within ~ .card,
.card:hover ~ .card {
  transform: translateX(130px);
}
@media (max-width: 1200px) {
  .card {
    min-width: 220px;
  }
  .card:not(:first-child) {
    margin-left: -30px;
  }
  .card:hover {
    transform: translate(0, -1rem);
  }
  .card:hover ~ .card {
    transform: translateX(30px);
  }
}
@media (max-width: 800px) {
  .card {
    min-width: 190px;
  }
  .card:not(:first-child) {
    margin-left: -10px;
  }
  .card:hover {
    transform: translate(0, -1rem);
  }
  .card:hover ~ .card {
    transform: translateX(10px);
  }
}

</style>

