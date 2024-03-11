import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-sm">
      <div className="container-fluid">
        <Link className="navbar-brand text-secondary">E-Commerce </Link>
        <div>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive && "active"} `
                }
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive && "active"} `
                }
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive && "active"} `
                }
                aria-current="page"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive && "active"} `
                }
                aria-current="page"
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink to="/menu">
            <span className="m-2">
              <i className="fa-solid fa-table-list fs-2"></i>
            </span>
          </NavLink>
          <NavLink to="/cart">
            <span className="m-2">
              <i className="fa-solid fa-cart-shopping  fs-2"></i>
            </span>
          </NavLink>

          <span className="btn btn-warning fa-sm p-2">
            {props.productCount}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
