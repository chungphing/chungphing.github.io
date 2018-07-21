<template>
  <section class="content">
    <div class="introduction">
      <p class="title">
        Hi!
      </p>
      <p class="subtitle">
        My name is <span id="brand-name">Chungphing Ly</span>
      </p>
      <p class="subtitle">
      I enjoy coffee and good looking websites.
      </p>
      <h2 class="headline">
       I Do 
       <span class="brand-skill --active">Website Development</span>
       <span class="brand-skill">Website Design</span>
       <span class="brand-skill">Single Page App</span>
       <span class="brand-skill">Android App</span>
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
      <p>Recent Works</p>
      <div class="recent-works">
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
        <div class="recent-item"><img src="http://via.placeholder.com/200x150" alt="thumbnail">
        <p>Work Title</p></div>
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
  letter-spacing: 2px;
}
.subtitle #brand-name {
  color: #fff;
  text-transform: uppercase;
}
.headline .brand-skill {
  display: none;
}
.headline .--active {
  display: inline;
}
.headline {
  text-transform: uppercase;
  letter-spacing: 6px;
  margin: 2px 0;
}
.core-button{
  width: 200px;

}
.feature{
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px;
}
.feature > p {
  font-size: 20px;
  color: #fff;
  margin: 0;
}
.recent-works{
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
.recent-item {
  padding: 4px;
}
.recent-item:hover {
  background: #02020248;
}
.recent-item p {
  margin: 2px 0;
  color: #fff;
}
.scroll{
  width: 100%;
  margin: 100px 0;
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
  height: 900px;
  z-index: -1;
  background:linear-gradient(0deg,rgba(63,176,255,1),rgba(63,176,255,1)), url('~/assets/sergey-zolkin-192937-unsplash.jpg') no-repeat; 
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

