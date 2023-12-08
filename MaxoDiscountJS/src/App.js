import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Login from "./components/login";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produits" />
                <Route path="/panier" />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
