import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Layout from './content/Layout/Layout';
import { data } from './data';
import MainPage from './content/MainPage/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const DataProvider = createContext(data)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <DataProvider.Provider value={data}>
      <RouterProvider router={router} />
    </DataProvider.Provider>
  </React.StrictMode>
);



