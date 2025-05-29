// src/components/Navber.js
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router'; // Use react-router-dom!
import { Authcontext } from '../Auth/Authcontext';

const Navber = () => {
  const { users, logout } = useContext(Authcontext);

  const handelout = () => {
    logout()
      .then(() => {
        console.log('User signed out');
      })
      .catch(error => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
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
          <Link className="btn btn-ghost text-xl" to="/">পশু বাজার</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <li><NavLink to="/">হোম</NavLink></li>
            <li><NavLink to="/all">পশু অনুসন্ধান</NavLink></li>
            <li><NavLink to="/butchers">কসাই ব্রাউজ করুন</NavLink></li>
            {users && <li><NavLink to="/post-animal">পশু পোস্ট করুন</NavLink></li>}
            {users && <li><NavLink to="/my-posts">আমার পোস্টসমূহ</NavLink></li>}
          </ul>
        </div>

        <div className="navbar-end space-x-3">
          {users ? (
            <>
              <img
                src={users.photoURL}
                alt={users.displayName || 'User'}
                title={users.displayName || 'User'}
                className="w-10 h-10 rounded-full border"
              />
              <button onClick={handelout} className="btn btn-error">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/signup" className="btn btn-error">
              Signup now!
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;


// src/components/Navber.js
// import React, { use} from 'react';
// import { Link, NavLink } from 'react-router';
// import { Authcontext } from '../Auth/Authcontext';

// const Navber = () => {
//   const { users } = use(Authcontext);

//   return (
//     <div className="navbar bg-base-100 shadow-sm">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
//             <li><a>Item 1</a></li>
//             <li>
//               <a>Parent</a>
//               <ul className="p-2">
//                 <li><a>Submenu 1</a></li>
//                 <li><a>Submenu 2</a></li>
//               </ul>
//             </li>
//             <li><a>Item 3</a></li>
//           </ul>
//         </div>
//         <Link className="btn btn-ghost text-xl" to="/">পশু বাজার</Link>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 space-x-3">
//           <li><NavLink to="/">হোম</NavLink></li>
//           <li><NavLink to="/search">পশু অনুসন্ধান</NavLink></li>
//           <li><NavLink to="/butchers">কসাই ব্রাউজ করুন</NavLink></li>
//           <li><NavLink to="/post-animal">পশু পোস্ট করুন</NavLink></li>
//           <li><NavLink to="/my-posts">আমার পোস্টসমূহ</NavLink></li>
//         </ul>
//       </div>

//       <div className="navbar-end space-x-3">
//         {users? (
//           <img
//             src={users.photoURL}
//             className="w-10 h-10 rounded-full border"
//             alt="User"
//             title={users.displayName || 'User'}
//           />
//         ) : (
//           <span className="text-sm text-gray-500 hidden sm:inline">Not Logged In</span>
//         )}

//         <Link to="/signup">
//           <button className="btn btn-error">Signup now!</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navber;
