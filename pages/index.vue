<template>
  <section class="content">
    <div>
      <app-logo/>
      <h1 class="title">
        chungphing
      </h1>
      <h2 class="subtitle">
        A Developer in Cambodia
      </h2>
      <div class="links">
        <core-button 
        title="test"
        >
        </core-button>
      </div>
      <div>
       

        
      </div>
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

<style>

</style>

