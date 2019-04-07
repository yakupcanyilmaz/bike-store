import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="bg-dark py-2">
          <div className="container d-md-flex justify-content-md-between align-items-center">
            <div className="d-md-flex align-items-center d-flex-column justify-content-center text-center">
              <Link to="/">
                <img src={logo} alt="store" className="mx-2" />
              </Link>
              <ul className="list-unstyled my-2 mx-2">
                <li className="">
                  <Link to="/" className="btn p-0 text-light">
                    Shop Bikes
                  </Link>
                </li>
              </ul>
            </div>
            <ProductConsumer>
              {value => {
                const { cart, cartTotal } = value;
                return (
                  <Link to="/cart">
                    <div className="text-center">
                      <button className="my-2 btn btn-danger">
                        <span>
                          <i className="fas fa-shopping-cart mr-2" />
                        </span>
                        <span className="text-capitalize">
                          <span>
                            {cart
                              .map(item => {
                                return item.count;
                              })
                              .reduce((a, b) => a + b, 0)}
                          </span>{" "}
                          <span>
                            {cart
                              .map(item => {
                                return item.count;
                              })
                              .reduce((a, b) => a + b, 0) <= 1
                              ? "item"
                              : "items"}{" "}
                          </span>{" "}
                          - $
                          <span>
                            {cartTotal.toLocaleString(undefined, {
                              minimumFractionDigits: 2
                            })}
                          </span>
                        </span>
                      </button>
                    </div>
                  </Link>
                );
              }}
            </ProductConsumer>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
