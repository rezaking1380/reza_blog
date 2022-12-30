import axios from "axios";
import baseapi from "../axios";

export const fetchBlogs = () =>(dispatch) => {
  dispatch({ type: "All_Blog_Request" });
  return fetch("https://dummyjson.com/posts?limit=30")
    .then((res) => res.json())
    .then((json) => dispatch({ type: "All_Blog_Success", blogs: json.posts }));
};

export const fetchComments = (postId) => async (dispatch) => {
  dispatch({ type: "All_Comment_Request" });
  return await fetch(`https://dummyjson.com/comments/post/${postId}`)
    .then((res) => res.json())
    .then((json) =>
      dispatch({ type: "All_Comment_Success", comments: json.comments })
    );
};

export const userPost = () => async (dispatch) => {
  dispatch({type: 'User_Post_Request'});
  return await fetch(`https://dummyjson.com/users`)
  .then((res) => res.json())
  .then((data) => dispatch({type:'User_Post',user: data.users}))
}

export const fetchPost = (id) => async (dispatch) => {
  const postId = id
  dispatch({ type: "Post_Request" });
  return await fetch(`https://dummyjson.com/posts/${postId}`)
    .then((res) => res.json())
    .then((json) => dispatch({ type: "Post_Success", post: json }));
  // .catch(err => dispatch({ type: PRODUCT_DETAILS_FAIL, payload: err.message }))
};

export const fetchAddcomment = (text, blog, user) => async (dispatch) => {
  return await fetch("https://dummyjson.com/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
    }),
  })
    .then((res) => res.json())
    .then((json) =>
      dispatch({
        type: "Add_Comment_Post",
        text: json.text,
        blog: blog,
        user: user,
      })
    );
};



// export const fetchAddBlog = (text,title,tags,username,email,image) => async (dispatch) => {

//     return setTimeout(
//       await fetch('https://api.freerealapi.com/blogs/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           text: text,
//           title: title,
//           tags: tags
//         })
//       })
//     .then((res) => res.json())
//     .then((json) =>
//     dispatch({
//       type: 'Add_Blog_Post',
//         id: json.id,
//         title: json.title,
//         text: json.text,
//         tags: json.tags,
//         username: username,
//         email: email,
//         image: image
//     }))
//     .then(data => console.log(data)),
//     5000
//     )
// }
// export const fetchAddBlog = (text,title,tags,username,email) => async (dispatch) => {
//   const data = new FormData();
//   data.append('title', title);
//   data.append('text', text);
//   data.append('image', 'file');
//   data.append('tags', tags);
//   instance.post('/panel/blogs/', data, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: '3284937154647170',
//       },
//     })
//     .then((response) => response.json())
//     .then(json => dispatch({type: 'Add_Blog_Post' ,
//         id: json.id,
//         title: json.title,
//         text: json.text,
//         tags: json.tags,
//         username: username,
//         email: email
//     }))
//     .then((json) => console.log(json))
// }

export const fetchAddBlog =
  (body, title, tags, username,userId) => async (dispatch) => {
    dispatch({type:"Add_Blog_Request"})
    return await axios
      .post("https://dummyjson.com/posts/add", {
        body,
        title,
        tags: [tags],
        userId
      }
      )
      .then((response)=> {
        dispatch({type:"Add_Blog_Post",payload:{post:response?.data,username:username}})
      }

      )

  };
