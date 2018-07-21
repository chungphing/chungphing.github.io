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
      <div class="wrapper">
        <span class="i-do">
              I Do
        </span>
          <transition-group  tag="div" class="brand-slide" name="slide">
              <span class="brand-skill" v-for="number in [index]" v-bind:key="number">{{ skilllist[Math.abs(index) % skilllist.length] }}</span>
          </transition-group>
      </div>
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
      <div class="recent-text"><p>Recent Works</p><p class="see-all">See all</p></div>
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
        <p>Work Title</p>
        </div>
    </div>
    </div>
    <div class="values">
      <div class="design">
        <p>I Value Simplicity</p>
        <p>putting content first, style second</p>
        <p>because that's what matter</p>
      </div>
      <div class="dev">
        <p>i love new technologies</p>
        <p>adapting to up-and-coming tools and technologies to improve today product</p>
        <p>normaly push forward in speed and functionality, normally...</p>
      </div>
      <div class="dev">
        <p>i write for all platform</p>
        <p>responsive web design for all form factor</p>
        <p>destop, tablet, phone, all screen matter</p>
      </div>
    </div>
    <div class="contact">
        <div>contact me</div>
        <span>or</span>
        <div>get my resume</div>
    </div>
  </section>
</template>

<script>
import CoreButton from '~/components/_baseComponents/core-button'
export default {
  components: {
    CoreButton
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
      setInterval(() => {
            this.index = this.index + 1;
          }, 3000);
    }
}
</script>

<style>
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
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.brand-slide{
  display: block;
  width: 250px;
  height:50px;
  position: relative;
  overflow: hidden;
}
.i-do {
  margin: 0 5px 0 0;
  font-size: 18px;
}

.brand-skill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 18px;
}
/* 
.headline .--active {
   transition: all 300ms linear;
  display: inline;
  transform: translateY(30px);
} */
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
.feature > .recent-text{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.feature > .recent-text p {
  font-size: 20px;
  color: #fff;
}
.see-all {
  margin-left: auto;
  font-weight: bold;
  cursor: pointer;
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
  margin: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow{
  cursor: pointer;
  transition: all 300ms ease-in-out;
}
.arrow:hover{
  transform: translateY(10px);
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
@media only screen and (max-width: 767px) {
  .introduction {
    height: 60vh;
    justify-content: center;
  }
  .scroll {
    height: 20vh;
    display: flex;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  .core-button {
    width: 100%;
  }
}
@media only screen and (min-width: 800px) {
  .brand-slide{
    width: 350px;
  }
  .i-do {
    font-size: 28px;
  }

  .brand-skill {
    font-size: 28px;
  }
}
/* animation */
.slide-leave-active,
.slide-enter-active {
  transition: 300ms;
}
.slide-enter {
  transform: translate(0, 100%);
}
.slide-leave-to {
  transform: translate(0, -100%);
}

</style>

