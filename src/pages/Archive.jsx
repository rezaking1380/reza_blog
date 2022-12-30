import { useSelector } from "react-redux";
import DefaultCartBlog from "../components/DefaultCartBlog";
import Loading from "../components/Loading";


export default function Archive() {
  const allBlog = useSelector((state) => state.blogs.allblog)
  const newBlog = useSelector((state) => state.blogs.newblog)
  const allblog = allBlog.concat(newBlog)
  return (
    <>
    {!allblog ? <Loading /> : 
    <div className="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="flex flex-col items-center">
          <div>
            <span className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
              Archive
            </span>
          </div>
          <div className="text-center">
            <span className="mt-2 text-lg font-semibold">
              See all posts we have ever written
            </span>
          </div>
        </div>
        <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {/* start-1 */}
          {allblog.map(blog => (
            <DefaultCartBlog blog={blog} />
          ))}
          {/* end-1 */}
        </div>
      </div>
    }
      
    </>
  );
}
