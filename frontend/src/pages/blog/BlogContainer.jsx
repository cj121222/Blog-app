import { useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import { useGetAllBlogPostQuery } from "../../redux/api/blog.js";

const BlogContainer = () => {
  const { data, isLoading, refetch } = useGetAllBlogPostQuery();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-7xl flex flex-col">
        <h1 className="text-[1.5rem] md:text-[3rem] font-bold mb-6">Blog</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {isLoading
            ? "Loading..."
            : data?.map((blog) => <BlogCard key={blog._id} data={blog} />)}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
