import Header from "./header";
import {BrowserRouter, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>);
}