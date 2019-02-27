<template>
  <div tabindex="0" class="skill-card-item" :class="alt">
    <div class="skill-card-header">
      <div class="skill-card-item-thumb">
        <img :src="icon" :alt="alt">
      </div>
      <h3>{{ title }}</h3>
    </div>
    <div class="skill-content">
      <p>{{ description }}</p>
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
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 300px;
  flex: 1 1 0;
  transition: all 250ms ease-in-out;
  //border: 1px solid $grey-light;
  padding: 12px 5px;
  margin: 0 2px;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  .skill-card-item-thumb {
    width: 46px;
  }

  .skill-content {
    display: block;
  }
  .skill-card-header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h3 {
    color: $blue;
    font-size: 1rem;
    padding: 8px;
  }
  p {
    font-size: 0.875rem;
    margin: 4px;
    padding: 4px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    cursor: default;
    background-color: white;
    box-shadow: 0 0 15px $grey-light;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1 1 auto;
  }
}
.php {
  border-top: 5px solid $grey-light;
}
.php:hover {
  border-top: 5px solid $php;
}
.javascript {
  border-top: 5px solid $grey-light;
}
.javascript:hover {
  border-top: 5px solid $javascript;
}
.css {
  border-top: 5px solid $grey-light;
}
.css:hover {
  border-top: 5px solid $css;
}
</style>
