<template>
  <footer class="footer bandaid">
    <div class="container">
      <!-- <ul class="footer-column">
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
      </ul>
      <ul class="footer-column">
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
      </ul>
      <ul class="footer-column">
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
        <li class="footer-item"><a href="#"> Footer Link</a></li>
      </ul> -->
      <ul class="footer-column">
        <li class="footer-item">Kay, good luck</li>
        <li class="footer-item"><a href="#"> Back to top</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.footer {
  color: $white;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    ul {
      margin: 46px 0;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      list-style-type: none;
      width: 33.333333%;
      li {
        padding: 5px;
        text-decoration: none;


        a {
            color: $white;
            border-bottom: 1px solid $separator;
            &:hover {
                color: $blue;
            }
        }
      }
    }
  }
}

.bandaid {
  position: relative;
}

.bandaid:after {
  content: "";
  position: absolute;
  top: 0;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/pattern/circle_dark.svg");
  background-color: $black;

  @media screen and (min-width: 767px) {
    //border-top: 10px solid $blue-dark;
  }
}
</style>
