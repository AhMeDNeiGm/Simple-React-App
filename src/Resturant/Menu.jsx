import React from "react";
import { useOutletContext } from "react-router-dom";

const Menu = () => {
  const handleInCartChange = useOutletContext()[5];
  const products = useOutletContext()[0];

  // let handleInCartChange;
  // rest.forEach((f) => {
  //   if (f.name === "handleInCartChange") {
  //     handleInCartChange = f;
  //   }
  // });
  // console.log(handleInCartChange);

  return (
    <>
      <div className="container">
        <h1> Menu</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ProductImg</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Add</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {products.map((product) => (
              <tr key={product.id}>
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
                    style={
                      product.isInCart
                        ? { color: "orange", cursor: "pointer" }
                        : { color: "gray", cursor: "pointer" }
                    }
                    onClick={() => handleInCartChange(product)}
                    className="fa-solid fa-cart-plus"
                  ></i>
                  {/* <Cart onClick={handleInCartChange} product={product} /> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Menu;
