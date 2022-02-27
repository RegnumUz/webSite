import React from 'react';
import Layout from '../components/Layout/index.jsx';
import Home from '../pages/Home/index';
import Bags from '../pages/Bags/index';
import Sneakers from '../pages/Sneakers/index';
import Belt from '../pages/Belt/index';
import Contact from '../pages/Contact/index';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/bags',
        element: <Bags />,
      },
      {
        path: '/sneakers',
        element: <Sneakers />,
      },
      {
        path: '/belt',
        element: <Belt />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];
