import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../components/Root/Root';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import ReadBooks from '../pages/ReadBooks/ReadBooks';
import BookDetals from '../pages/BookDetails/BookDetals';

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
            path: '/bookdetails/:id',
            Component: BookDetals
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