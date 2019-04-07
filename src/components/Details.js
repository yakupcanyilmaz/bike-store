import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            price,
            title,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5 bg-white">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>
                    {company}: {title}
                  </h2>
                  <h4>
                    price: $
                    {price.toLocaleString(undefined, {
                      minimumFractionDigits: 2
                    })}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    info:
                  </p>
                  <p className="text-muted">{info}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-danger text-capitalize"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                    <Link to="/">
                      <button className="btn btn-outline-dark text-capitalize">
                        back to products
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
