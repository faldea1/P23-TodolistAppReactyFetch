import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import MytodolistFetch from './pages/Myfetchtodolist';
import Mytodolist from './pages/Mytodolist';
import injectContext from './store/AppContext';

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