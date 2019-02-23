const mutations = {
  add(state, payload) {
    state.blogPosts = payload;
  },
  SET_THUMB(state, data) {
    state.blogThumbnail = data;
  },
  SET_TITLE(state, data) {
    state.blogTitle = data;
  }
};

export default mutations;
