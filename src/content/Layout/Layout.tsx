import React, { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Loading from "../Loading";



function Layout() {

    return (
        <>
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}

export default Layout