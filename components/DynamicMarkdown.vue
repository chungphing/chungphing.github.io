<script>
export default {
  props: ["body"],
  name: "DynamicMarkdown",
  data () {
    return {
      templateRender: null
    }
  },
  render(createElement) {
        return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
  },
  created() {

      this.templateRender = new Function(body.vue.renderFunc)();
      console.log('created',this.templateRender);

      this.$options.staticRenderFns = new Function(body.vue.staticRenderFuncs)();

  }
};
</script>

<style>
</style>
