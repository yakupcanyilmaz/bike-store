import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, company, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="container">
                <div className="row">
                  <div
                    id="myModal"
                    className="modal d-block d-flex align-items-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body text-capitalize text-center">
                          <h5>item added to the cart</h5>
                          <img src={img} className="img-fluid" alt="product" />
                          <h5>
                            {company}: {title}
                          </h5>
                          <h5 className="text-muted">
                            price: $
                            {price.toLocaleString(undefined, {
                              minimumFractionDigits: 2
                            })}
                          </h5>
                          <div className="d-flex flex-column">
                            <Link to="/">
                              <button
                                className="m-2 
                              btn btn-dark text-capitalize"
                                onClick={() => closeModal()}
                              >
                                continue shopping
                              </button>
                            </Link>
                            <Link to="/cart">
                              <button
                                className="mt-2 btn btn-danger text-capitalize"
                                onClick={() => closeModal()}
                              >
                                go to cart
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
