import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAddcomment, fetchPost } from "../redux/api";
import Loading from "../components/Loading";
import moment from "moment";

export default function Post() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const loading = useSelector((state) => state.post.status)
  const Posts = useSelector((state) => state.blogs.allblog)
  const Post = Posts.find((post) => post.id === id)
  const [commentvalue, setcommentvalue] = useState("");
  const [commentname, setcommentname] = useState("");
  // const [post, setpost] = useState(Post);
  const users = useSelector((state) => state.blogs.users);
  const user = users.find((id) => id.id === post.userId);
  
  const comments = useSelector((state) => state.comments.allcomment);
  // const newcomment = useSelector((state) => state.comments.addcommentpost);
  // const sortcomment = comments.filter((item) => item.postId === post.id);
  // const filternewcomment = newcomment.filter((item) => item.blog === id);
  // const AllComment = comments.concat(filternewcomment);
  const onChanevalue = (e) => setcommentvalue(e.target.value);
  const onChangename = (e) => setcommentname(e.target.value);
console.log(post);
  function Date(data) {
    return <span>{moment(data).startOf(data).fromNow(moment().format())}</span>;
  }

  const onSave = async (e) => {
    e.preventDefault();
    await dispatch(
      fetchAddcomment({
        text: commentvalue,
        blog: post.id,
        user: { name: commentname },
      })
    );
    setcommentvalue("");
    setcommentname("");
  };

  useEffect(() => {
    // dispatch(fetchComments(post.id))
    // dispatch(fetchBlogs());
    // if(post === {})
    //   return dispatch(fetchPost(id));
    
    window.scrollTo(0, 0);
  }, [dispatch, id, post]);

  // if(blog === undefined)
  //   return null;
  // if(user === undefined)
  //   return null
  if (comments === undefined) return null;

  return (
    <>
      {loading === "Loading" ? (
        <Loading />
      ) : (
        <>
          <div key={post.id}>
            <div>
              <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg flex justify-center">
                {user !== undefined && (
                  <span>
                    <img
                      src={user.image}
                      alt={user.username}
                      className="object-cover w-[100px] rounded"
                    />
                  </span>
                )}
              </div>
              <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg text-center">
                <div className="max-w-screen-md mx-auto ">
                  <div>
                    <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
                      {post.title}
                    </h1>
                  </div>
                  <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-gray-800 dark:text-gray-400">
                          {post.username}
                        </p>
                        {/* <div className="flex items-center space-x-2 text-sm">
                        <p className="text-gray-500 dark:text-gray-400">
                          {blog.createdAt.slice(0, 10)} |{" "}
                          {blog.createdAt.slice(11, 16)}
                        </p>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
              <div className="max-w-screen-md mx-auto ">
                <p className="text-lg font-semibold leading-relaxed break-words">
                  {post.body}
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-6 text-blue-600">
              <Link to="/archive">
                <span>
                  <ArrowBackIcon className="mr-2" />
                  View all posts
                </span>
              </Link>
            </div>
          </div>
          {/* comments */}
          <div className=" max-w-screen-lg mx-auto border-t py-4">
            {comments.map((comment) => (
              <div
                className="flex items-center border rounded-lg sm:mx-auto max-w-2xl mx-4 mb-3"
                key={comment.id}
              >
                <div className="mx-3">
                  <AccountCircleIcon fontSize="large" />
                </div>
                <div className="my-3 w-full">
                  <div className="flex justify-between mx-2 mb-2 flex-col sm:flex-row">
                    <div>
                      <p className="text-slate-600">{comment.user.username}</p>
                    </div>
                    <div>
                      {/* <span className="text-slate-400">
                      {Date(comment.createdAt)}
                      {blog.createdAt.slice(0, 10)} -{" "}
                    {blog.createdAt.slice(11, 16)}
                    </span> */}
                    </div>
                  </div>
                  <div>{comment.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex my-4 max-w-2xl mx-auto">
            <form className="flex w-full justify-around flex-col sm:flex-row text-center">
              <div className="flex max-w-lg mb-3 flex-col sm:flex-row">
                <input
                  value={commentname}
                  onChange={onChangename}
                  placeholder="UserName"
                  type="text"
                  name="username"
                  className="border-2 rounded-lg mx-3 h-full w-full outline-gray-900 p-2 max-w-[90%] mb-2"
                />
                <textarea
                  value={commentvalue}
                  onChange={onChanevalue}
                  placeholder="Please write a text"
                  type="text"
                  name="text"
                  className="border-2 rounded-lg mx-3 h-full w-full outline-gray-900 p-2 max-w-[90%]"
                />
              </div>
              <div>
                <button
                  onClick={onSave}
                  className="py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
                >
                  Add Comment
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
