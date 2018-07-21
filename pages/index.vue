<template>
  <section class="content">
    <div class="introduction">
      <p class="title">
        Hi!
      </p>
      <p class="subtitle">
        My name is Chungphing Ly
      </p>
      <p class="subtitle">
       and I enjoy designing and building websites.
      </p>
      <h2 class="headline">
       I Do Web Development
      </h2>
       <core-button 
        title="Get in touch"
        >
        </core-button>
    </div>
    <div class="scroll">
      <svg class="arrow" width="50" height="50" viewBox="0 0 25 13">
          <polyline points="0 0 12.31 12.31 24.19 0" stroke="white" stroke-width=".5"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
      </svg>
    </div>
    <div class="feature">
      <p class="title">Recent Works</p>
      <div class="recent-works">
        <div class="recent-item"><img src="http://via.placeholder.com/200x100" alt="thumbnail"></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x100" alt="thumbnail"></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x100" alt="thumbnail"></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x100" alt="thumbnail"></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x100" alt="thumbnail"></div>
    </div>
    </div>
  </section>
</template>

<script>
import CoreButton from '~/components/_baseComponents/core-button'
export default {
  components: {
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
  align-items: flex-start;
}
.introduction{
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 28px;
}
.title,
core-button,
.subtitle,
.headline{
  margin: 2px;
}
.title {
  font-size: 28px;
  color: #adadad;
}
.subtitle {
  text-transform: capitalize;
  font-weight: bold;
  color: #adadad;
  letter-spacing: 1px;
}
.headline {
  text-transform: uppercase;
  letter-spacing: 6px;
  margin: 8px 0;
}
.core-button{
  width: 200px;

}
.feature{
 width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.recent-works{
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
.recent-item {
  margin: 3px;
}
.scroll{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow{
  cursor: pointer;
}
.arrow:hover{
   animation: down .2s ease-in-out alternate;
    animation-fill-mode: forwards;
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
  background:url('~/assets/anas-alshanti-169265-unsplash.jpg') no-repeat; 
  background-blend-mode: darken;
  background-size: cover;
}


@keyframes down {
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(10px);
  }
}
</style>

