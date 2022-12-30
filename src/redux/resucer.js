export const initblogs = {
  allblog: [],
  newblog: [],
  users:[],
  status: "idel",
  error: null,
};

export const blogs = (state = initblogs, action) => {
  switch (action.type) {
    case "All_Blog_Request":
      return {
        ...state,
        status: "Loading",
      };
    case "All_Blog_Success":
      return {
        ...state,
        allblog: action.blogs,
        status: "success",
      };
    // case "Add_Blog_Post":
    //   return {
    //     ...state,
    //     newblog: [
    //       ...state.newblog,
    //       {
    //         _id: action.id,
    //         title: action.title,
    //         text: action.text,
    //         user: {
    //           name: action.username,
    //           email: action.email,
    //         },
    //         tags: action.tags,
    //         image: action.image,
    //         createdAt: action.createdAt
    //       },
    //     ],
    //     status: "success",
    //   };
    case "Add_Blog_Request":
      return {
        status: "Loading"
      }
    case "Add_Blog_Post":
      return {
        ...state,
        newblog: [
          action.payload.post,
          action.payload.username
        ],
        status: "success",
      };
    case 'User_Post_Request':
      return {
        ...state,
        status: 'loading'
      }  
    case 'User_Post':
      return {
        ...state,
        users : action.user,
        status: 'success'
      }  

    default:
      return state;
  }
};

export const initcomments = {
  allcomment: [],
  addcommentpost: [],
  status: "idel",
  error: null,
};

export const comments = (state = initcomments, action) => {
  switch (action.type) {
    case "All_Comment_Request":
      return {
        ...state,
        status: "Loading",
      };
    case "All_Comment_Success":
      return {
        ...state,
        allcomment: action.comments,
        status: "success",
      };
    case "Add_Comment_Post":
      return {
        ...state,
        addcommentpost: [...state.addcommentpost, action.text],
        status: "success",
      };

    default:
      return state;
  }
};

export const initpost = {
  post: {},
  status: "idel",
  error: null,
};

export const post = (state = initpost, action) => {
  switch (action.type) {
    case "Post_Request":
      return {
        ...state,
        status: "Loading",
      };
    case "Post_Success":
      return {
        post: action.post,
        status: "success",
      };

    default:
      return state;
  }
};

