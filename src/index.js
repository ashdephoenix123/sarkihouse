import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/productContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <AppProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </AppProvider>
    </BrowserRouter>
);

