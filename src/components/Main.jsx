import { useContext } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { RouterProvider } from "../context/Router";
import Page404 from "../pages/Page404";

export default function Main() {

    const {page, routes} = useContext(RouterProvider);

    const route = () => {
        return routes?.[page]?.p ?? <Page404 />
    }

    return(
        <>
            <NavBar />
            {route()}
            <Footer />
        </>
    );
}