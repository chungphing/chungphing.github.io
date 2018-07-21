<template>
  <section class="content">
    <div class="introduction">
      <h1 class="title">
        chungphing
      </h1>
      <h2 class="subtitle">
        A Developer in Cambodia
      </h2>
       <core-button 
        title="test"
        >
        </core-button>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import CoreButton from '~/components/_baseComponents/core-button'
export default {
  components: {
    AppLogo,
    CoreButton
  }
}
</script>

<style lang="scss">
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.introduction{
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px
}
.introduction::after{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: -1;
  background: url('~/assets/sergey-zolkin-192937-unsplash.jpg') no-repeat; 
  background-blend-mode: darken;
  background-size: cover;
}
</style>

