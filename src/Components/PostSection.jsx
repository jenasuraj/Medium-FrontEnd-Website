import React, { useContext } from "react";
import post from "./Arr";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";

const PostSection = () => {
  const { readTheBlog, cat } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Filter posts based on category
  const filteredPosts = cat
    ? post.filter((item) => item.category.toLowerCase() === cat.toLowerCase())
    : post;

  const handleBlogClick = (postId) => {
    readTheBlog(postId); // Pass the selected post ID if needed
    navigate(`/read-post/${postId}`); // Navigate to the blog route
  };

  return (
    <div
      className="bg-slate-100 w-full h-auto 
      sm:w-[100%] sm:h-auto md:w-[70%] lg:w-[70%] border border-slate-200 mx-auto flex flex-col"
    >
      {/* Render filtered posts */}
      {filteredPosts.map((item) => (
        <div
          key={item.id} // Use a unique key
          className="w-full h-auto sm:h-auto md:h-[40vh] lg:h-[40vh] border-b-2 border-b-slate-300 mt-5 flex flex-col sm:flex-row"
          onClick={() => handleBlogClick(item.id)}
        >
          {/* Left side text area */}
          <div className="p-4 sm:w-[60%] flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 border border-black flex justify-center items-center">🐸</div>
              <p className="font-bold text-sm sm:text-base truncate">{item.user}</p>
            </div>
            <div className="text-lg sm:text-3xl font-semibold">{item.Heading}</div>
            <div className="text-sm sm:text-base text-gray-700">{item.Bio}</div>
            <div className="font-bold text-sm sm:text-base">{item.date}</div>
          </div>

          {/* Right side img area */}
          <div className="w-full sm:w-[40%] h-40 sm:h-full flex justify-center items-center">
            <img
              src={item.img}
              alt={item.category}
              className="w-[90%] h-[90%] sm:w-full sm:h-full object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;
