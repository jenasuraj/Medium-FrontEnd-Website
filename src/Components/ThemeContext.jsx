import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  const [showBlog, setShowBlog] = useState(false); // Determines if BlogSection should show
  const [cat, setCat] = useState(''); // Stores the selected category
  const [currentPostId, setCurrentPostId] = useState(null); // Stores the currently selected post ID
  const [inputValue,setInputValue]=useState('');

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Increment count
  const change = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to handle reading a specific blog post
  const readTheBlog = (postId) => {
    if (!showBlog) {
      setShowBlog(true);
    }
    setCurrentPostId(postId); // Set the post ID being read
  };

  console.log('Current Category:', cat);
  console.log('Current Post ID:', currentPostId);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        count,
        change,
        showBlog,
        setShowBlog,
        readTheBlog,
        cat,
        setCat,
        currentPostId, // Expose current post ID
        inputValue,
        setInputValue
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
