import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import NavBar from "./../Components/Navbar";

function RootLayout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Call Back End
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  //#region CRUD Products
  const handleDeleteProduct = async (product) => {
    const oldProducts = [...products];
    // Update products state to remove the deleted product
    setProducts(products.filter((p) => p.id !== product.id));
    // Call Backend to delete product
    try {
      await axios.delete("http://localhost:3000/products/" + product.id);
      toast.success("Deleted Done");
    } catch {
      toast("Sorry! Product Can't Delete");
      setProducts({ products: oldProducts });
    }
  };

  //#endregion

  // componentDidMount = async () => {
  //   // Call Back End
  //   // const promise = fetch("https://jsonplaceholder.typicode.com/posts");
  //   // // promice leh 7alten fe L Pending => 1.resolved   2.rejected
  //   // const res = promise.then((res) => res.json());
  //   // res.then((res) => console.log(res));
  // };

  //#region Shopping Card
  const handleDelete = (prodId) => {
    // clone
    const newProduct = [...products];
    // Edit
    const newP = newProduct.filter((p) => p.id !== prodId);
    // console.log(prodId);
    // setState
    setProducts(newP);
  };

  const handleReset = () => {
    const newProducts = products.map((p) => {
      p.count = 0;
      return p;
    });
    setProducts(newProducts);
  };

  const IncrementHandler = (product) => {
    // clone
    const newProduct = [...products];
    // Edit
    const updatedProducts = newProduct.map((p) =>
      p.id === product.id ? { ...p, count: p.count + 1 } : p
    );
    // setState
    setProducts(updatedProducts);
  };

  const DecrementHandler = (product) => {
    // clone
    const newProduct = [...products];
    // Edit
    const updatedProducts = newProduct.map((p) =>
      p.id === product.id ? { ...p, count: p.count - 1 } : p
    );
    //  setState
    setProducts(updatedProducts);
  };

  // const productCount = products.filter((p) => p.isInCart).length;

  const handleInCartChange = (product) => {
    // console.log(product);
    // clone
    const newProducts = [...products];
    const index = newProducts.indexOf(product);
    // console.log(index);
    newProducts[index] = { ...newProducts[index] };
    // Edit
    newProducts[index].isInCart = !newProducts[index].isInCart;

    // set State
    setProducts(newProducts);
  };
  //#endregion
  return (
    <>
      <NavBar productCount={products.filter((p) => p.isInCart).length} />
      <Outlet
        context={[
          products,
          handleReset,
          handleDelete,
          IncrementHandler,
          DecrementHandler,
          handleInCartChange,
          handleDeleteProduct,
        ]}
      />
    </>
  );
}
export default RootLayout;
