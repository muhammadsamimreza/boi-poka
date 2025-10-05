import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import ReadBooks from '../pages/ReadBooks/ReadBooks';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: ErrorPage,
        children: [
           {
            index: true,
            path: '/',
            loader: ()=> fetch('/booksData.json'),
            Component: Home
           },
           {
            path: '/booklist',
            Component: ListedBooks
           },
           {
            path: '/read',
            Component: ReadBooks
           },
        ]
    }
]) 

export default router;