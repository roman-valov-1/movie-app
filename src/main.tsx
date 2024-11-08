import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout.tsx'
import Home from './pages/Home/Home.tsx';
import RandomMovie from './pages/RandomMovie/RandomMovie.tsx';
import Login from './pages/Login/Login.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import MoviePage from './pages/MoviePage/MoviePage.tsx';
import SearchPage from './pages/SearchPage/SearchPage.tsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.tsx';

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
            path: '/movie-page/:id',
            element: <MoviePage />
         },
         {
            path: '/search-page',
            element: <SearchPage />
         },
         {
            path: '/*',
            element: <NotFoundPage />
         }
      ]
   }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>,
)
