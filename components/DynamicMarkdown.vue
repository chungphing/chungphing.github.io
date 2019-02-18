<script>
export default {
  data() {
    return {
      templateRender: null
    };
  },
  name: "DynamicMarkdown",
  render (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
  },
 
  created () {
    this.templateRender = new Function(fm.vue.render)();
    this.$options.staticRenderFns = new Function(fm.vue.staticRenderFns)();
  }
};
</script>

<style>
</style>
