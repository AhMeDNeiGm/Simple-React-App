import React from "react";

const Product = ({ product, onInc, onDec, onDelete }) => {
  const getClasses = () => {
    return product.count <= 0 ? "badge bg-danger p-3" : "badge bg-success p-3";
  };

  return (
    <>
      <div
        className="card m-auto justify-content-center mt-3 p-2"
        style={{ width: "400px" }}
      >
        <div className="m-auto">
          <h2>{product.name}</h2>
        </div>
        <div className="m-auto">
          <img src={product.imgUrl} alt="" />
        </div>
        <div className="m-auto">
          <span className={getClasses()}>{product.count}</span>
          <button
            onClick={() => onInc(product)}
            className="btn btn-primary btn-sm m-3"
          >
            +
          </button>
          <button
            onClick={() => onDec(product)}
            className="btn btn-primary btn-sm m-3"
          >
            -
          </button>
          <span onClick={() => onDelete(product.id)} role="button">
            <i className="fa-solid fa-trash fs-3"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
