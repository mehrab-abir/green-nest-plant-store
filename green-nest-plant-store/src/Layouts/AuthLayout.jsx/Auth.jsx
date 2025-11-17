import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header';

const Auth = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;