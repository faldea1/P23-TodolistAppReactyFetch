import React from 'react';
import {FaTrash, FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Menu = () =>{
    return (
        <ul className='nav justify-content-center'>
            <li className='nav-item'>
                <Link className='nav-link' to='/'>My Todolist Fetch</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/mytodolist'>My First Todolist</Link>
            </li>
            <li className='nav-item'>
                <span className='nav-link disabled'>faldea1</span>
            </li>
        </ul>
    );
};

export default Menu;