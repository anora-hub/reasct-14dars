import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'
import LikePage from './pages/LikePage'
import ProductsPage from './pages/ProductsPage'
import SinglePage from './pages/SinglePage'
import Cartpage from './pages/Cartpage'
import Order from './pages/Order'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='card' element={<CardPage />} />
                    <Route path='/like' element={<LikePage />} />
                    <Route path='products' element={<ProductsPage />} />
                    <Route path='products/:id' element={<SinglePage />} />
                    <Route path='cart' element={<Cartpage/>} />
                    <Route path='order' element={<Order />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App