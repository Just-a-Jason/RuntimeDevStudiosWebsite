import { Blog } from "../Interfaces/Blog";
import HomeButton from "./HomeButton";

interface FullBlogProps {
  blog: Blog;
}

const FullBlog = ({ blog }: FullBlogProps) => {
  return (
    <>
      <div className="FullBlog">
        <p className="title">{blog.title}</p>
        <p>{blog.description}</p>
        <p className="date">{blog.date}</p>
        <p className="username">By: @{blog.author}</p>
      </div>
      <HomeButton />
    </>
  );
};

export default FullBlog;
