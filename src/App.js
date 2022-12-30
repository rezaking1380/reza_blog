import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";
import Writer from "./pages/Writer";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const blogs = useSelector((state) => state.blogs.allblog);
  return (
    <>
      <Navbar />
      {blogs.length == 0 ? (
        <Loading />
      ) : (
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/writer" element={<Writer />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/blogs/:id" element={<Post />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;
