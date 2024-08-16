import { useEffect, useRef } from "react";
import { Blog } from "../Interfaces/Blog";
import ReadMoreButton from "./ReadMoreButton";
import { motion, useAnimation, useInView } from "framer-motion";

interface BlogPostProps {
  blog: Blog;
  id: number;
}

const BlogPost = ({ blog, id }: BlogPostProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const animationController = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationController.start("visible");
    } else {
      animationController.start("hidden");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const isTextTooLong = blog.description.length > 200;

  return (
    <motion.div
      ref={ref}
      className="BlogPost"
      initial="hidden"
      animate={animationController}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {isTextTooLong && <ReadMoreButton id={id} />}

      <h4>{blog.title}</h4>
      <p className="description">
        {(isTextTooLong && blog.description.substring(0, 200) + " [...]") ||
          blog.description}
      </p>
      <div className="blog-info">
        <img src={blog.image} alt="blog profile picture" draggable="false" />
        <p>@{blog.author}</p>
      </div>
      <p className="date">
        <span className="posted">Posted: </span>
        {blog.date}
      </p>
    </motion.div>
  );
};
export default BlogPost;
