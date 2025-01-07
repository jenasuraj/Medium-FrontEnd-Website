import React from 'react';
import PostSection from './PostSection';

const Genre = () => {
  const categories = ["Horror","Future","Neuroscience","Comedy", "Adventure", "Thriller", "love", "Silent", "Science Fiction","Physics","Anime","Cars","Technology","Engineering","stupidity"];

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center">
        {/** Genre section */}
        <div className="bg-slate-300 w-full h-[5vh] sm:w-[100%] sm:h-[5vh] md:w-[70%] lg:w-[70%] overflow-x-auto flex gap-10 items-center px-3 scrollbar-hide border border-slate-200 mx-auto">
          {Array(1) // Run the array 1 times
            .fill(0)
            .map((_, round) => (
              categories.map((item, index) => (
                <p
                key={`${round}-${index}`}
                className="rounded-full text-black whitespace-nowrap hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer"
                 >
                {item}
                </p>

              ))
            ))}
        </div>
        <PostSection />
      </div>
    </>
  );
};

export default Genre;








