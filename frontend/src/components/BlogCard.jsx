import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
    <Link to={`/blog-details/${data._id}`}>
      <img
        src={data.image}
        alt={data.title}
        className="w-[30rem] h-[15rem] rounded-2xl object-cover"
      />
      <div className="mt-3">
        <h2 className="text-[1rem] md:text-xl font-semibold">{data.title}</h2>
        <p className="text-xs md:text-lg">{data.description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
