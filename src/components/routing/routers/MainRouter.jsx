import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import AuthRouter from "./AuthRouter";

function MainRouter() {
    return <AppRouter />;
}

export default MainRouter;
