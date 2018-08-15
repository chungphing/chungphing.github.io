<template>
  <div class="content">
    <Introduction></Introduction>
    <About></About>
    <Projects></Projects>
  </div>
</template>

<script>

//import section components
import Introduction from '~/components/_sections/Introduction'
import About from '~/components/_sections/About'
import Projects from '~/components/_sections/Projects'

export default {
  components: {
    Introduction,
    About,
    Projects
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
  }, methods: {
    smoothScrollTo: function (section) {
      
      if(section === 'home'){
        console.log('go home');
        
        this.$SmoothScroll(0,1000,null,null,'both')
        return null
      }
      let el = document.querySelector('#'+section)
      console.log(el);
      
      if(el !== null) {
        console.log('should be scrolling')
        this.$SmoothScroll(el,1000,null,null,'both')
      }
    }
  }
} 
</script>

<style>

</style>

