import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../general/Footer";
import Header from "../../general/Header";
import Home from "../../screens/Home";
import SearchPage from "../../screens/SearchPage";
import HomePage from "../../screens/HomePage";

function AppRouter() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                {/* </Route> */}
            </Routes>

            <Footer />
        </>
    );
}

export default AppRouter;
const Container = styled.div``;
