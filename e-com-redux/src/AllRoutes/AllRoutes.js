import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Signin from '../Pages/Signin'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signin />} />
    </Routes>
  )
}

export default AllRoutes