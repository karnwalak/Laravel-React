import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Create from "./components/employeeList/Create";
import Edit from "./components/employeeList/Edit";
import View from "./components/employeeList/View";

function MyApp() {
    return (
        <Routes>
            <Route path="/home" element={<App />} />
            <Route path="/edit/:id" element = {<Edit/>} />
            <Route path="/view/:id" element = {<View/>} />
            <Route path="/create" element = {<Create/>} />
        </Routes>
    );
}
export default MyApp;

if (document.getElementById("employeeApp")) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>,
        document.getElementById("employeeApp")
    );
}
