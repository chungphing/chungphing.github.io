import Vuex from 'vuex'
import mutations from './mutations'
const path = require('path');

const mdBlogpost = []

function importAll (resolve) {
    resolve.keys().forEach(key => {
        const name = key.match(/\/(.+)\.md$/);
        mdBlogpost[name] = resolve(key)
    });
}
  
importAll(require.context("~/content/blog/posts", true, /\.md$/));
console.log(mdBlogpost);



const createStore = () => {
    return new Vuex.Store({
        state: {
            blogPosts: mdBlogpost,
        },
        mutations,
        actions: {

        }
    })
}

export default createStore