import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: ErrorPage,
        children: [
           {
            index: true,
            path: '/',
            Component: Home
           }
        ]
    }
]) 

export default router;