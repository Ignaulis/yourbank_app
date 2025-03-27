import { createContext, useEffect, useState } from "react";
import Home from '../pages/Home';
import Careers from "../pages/Careers";
import About from "../pages/About";
import Security from "../pages/Security";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const RouterProvider = createContext();

export const Router = ({ children }) => {

    const routes = {
        '': {p: <Home />},
        'careers': {p: <Careers />},
        'about': {p: <About />},
        'security': {p: <Security />},
        'login': {p: <Login />},
        'signup': {p: <SignUp />}
    }

    const [page, setPage] = useState(() => {
        let hash = window.location.hash.replace('#', '');
        hash = hash.split('/').shift();
        return hash || '';
    });

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            let hash = window.location.hash.replace('#', '');
            hash = hash.split('/');
            setPage(hash.shift())
        })
    })


    return (
        <RouterProvider.Provider value={{
            page,
            routes
        }}>
            {children}
        </RouterProvider.Provider>
    );
}