import { createContext, useEffect, useState } from "react";
import Home from '../pages/Home';

export const RouterProvider = createContext();

export const Router = ({ children }) => {

    const routes = {
        '': {p: <Home />}
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