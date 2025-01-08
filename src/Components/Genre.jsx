import React, { useContext } from 'react';
import PostSection from './PostSection';
import { ThemeContext } from './ThemeContext';
import BlogSection from './BlogSection';
import { Link } from 'react-router-dom';

const Genre = () => {
  const {showBlog,setShowBlog,cat,setCat} =useContext(ThemeContext)
  //const categories = ["Horror","Future","Neuroscience","Comedy", "Adventure", "Thriller", "love", "Silent", "Science Fiction","Physics","Anime","Cars","Technology","Engineering","stupidity"];
  const categories = ["All", "Horror", "Future", "Neuroscience", "Comedy", "Adventure", "Thriller", "love", "Silent", "Science Fiction", "Physics", "Anime", "Cars", "Technology", "Engineering", "stupidity"];

const FindPostByClicking = (item) => {
  setCat(item === "All" ? null : item); // Reset if "All" is clicked
};


  return (
    <>
      <div className="w-full h-auto flex flex-col items-center">
        {/** Genre section */}
        <div className="bg-slate-300 w-full h-[5vh] sm:w-[100%] sm:h-[5vh] md:w-[70%] lg:w-[70%] overflow-x-auto flex gap-10 items-center px-3 scrollbar-hide border border-slate-200 mx-auto">
          {Array(1) // Run the array 1 times
            .fill(0)
            .map((_, round) => (
              categories.map((item, index) => (
                <p onClick={()=>FindPostByClicking(item)}
                key={`${round}-${index}`}
                className="rounded-full text-black whitespace-nowrap hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer"
                 >
                {item}
                </p>

              ))
            ))}
        </div>
        {showBlog ? <Link to='/read-post'></Link>:<PostSection/>}
      </div>
    </>
  );
};

export default Genre;








