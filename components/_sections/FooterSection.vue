<template>
  <div class="footer">
    <div class="container">
      <ul class="footer-column">
        <li class="footer-item"><a href="#"> Footer link</a></li>
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";

.footer {
  background-color: $black;
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
            &:hover {
                color: $blue;
            }
        }
      }
    }
  }
}
</style>
