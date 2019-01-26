<template>
  <div class="recent-wrapper">
    <div class="container">
      <section id="recent">
        <div class="posts">
          <div class="post">
            <h3 class="post-title">Lorem, ipsum dolor.</h3>
            <div class="post-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illo?</p>
            </div>
            <a href="#" class="post-button">Read more</a>
          </div>
          <div class="post">
            <h3 class="post-title">Lorem, ipsum dolor.</h3>
            <div class="post-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illo?</p>
            </div>
            <a href="#" class="post-button">Read more</a>
          </div>
          <div class="post">
            <h3 class="post-title">Lorem, ipsum dolor.</h3>
            <div class="post-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illo?</p>
            </div>
            <a href="#" class="post-button">Read more</a>
          </div>
        </div>
        <a href="#" class="post-button">More Posts</a>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecentPost"
};
</script>
<style lang="scss">
@import "~/assets/styles/variables.scss";
.recent-wrapper {
  background-color: $grey-light;
  border-top: $separator;
  border-bottom: $separator;
  #recent {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 0;
    .posts {
      display: flex;
      flex-direction: row;

      .post {
        display: flex;
        flex-direction: column;
        width: 33.3333%;
        margin: 16px;
        padding: 24px;
        background-color: $white;
        border: 1px solid $separator;

        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }

        .post-title {
          color: $blue;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .post-content p {
          font-size: 0.8rem;
          color: $black;
        }
      }
    }
  }
  .post-button {
    align-self: flex-end;
    font-size: 0.8rem;
    font-weight: 500;
    border-bottom: 1.3px solid $blue;
  }
}
</style>

