<template>
  <div class="content">
    <CustomHeader></CustomHeader>
    <About></About>
    <Develop></Develop>
  </div>
</template>

<script>

//import section components
import CustomHeader from '~/components/_sections/CustomHeader'
import About from '~/components/_sections/About'
import Contact from '~/components/_sections/Contact'
import Projects from '~/components/_sections/Projects'
import Design from '~/components/_sections/Design'
import Develop from '~/components/_sections/Develop'

export default {
  components: {
    CustomHeader,
    About,
    Contact,
    Projects,
    Design,
    Develop
  },
  data: function () {
    return {
      skilllist: [
      'Web Design',
      'Web Development',
      'Mobile App'
    ],
    index: 0
    }
  },
  mounted: function () {
    // setInterval(() => {
    //   this.index = this.index + 1;
    // }, 3000);
  }
} 
</script>

<style>

</style>

