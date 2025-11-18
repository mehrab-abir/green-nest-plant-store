import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <h2 className="text-red-500 font-semibold text-center text-xl">404 Error: The page you are looking for is not available.</h2>
            <Link to='/' className='btn bg-black text-white mt-4'>Go Back to Home Page</Link>
        </div>
    );
};

export default ErrorPage;