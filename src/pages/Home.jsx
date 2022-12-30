import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DefaultCartBlog from "../components/DefaultCartBlog";
import Loading from "../components/Loading";
import { fetchBlogs, fetchPost } from "../redux/api";

export default function Home() {
  const dispatch = useDispatch();
  const allBlog = useSelector((state) => state.blogs.allblog);
  const loading = useSelector((state) => state.blogs.status)
  // useEffect(() => {
  //   dispatch(fetchBlogs());
  // }, [dispatch]);
const newPost = async () => {
 const result = await axios.post('https://dummyjson.com/posts/add',{
  title: 'I am in love with someone.',
  userId: 6,
  body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum est eum similique perferendis quis. Laudantium.',
  tags:['reza','nangir'],
  reactions: 5
})
return result.data
}
  return (
    <>
      {loading === 'Loading' ? (
        <Loading />
      ) : (
        <>
          <div>
            <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
              {/* <div><button onClick={() => newPost()}>click</button></div> */}
              <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
                {allBlog.map((blog) => (
                  <DefaultCartBlog blog={blog} key={blog.id} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
