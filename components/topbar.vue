<template>
  <div class="header">
    <router-link to="/"  class="header-branding"><span>Chungphing ly</span></router-link>
    <div class="header-list">
            <a href="#service" class="header-item">
              About
            </a>
            <a href="#team" class="header-item">
            Resume
            </a>
            <a href="#" class="header-item">
            Portfolio
            </a>
            <a href="#" class="header-item">
            Blog
            </a>
      </div>
      <button class="hamburger hamburger--collapse" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
      </button>
  </div>
</template>

<script>
export default {
  name: 'Topbar',
  props: {
    showTopMenu: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*start header */
.header{
    width: 100%;
    z-index: 10;
    padding: 0 48px;
    margin: 18px 0;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    
}
.header-branding{
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 3px;
  text-align: center;
  color: #fff;
}
.header-item {
    font-size: .8rem;
    vertical-align: middle;
    color:#fff;
    letter-spacing: 2px;
    transition: box-shadow .1s ease-in-out;
}
.header-item:hover{
    color: #adadad;
    cursor: pointer;
    box-shadow: inset 0px -1px 0px 0px #128ee0;
}
.active-item {
    color: #fff;
}

.header-list{
  align-items: center; 
}
.header-list a{
      padding: 10px 18px;
}
.header-branding > *{
  vertical-align: middle;
}
.header-branding {
  margin: 6px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.hamburger{
  display: none;
  z-index: 100;
}
</style>
