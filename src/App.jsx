import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './Components/ThemeContext';
import Nav from './Components/Nav';
import Genre from './Components/Genre';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Nav />
          <Genre />
        </>
      ),
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
