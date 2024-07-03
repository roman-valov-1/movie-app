import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout.tsx'
import Home from './pages/Home/Home.tsx';
import RandomMovie from './pages/RandomMovie/RandomMovie.tsx';
import Login from './pages/Login/Login.tsx';
import Registration from './pages/Registration/Registration.tsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/random-movie',
            element: <RandomMovie />
         },
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/registration',
            element: <Registration />
         },
      ]
   }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
