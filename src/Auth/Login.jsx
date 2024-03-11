import React, { Component } from "react";
import Joi from "joi-browser";

class Login extends Component {
  state = {
    products: [],
    username: "",
    password: "",
    errors: {},
  };

  // async componentDidMount() {
  //   // Call Back End
  //   const { data } = await axios.get("http://localhost:3000/products");
  //   console.log(data);
  //   // set State
  //   this.setState({ products: data });
  //   // const promise = fetch("https://jsonplaceholder.typicode.com/posts");
  //   // // promice leh 7alten fe L Pending => 1.resolved   2.rejected
  //   // const res = promise.then((res) => res.json());
  //   // res.then((res) => console.log(res));
  // }
  //#region

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  validate = () => {
    const errors = {};
    // clone State
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    // console.log(res);
    // handle div error in UI
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }
    // set State
    this.setState({ errors });
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    if (errors) return;

    // call Back End
    // console.log("Submit");
  };
  handleChange = (e) => {
    //  بهندل عشان اي داتا اكتبها ف الانبوت تسمع معايا علطول في الاستات
    // console.log("Change");
    // clone
    let state = { ...this.state };
    // Edit
    // this name in Prorpty =>  Input Html  .....NOT name is state.
    state[e.currentTarget.name] = e.currentTarget.value;
    // setState
    this.setState(state);
  };
  //#endregion
  render() {
    return (
      <>
        <form className="container mt-4" onSubmit={this.handleSubmit}>
          <h1> Login Form</h1>
          <div className="mb-3 row mt-4">
            <label
              htmlFor="Username"
              className="col-sm-2 col-form-label"
              id="Email"
            >
              UserName
            </label>
            <div className="col-sm-10">
              <input
                autoFocus
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="Username"
              />
            </div>
            {this.state.errors.username && (
              <div className="alert alert-danger">{this.state.errors.name}</div>
            )}
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                id="inputPassword"
              />
            </div>
            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary m-4">
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
