import { configureStore } from "@reduxjs/toolkit";
import { blogs, comments, post } from "./resucer";

const initialstate = {
    blogs: [],
    comments: [],
    post: [],
}

const store = configureStore({
    reducer:{
        blogs: blogs,
        comments: comments,
        post: post,
    },
    initialstate
})


export default store