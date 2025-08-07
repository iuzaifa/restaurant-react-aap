import React from 'react';
import { Link } from 'react-router-dom';


const Breadcrumb = ({ currentPage, moverUrl}) => {
  return (
    <div className='bg-image bg-cover bg-center h-64 flex items-center justify-center bg-breadcrumb-image'>
      <nav className="bg-gray-50 p-4 rounded-lg shadow-md border-2" aria-label="breadcrumb">
        <ol className="list-reset flex">
          <li className="mr-2">
            <Link to={moverUrl} className="text-gray-500 hover:text-gray-800">Home</Link>
          </li>
          <li className="mr-2">
            <span className="text-amber-600">/</span>
          </li>
          <li className="mr-2 capitalize">
            <span className="text-amber-600 hover:text-amber-700 font-bold">{currentPage}</span>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
