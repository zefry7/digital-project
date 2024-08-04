import React, { createContext, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Layout from './content/Layout/Layout';
import { data } from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const DataProvider = createContext(data)

export const handleClickLink = () => {
  window.scrollTo({
    top: 0,
    behavior: "auto"
  })
}


const LazyMainPage = lazy(() => import('./content/MainPage/MainPage'))
const LazyProjectPage = lazy(() => import('./content/ProjectPage/ProjectPage'))
const LazyCertPage = lazy(() => import('./content/CertPage/CertPage'))
const LazyContactPage = lazy(() => import('./content/ContactPage/ContactPage'))
const LazyGalleryPage = lazy(() => import('./content/GalleryPage/GalleryPage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <LazyMainPage />
      },
      {
        path: "gallery",
        element: <LazyGalleryPage />
      },
      {
        path: "projects",
        element: <LazyProjectPage />
      },
      {
        path: "certificates",
        element: <LazyCertPage />
      },
      {
        path: "contact",
        element: <LazyContactPage />
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



