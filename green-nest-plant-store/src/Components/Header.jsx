import React from 'react';
import logo from '../assets/images/logo.png'
import {Link, NavLink} from 'react-router'

const Header = () => {
    return (
        <div className='bg-white py-6 shadow-sm fixed w-full z-50'>
            <div className='w-11/12 mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="" className='w-[50px]' />
                    <h1 className="text-2xl font-bold text-green-600">GreenNest</h1>
                </div>

                <nav className='flex items-center gap-8 text-lg'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/plants'>Plants</NavLink>
                    <NavLink to='/profile'>My Profile</NavLink>
                </nav>

                <div className='space-x-2'>
                    <Link to='/auth/signin' className='btn text-green-500 border border-green-500 bg-white'>Sign In</Link>
                    <Link to='/auth/signup' className='btn bg-green-600 text-white'>Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;