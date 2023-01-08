import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import MytodolistFetch from './pages/Mytodolistfetch';
import Mytodolist from './pages/Mytodolist';


const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/mytodolist' element={<Mytodolist />} />
                <Route path='/' element={<MytodolistFetch />} />
            </Routes>
        </BrowserRouter>
    );

};

export default Layout;