<script>
export default {
  props: ["renderFunc", "staticRenderFuncs"],
  name: "DynamicMarkdown",
  render(createElement) {
    return this.templateRender
      ? this.templateRender()
      : createElement("div", "Rendering");
  },

  created() {
      this.templateRender = new Function(this.renderFunc)();
      this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
  }
};
</script>

<style>
</style>
