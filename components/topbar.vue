<template>
  <div class="header">
    <div class="header-branding-container">
            <router-link to="/"  class="header-branding"><span>Chungphing ly</span></router-link>
    </div>
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
    justify-content: space-between;
}
.header-branding-container{
    margin: 6px 0;
    margin-right: auto;
  align-content:flex-start;
}
.header-branding{
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 3px;
  text-align: center;
  align-self: flex-start;
  color: #fff;
}
.header-item {
    font-size: 1rem;
    vertical-align: middle;
    color:#fff;
}
.header-item:hover{
    color: #fff;
    cursor: pointer;
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
