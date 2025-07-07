import { useParams } from "react-router-dom";
import { useGetSpecificBlogQuery } from "../../redux/api/blog";

const BlogDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetSpecificBlogQuery(id);

  console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="text-3xl md:text-[3rem]  font-semibold">
            {data.title}
          </h1>
          <p>
            {new Date(data.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <img
          src={data.image}
          alt={data.title}
          className="w-[20rem] md:w-[45rem] rounded-2xl object-cover"
        />
        <div className="mt-[2rem] md:mt-[5rem]  md:w-[45rem]">
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
