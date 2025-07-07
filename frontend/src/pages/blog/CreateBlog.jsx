import { useState } from "react";
import { useCreateBlogMutation } from "../../redux/api/blog.js";
import { useNavigate } from "react-router";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [createBlog, { isLoading }] = useCreateBlogMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createBlog({ title, description, content, tags });
      alert("Blog posted successfully.");
      navigate("/");
    } catch (error) {
      console.log(error?.data?.message || error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#f0f0f0]  p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 ">
        Create New Blog
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 text-gray-700 ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add description"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Content</label>
          <textarea
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here..."
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Tags</label>
          <input
            type="text"
            value={tags.join(", ")}
            onChange={(e) => setTags(e.target.value.split(", "))}
            placeholder="e.g. tech, react, tips"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
