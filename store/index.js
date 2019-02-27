import Vuex from "vuex";
import mutations from "./mutations";
const path = require("path");

const mdPosts = {};

function importAll(resolve) {
  resolve.keys().forEach(key => {
    const [_, name] = key.match(/\/(.+)\.md$/);
    const post = resolve(key);
    const attr = post.attributes;
    const _path = `/posts/${key.replace('.md', '').replace('./', '')}`
    console.log(attr.thumbnail);

    mdPosts[name] = {
      title: attr.title,
      summary: attr.summary,
      date: attr.date,
      thumbnail: attr.thumbnail === undefined ? '/images/placeholder.png' : attr.thumbnail,
      post: post.body,
      path: _path,
    };
  });
}
// function importRecent(resolve) {
//   resolve.keys().forEach(key => {
//     const [_, name] = key.match(/\/(.+)\.md$/);
//     const post = resolve(key);
//     const attr = post.attributes;
//     const _path = `/content/blog/posts/${key.replace('.md', '').replace('./', '')}`
//     mdPosts[name] = {
//       title: attr.title,
//       summary: attr.summary,
//       post: post.body,
//       path: _path,
//     };
//   });
// }
importAll(require.context("~/content/blog/posts", true, /\.md$/));

const createStore = () => {
  return new Vuex.Store({
    state: {
      test: 0,
      blogPosts: mdPosts,
      blogTitle: '',
      blogThumbnail: ''
    },
    getters: {
      recentPosts: state => {
        //TODO: do filter logic later
        return state.blogPosts;
      },
      blogposts: state => {
        //TODO: do filter logic later
        return state.blogPosts;
      }
    },
    mutations
  });
};

export default createStore;
