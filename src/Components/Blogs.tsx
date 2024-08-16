import { Blog } from "../Interfaces/Blog";
import BlogPost from "./BlogPost";

interface BlogsProps {
  blogs: Blog[];
}

const Blogs = ({ blogs }: BlogsProps) => {
  return (
    <div className="Blogs">
      {blogs.map((blog, index) => (
        <BlogPost key={index} blog={blog} id={index} />
      ))}
    </div>
  );
};

export default Blogs;
