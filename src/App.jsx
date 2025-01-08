import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeContext';
import Nav from './Components/Nav';
import Genre from './Components/Genre';
import PostSection from './Components/PostSection';
import BlogSection from './Components/BlogSection';

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Genre />
      <Outlet /> {/* This is where nested routes will render */}
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />, // Nav and Genre will always be visible
      children: [
        { path: '/', element: <PostSection /> }, // Default: show posts
        { path: 'read-post/:postId', element: <BlogSection /> }, // Show a single blog
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
