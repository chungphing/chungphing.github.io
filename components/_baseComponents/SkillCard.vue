<template>
  <div class="skill-card-item">
    <div class="skill-card-item-thumb">
      <img :src="icon" :alt="alt">
    </div>
    <h3>{{ title }}</h3>
    <div class="skill-content">
      <p> {{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: ["title", "description", "icon", "alt"]
};
</script>
<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.skill-card-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
  height: 200px;
  width: 33.333333%;
  transition: all 250ms ease-in-out;
  //border: 1px solid $grey-light;

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
  .skill-content {
    display: block;
  }
  h3 {
    color: $blue;
    font-size: 1rem;
    padding: 8px;
  }
  p {
    font-size: 0.8rem;
    margin: 4px;
    padding: 4px;
  }

  &:hover {
   //transform: scale(1.01);
    //box-shadow: 0 0 10px $grey-light;
  }
}

.skill-card-item {
  // width: calc(90% / 4);
  // margin: 1.1%;
}
.skill-card-item-thumb {
  width: 46px;
}
</style>
