import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Mytodolist from './pages/Mytodolist';

const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/mytodolist' element={<Mytodolist />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );

};

export default Layout;