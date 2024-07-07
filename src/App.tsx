import React from 'react';
import './App.css';
import Main from "./components/Main/Main";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ApartmentSelection from "./components/ApartmentSelection/ApartmentSelection";
import "./utils/i18n"
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/selection',
        element: <ApartmentSelection/>
    }
])
function App() {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>
        </>
    );
}

export default App;
