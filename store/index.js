import Vuex from 'vuex'
import mutations from './mutations'
const path = require('path');

const mdPosts = {}

function importAll (resolve) {
    resolve.keys().forEach(key => {
        const [_,name] = key.match(/\/(.+)\.md$/);
        const post = resolve(key)
        console.log(post);
        
        mdPosts[name] = {
            name: name,
            post: post.body
        }
    });
} 
importAll(require.context("~/content/blog/posts", true, /\.md$/));

const createStore = () => {
    return new Vuex.Store({
        state: {
            test: 0,
            blogPosts: mdPosts
        },
        mutations
    })
}

export default createStore