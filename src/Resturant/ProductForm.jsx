import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductForm = () => {
  const [formData, setFormData] = useState({ name: "", price: "" });
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id !== "new") {
      const fetchData = async () => {
        const { data } = await axios.get(
          "http://localhost:3000/products/" + id
        );

        // Clone
        const product = { ...formData };

        // Update the product object with the fetched data
        product.name = data.name;
        product.price = data.price;

        // Set the state with the updated product object
        setFormData(product);
      };

      fetchData();
    }
  }, []);

  //  componentDidMount (){
  //   const id = formData.match.params.id;
  //   console.log(id);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call Backend
    // Add
    let obj = {
      ...formData,
      count: 0,
      imgUrl: "logo192.png",
      isInCart: false,
    };
    if (id === "new") {
      await axios.post("http://localhost:3000/products", obj);
      toast.success("تمت الاضافة بنجااح");
    }
    // Edit
    else {
      await axios.put("http://localhost:3000/products/" + id, obj);
      toast("Updated Is Done");
    }
    navigate("/admin");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="container mt-4" onSubmit={handleSubmit}>
        <h1>{id === "new" ? "Add Product" : "Edit Product"}</h1>
        <div className="form-group mb-3 row mt-4">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
        </div>
        <div className="form-group mb-3 row">
          <label htmlFor="inputPrice" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-10">
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputPrice"
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary m-4">
            {id === "new" ? "Add" : "Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
