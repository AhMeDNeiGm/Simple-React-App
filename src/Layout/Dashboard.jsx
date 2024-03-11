import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
const DashboardLayout = () => {
  const Navigate = useNavigate();
  const HandleClick = () => {
    Navigate("/", { state: "Come From State Mn DashBoard" });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="list-group">
              <button
                to="/"
                onClick={HandleClick}
                className="list-group-item list-group-item-action"
              >
                Home
              </button>
              <Link
                to="/dashboard/users"
                className="list-group-item list-group-item-action"
              >
                Users
              </Link>
              <Link
                to="/dashboard/posts"
                className="list-group-item list-group-item-action"
              >
                Posts
              </Link>
              <Link
                to="/dashboard/post"
                className="list-group-item list-group-item-action"
              >
                Post
              </Link>
              <Link
                to="/admin"
                className="list-group-item list-group-item-action"
              >
                Admin
              </Link>
            </div>
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
