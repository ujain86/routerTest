import React from 'react';
import {RouterProvider, createHashRouter, createBrowserRouter} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Nav from './Nav';

function App() {

  const router = createHashRouter([
    {path: "/", element: <Nav />, children: [
      {index: true, element: <Home />},
      {path: "/about", element: <About />},
      {path: "/contact", element: <Contact />},
    ]},
    
  ]);

  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App