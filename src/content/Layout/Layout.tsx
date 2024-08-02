import React, { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Loading from "../Loading";



function Layout() {

    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}

export default Layout