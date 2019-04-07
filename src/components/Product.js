import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, company, title, img, price, inCart } = this.props.product;

    return (
      <div className="item-container bg-white p-3">
        <ProductConsumer>
          {value => (
            <div>
              <div
                className="img-container d-flex align-items-center justify-content-center"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top p-2" />
                </Link>
                <div className="cart-btn">
                  <button
                    className="btn btn-danger"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <p>
                  {company}: {title}
                </p>
                <h6 className="mb-3">
                  Price: $
                  {price.toLocaleString(undefined, {
                    minimumFractionDigits: 2
                  })}
                </h6>
              </div>
            </div>
          )}
        </ProductConsumer>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
