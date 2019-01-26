<template>
  <div class="content">
    <content></content>
    <MyFooter></MyFooter>
  </div>
</template>

<script>

//import section components
import MyFooter from '~/components/_sections/My-Footer'
import CustomHeader from '~/components/_sections/CustomHeader'

export default {
  components: {
    CustomHeader,
    MyFooter
  }
} 
</script>

<style lang="scss">
@import "~/assets/styles/hamburgers.css";
@import "~/assets/styles/variables.scss";
@import "~/assets/styles/mixins.scss";
.sticky{
  background-color: #fff;
  transition: all 300ms ease-in-out;
  border-bottom: .5px solid #f3f3f3;
  & .navigation-item{
   color: $grey;
  }
  & .navigation-item:hover{
    color: $blue;
  }
  & .navigation{
    margin: 2px auto;
  }
  & #brand-logo{
    fill: $grey;
  }
}

.active-item {
  color: #fff;
}

.navigation-item{
  color: $grey;
}
#brand-logo{
  fill: $grey;
}
</style>

