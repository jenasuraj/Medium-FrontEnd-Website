import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import post from './Arr'; // Assuming this contains blog data

const BlogSection = () => {
  const { postId } = useParams(); // Get the post ID from the URL
  const navigate = useNavigate();
  const blog = post.find((item) => item.id === parseInt(postId)); // Find the post by ID

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="p-4 w-full h-auto sm:w-[70%] lg:w-[70%] mx-auto">
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Go Back
      </button>
      <p className='font-bold mb-5'>By {blog.user}</p>
      <h1 className="text-3xl font-bold">{blog.Heading}</h1>
      <p className="text-gray-700 mt-10 mb-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nulla, quaerat deleniti nobis tenetur vero nemo? Suscipit, sint nisi alias unde fugiat ipsum corporis laboriosam quisquam. Sunt laboriosam inventore reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor ut qui eaque mollitia esse, in voluptatibus nihil reprehenderit iste praesentium sunt minus, tempore optio adipisci eum autem? Tempore, ipsa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error tempora aspernatur animi voluptatibus quisquam iste non corrupti expedita ipsam libero dicta sed aut nostrum, distinctio quo repudiandae iusto? Cum.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nulla, quaerat deleniti nobis tenetur vero nemo? Suscipit, sint nisi alias unde fugiat ipsum corporis laboriosam quisquam. Sunt laboriosam inventore reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor ut qui eaque mollitia esse, in voluptatibus nihil reprehenderit iste praesentium sunt minus, tempore optio adipisci eum autem? Tempore, ipsa?
        Lorem ip Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nulla, quaerat deleniti nobis tenetur vero nemo? Suscipit, sint nisi alias unde fugiat ipsum corporis laboriosam quisquam. Sunt laboriosam inventore reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolor ut qui eaque mollitia esse, in voluptatibus nihil reprehenderit iste praesentium sunt minus, tempore optio adipisci eum autem? Tempore, ipsa?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur error tempora aspernatur animi voluptatibus quisquam iste non corrupti expedita ipsam libero dicta sed aut nostrum, distinctio quo repudiandae iusto? Cum.
        sum dolor sit amet consectetur adipisicing elit. Consequuntur error tempora aspernatur animi voluptatibus quisquam iste non corrupti expedita ipsam libero dicta sed aut nostrum, distinctio quo repudiandae iusto? Cum.
        
        </p>
      <div className="font-bold text-sm sm:text-base mb-4">{blog.date}</div>
      <img
        src={blog.img}
        alt={blog.category}
        className="w-80% h-auto object-cover rounded-md"
      />
      <p className="text-gray-800 mt-4">{blog.content}</p>
    </div>
  );
};

export default BlogSection;
