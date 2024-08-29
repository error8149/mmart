import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import CartProvider from './contexts/CartContext';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
  <CartProvider>
  <ProductProvider>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </ProductProvider>
  </CartProvider>
  </SidebarProvider>
);

