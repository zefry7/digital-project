import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import { BrowserRouter, createBrowserRouter, HashRouter, RouterProvider, } from "react-router-dom"
import Layout from './content/Layout/Layout';
import { data } from './data';
import MainPage from './content/MainPage/MainPage';
import CertPage from './content/CertPage/CertPage';
import ProjectPage from './content/ProjectPage/ProjectPage';
import ContactPage from './content/ContactPage/ContactPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const DataProvider = createContext(data)

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "projects",
        element: <ProjectPage />
      },
      {
        path: "certificates",
        element: <CertPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
], {
  basename: `/${url[1]}/`
})

root.render(
  <React.StrictMode>
    <DataProvider.Provider value={data}>
      <RouterProvider router={router}/>
    </DataProvider.Provider>
  </React.StrictMode>
);



