// import React from 'react';
// import './Header.css';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>TwinShz</h1>
//       </div>
//       <div className="search-container">
//         <input type="text" placeholder="Search..." />
//         <button>Search</button>
//       </div>
//       <nav className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/">Cart</Link>
//         <Link to="About">About</Link>
//         <Link to="Login">Login</Link>
//         <Link to="Signup">SignUp</Link>
//         <Link to="UserProfile"></Link>
//       </nav>
      
//     </header>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { CiSaveUp1 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <header className="header">
      <div className="logo">
        <h1>TwinShz</h1>
      </div>

      {/* <button className="toggle-sidebar-button" onClick={toggleSidebar}>
          {isSidebarOpen ? '←' : '→'}
        </button> */}

      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button><FaSearch /></button>
      </div>
      <nav className="nav-links">
        <Link to="/">Home<AiOutlineHome /></Link>
        
        <Link to="/about">About</Link>
        <Link to="/login">Login<CiLogin /></Link>
        <Link to="/signup">SignUp<CiSaveUp1 /></Link>
        <Link to="/cart">Cart<BsCartCheck /></Link>
        
        <img
          src="images.jpg"
          alt="Images"
          className="img"
          onClick={toggleDropdown}
        />
        {dropdownOpen && (
          <div className="dropdown">
            <ul>
              <li><Link to="/editprofile">Edit Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><Link to="/help">Help</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        )}
      </nav>
      {/* <div className="user-profile">
        
      </div> */}
      {/* {isSidebarOpen && <Sidebar />} */}
    </header>
  );
}

export default Header;
