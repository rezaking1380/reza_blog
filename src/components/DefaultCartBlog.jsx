import React from "react";
import { useDispatch , useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComments, fetchPost } from "../redux/api";

export default function DefaultCartBlog({ blog }) {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.blogs.users)
  const user = users.find((id) => id.id === blog.userId)
  if(user === undefined)
    return null
  return (
    <>
      <Link to={`/blogs/${blog.id}`} key={blog.id} onClick={() => dispatch(fetchPost(blog.id)) }>
        <div className="cursor-pointer group" onClick={() => dispatch(fetchComments(blog.id))}>
          <div className="relative overflow-hidden transition-all rounded-md hover:scale-105 flex justify-center">
          {user !== undefined && (
            <span>
            <img
              src={user.image}
              alt={user.username}
              className="object-cover w-[100px] rounded-md"
            />
          </span>
          )}
          </div>
          <div>
            <span className="inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-emerald-700">
              {blog.title.slice(0, 15)}
            </span>
          </div>
          <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
            <span
              className=" bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 
              bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] 
              group-hover:bg-[length:100%_10px] break-words"
            >
              {blog.body.slice(0, 110)} ...
            </span>
          </h2>
          <div className="flex mt-2 flex-wrap">
            {blog.tags.map((tag,index) => (
              <p className="mr-2 font-normal text-slate-400 hover:text-black" key={index}>
                #{tag}
              </p>
            ))}
          </div>
          <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <span className="text-sm">{user.username}</span>
            </div>
            {/* <div>
              <span className="text-sm">{user.createdAt.slice(0, 10)}</span>
            </div> */}
          </div>
        </div>
      </Link>
    </>
  );
}
