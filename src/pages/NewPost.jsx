import moment, { now } from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagsInput } from "react-tag-input-component";
import { fetchAddBlog } from "../redux/api";
import { faker } from "@faker-js/faker";
import newblog from "../assets/new.jpg";

export default function NewPost() {
  const dispatch = useDispatch();
  const [tags, settags] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userId, setuserId] = useState();
  const [img, setimg] = useState(newblog);

  const userNameOptional = useSelector((state) => state.blogs.users)

  const changeusername = (e) => setusername(e.target.value);
  const changeUserId = (e) => setuserId(e.target.value)
  const changeemail = (e) => setemail(e.target.value);
  const changetitle = (e) => settitle(e.target.value);
  const changetext = (e) => setbody(e.target.value);
  const changeimg = (e) => setimg();

  const saveBlog = (e) => {
    e.preventDefault();
    const time = new Date();
    const createdAt = moment(time.getTime()).format();
    const random = Math.floor(Math.random() * 1000);
    dispatch(fetchAddBlog(body, title, tags, username,userId ));
    //   dispatch({type:'Add_Blog_Post',
    //   id: random,
    //   text: text,
    //     title: title,
    //     tags: tags,
    //     username: username,
    //     email: email,
    //     image: img,
    //     createdAt: createdAt
    // })
    setusername("");
    setemail("");
    setbody("");
    settitle("");
    settags("");
  };

  return (
    <div>
      <div>
        <div className="flex items-center flex-col">
          <div>
            <h2 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              New Post
            </h2>
          </div>
          <div>
            <p className="text-lg font-semibold">We are a here to help</p>
          </div>
        </div>
        <div className="my-10 max-w-screen-sm mx-auto">
          <form action="post" className="mx-4">
            <div  className="mb-5">
            <label htmlFor="username" className="mb-5">
              username :
            </label>
             <select
              defaultValue='pleas selected username'
              onChange={changeUserId}
              name="username" id="username" className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0">
              {userNameOptional.slice(0,10).map((name) => (
                <option value={name.id} key={name.id}>{name.username}</option>
              ))}
            </select> 
            </div>
            
            {/* <div className="mb-5">
              <input
                value={username}
                onChange={changeusername}
                autoFocus
                required
                type="text"
                placeholder="Full Name"
                autoComplete="true"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="username"
              />
            </div> */}
            {/* <div className="mb-5">
              <input
                value={email}
                onChange={changeemail}
                required
                type="text"
                placeholder="Email Address"
                autoComplete="true"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="email"
              />
            </div> */}
            <div className="mb-5">
              <input
                value={title}
                onChange={changetitle}
                required
                type="text"
                placeholder="Title"
                autoComplete="true"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="title"
              />
            </div>
            <div className="mb-5 w-full">
              <input
                value={tags}
                onChange={(e) => settags(e.target.value)}
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none
                 dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                name="fruits"
                placeHolder="Please separate the tags from ; use"
              />
            </div>
            <div className="mb-3">
              <textarea
                value={body}
                onChange={changetext}
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200
                 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600
                  ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              ></textarea>
            </div>
            <button
              onClick={saveBlog}
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md
             hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
