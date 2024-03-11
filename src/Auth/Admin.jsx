import React from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Admin = () => {
  const products = useOutletContext()[0];
  const handleDeleteProduct = useOutletContext()[6];

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/productform/${id}`);
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-3 ">
        <h1> ADMIN: My Products </h1>
        <Link to="/productform/new" className="btn btn-outline-success ">
          Add Product
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <th scope="row">
                  <img
                    src={product.imgUrl}
                    alt=""
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </th>
                <th>{product.name}</th>
                <th>{product.price}</th>
                <th>
                  <i
                    product={product}
                    onClick={() => handleButtonClick(product.id)}
                    style={{ color: "hotpink", cursor: "pointer" }}
                    className="fa-solid fa-pen-to-square"
                  ></i>
                </th>
                <th>
                  <i
                    onClick={() => handleDeleteProduct(product)}
                    style={{ color: "red", cursor: "pointer" }}
                    className="fa-solid fa-trash"
                  ></i>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
