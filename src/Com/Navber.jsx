import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">git initপশু বাজার</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-3">
      <li><NavLink to=''>হোম</NavLink></li>
      <li><NavLink to=''>পশু অনুসন্ধান
</NavLink></li>
      <li><NavLink to=''>          কসাই ব্রাউজ করুন
</NavLink></li>
      <li><NavLink to=''>          পশু পোস্ট করুন
</NavLink></li>
      <li><NavLink to=''>          আমার পোস্টসমূহ
</NavLink></li>
  
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-error">Signup now!</a>
  </div>
</div>
        </div>
    );
};

export default Navber;