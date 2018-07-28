<template>
  <div class="content">
    <div class="wrapper">
      <section id="introduction" class="introduction">
      <p class="title">
        Hi!
      </p>
      <p class="subtitle">
        My name is <span id="brand-name">Chungphing Ly</span>
      </p>
      <p class="subtitle">
      I enjoy coffee and good looking websites.
      </p>
      <div class="intro-wrapper">
        <span class="i-do">
              I Do
        </span>
          <transition-group  tag="div" class="brand-slide" name="slide">
              <span class="brand-skill" v-for="number in [index]" v-bind:key="number">{{ skilllist[Math.abs(index) % skilllist.length] }}</span>
          </transition-group>
      </div>
       <core-button 
       v-on:btnclick="smoothScrollTo('contact')"
        title="Get in touch"
        >
        </core-button>
    </section>
    </div>
    <div class="scroll">
      <svg class="arrow" width="50" height="50" viewBox="0 0 25 13">
          <polyline points="0 0 12.31 12.31 24.19 0" stroke="white" stroke-width=".5"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>
      </svg>
    </div>
    <div class="wrapper">
      <section id="feature" class="feature">
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
        </div>
    </section>
    </div>
    <div class="values-wrapper">
     <section id="values" class="values">
        <div class="value-item design">
        <p class="value-title">I Value Simplicity</p>
        <p class="value-subtitle1">putting content first, style second</p>
        <p class="value-subtitle2">fancy do not come at the cost of accessibility</p>
      </div>
      <div class="value-item tech">
        <p class="value-title">i love new technologies</p>
        <p class="value-subtitle1">adapting to up-and-coming tools and technologies</p>
        <p class="value-subtitle2">to push forward in speed and functionality, normally...</p>
      </div>
      <div class="value-item dev">
        <p class="value-title">i write for all platform</p>
        <p class="value-subtitle1">responsive web design for all form factor</p>
        <p class="value-subtitle2">desktop, tablet, phone, all screen matter</p>
      </div>
     </section>
    </div>
    <div class="contact-wrapper">
      <section id="contact" class="contact">
        <span class="uppercase">get in touch</span>
        

            <div class="social">
              <div class="social-item">
                <svg class="social-facebook" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 16 16">
                  <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"></path>
                </svg>
                <span>facebook.com/chungphing</span>
              </div>
              <div class="social-item">
                <svg class="social-linkedin" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 16 16">
                  <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path>
                </svg>
                <span>linkedin.com/in/chungphing</span>
              </div>
            
              <div class="social-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g id="Layer_2" data-name="Layer 2"><g id="Capa_1" data-name="Capa 1"><path class="cls-1" d="M5.58,5A1.32,1.32,0,0,1,4.24,6.33H1.34A1.32,1.32,0,0,1,0,5H0A1.32,1.32,0,0,1,1.34,3.71h2.9A1.32,1.32,0,0,1,5.58,5Zm0,7.32A1.33,1.33,0,0,0,4.24,11H1.34A1.32,1.32,0,0,0,0,12.34H0a1.33,1.33,0,0,0,1.34,1.31h2.9a1.33,1.33,0,0,0,1.34-1.31Zm0,7.32a1.32,1.32,0,0,0-1.34-1.31H1.34A1.32,1.32,0,0,0,0,19.66H0A1.33,1.33,0,0,0,1.34,21h2.9a1.32,1.32,0,0,0,1.34-1.31Zm0,7.32a1.32,1.32,0,0,0-1.34-1.31H1.34A1.32,1.32,0,0,0,0,27H0a1.32,1.32,0,0,0,1.34,1.31h2.9A1.33,1.33,0,0,0,5.58,27ZM32,1.43V30.57A1.49,1.49,0,0,1,30.46,32H4.35a1.49,1.49,0,0,1-1.54-1.43V29.32H4.24a2.34,2.34,0,1,0,0-4.68H2.81V22H4.24a2.34,2.34,0,1,0,0-4.68H2.81V14.68H4.24a2.34,2.34,0,1,0,0-4.69H2.81V7.36H4.24A2.37,2.37,0,0,0,6.63,5a2.37,2.37,0,0,0-2.4-2.34H2.81V1.43A1.49,1.49,0,0,1,4.35,0H30.46A1.49,1.49,0,0,1,32,1.43ZM14.55,12.15c0-.42.33-.88.7-.84a10.62,10.62,0,0,1,1.84,1c1,.49,2.67-3.29,1.9-3.74a13.47,13.47,0,0,0-1.79-1.06,2.12,2.12,0,0,0-.35-.06C14.2,6.85,11.48,9,11.2,12.2c-.11,1.23-.17,2.46-.19,3.69h0s0,.07,0,.1,0,.06,0,.1h0c0,1.23.09,2.46.19,3.69.28,3.22,3,5.35,5.66,4.8a2,2,0,0,0,.35-.06A13.26,13.26,0,0,0,19,23.46c.76-.44-.88-4.22-1.9-3.74a10.49,10.49,0,0,1-1.84,1c-.37,0-.67-.41-.7-.84-.1-1.12,0-2.56,0-3.74h0v-.2h0C14.54,14.71,14.45,13.28,14.55,12.15Zm6.63,7.07a4.34,4.34,0,0,0,0-6.45l-1,.95a3.06,3.06,0,0,1,0,4.55ZM23,20.91a6.61,6.61,0,0,0,0-9.81L22,12A5.34,5.34,0,0,1,22,20ZM24.75,9.46l-1,.94a7.54,7.54,0,0,1,0,11.19l1,.95A8.81,8.81,0,0,0,24.75,9.46Z"/></g></g></svg>
                <span>chungphing@gmail.com</span>
              </div>
              
              <div class="social-item">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 14 14">
                  <g>
                    <g>
                      <path d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986
                        c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
                      <path d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8
                        L13.684,2.271z"/>
                      <polygon points="0,2.878 0,11.186 4.833,7.079 		"/>
                      <polygon points="9.167,7.079 14,11.186 14,2.875 		"/>
                    </g>
                  </g>
              </svg>
              <span>+85511346333</span>
              </div>
              
            </div>


        <span class="or">or</span>
        <div class="get-resume">
          <core-button 
            title="Get My Resume"
            >
          </core-button>
        </div>
    </section>
    </div>
  </div>
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
    }, 1500);
  }, methods: {
    smoothScrollTo: function (section) {
      console.log('go to ' + section);
      
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
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.introduction{
  width: 900px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
.intro-wrapper {
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
.uppercase{
  text-transform: uppercase;
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
  width: 900px;
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
.wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.values-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
}
.values{
  margin: 28px 0;
  width: 900px;
 display: flex;
 flex-direction: column;

}
.value-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 28px 0;
}
.value-title {
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  margin: 4px;
  margin-left: 0;
}
.value-subtitle1{
  letter-spacing: 2px;
  font-size: 28px;
  text-transform: uppercase;
  font-weight: 300;
  margin: 2px;
  margin-left: 0;
}
.value-subtitle2{
  font-size: 28px;
  text-transform: capitalize;
  margin: 4px;
  margin-left: 0;
  font-family: 'Assistant', sans-serif;
  font-weight: 300;
}
.contact-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: rgb(5, 161, 154);

}
.contact {
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin: 28px 0;
  color: white;
}
.social{
width: 50%;
align-content: center;
justify-content: center;
align-self: center;
margin: 32px 0;
}
.social-item{
  padding: 8px;
  fill: #056d68;
  border-radius: 4px;
  transition: all 300ms ease-in-out;
  display: flex;
  align-items: center;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
}
.social-item svg {
  margin:0 32px;
}
.social-item:hover {
  fill: #03403d;
  background-color: #0c928c
}
.contact span {
  margin: 4px;
}
.contact .core-button{
  margin: 4px;
}
.get-resume{
  margin: 32px 0;
}
.or{
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  color: #043e3b
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

