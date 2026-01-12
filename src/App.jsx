import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CardPage from './pages/CardPage'
import LikePage from './pages/LikePage'
import ProductsPage from './pages/ProductsPage'
import SinglePage from './pages/SinglePage'

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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App