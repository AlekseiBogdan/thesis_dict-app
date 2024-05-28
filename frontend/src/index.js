import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import Root from './components/Root';
import Word from './components/word';
import ErrorPage from './components/errorPage';

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
      path: 'word/:wordId',
      element: <Word />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

