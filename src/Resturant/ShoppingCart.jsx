import React from "react";
import Product from "./Product";
import { useOutletContext } from "react-router-dom";

const ShoppingCart = () => {
  const [
    products,
    handleReset,
    ,
    IncrementHandler,
    DecrementHandler,
    handleInCartChange,
  ] = useOutletContext();

  // console.log(products);
  return (
    <React.Fragment>
      <div className="container d-flex flex-column align-items-center gap-1 mt-2">
        <h1> Shopping Cart </h1>
        <button onClick={handleReset} className="btn btn-secondary m-2">
          Reset
        </button>
        <main className="container">
          {" "}
          {products.map((product) => {
            if (product.isInCart) {
              return (
                <Product
                  key={product.id}
                  product={product}
                  onDelete={() => handleInCartChange(product)}
                  onInc={IncrementHandler}
                  onDec={DecrementHandler}
                />
              );
            }
          })}
        </main>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
