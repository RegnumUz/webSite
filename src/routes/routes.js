import Layout from '../components/Layout';
import Home from '../pages/Home/index';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
];
