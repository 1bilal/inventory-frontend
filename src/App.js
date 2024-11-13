import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from / to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Define other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        <Route path="/products" element={<ProtectedRoute component={ProductList} />} />
        <Route path="/products/:id" element={<ProtectedRoute component={ProductDetail} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
