import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, company, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "auto", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product: </span>
        {company}: {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price: $</span>
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2
        })}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div className="d-flex">
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => decrement(id)}
            >
              -
            </button>
            <div className="py-2 px-3 border border-dark rounded mx-1">
              {count}
            </div>
            <button
              className="btn btn-outline-dark mx-1"
              onClick={() => increment(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <button className="btn btn-warning" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>
          item total: $
          {total.toLocaleString(undefined, {
            minimumFractionDigits: 2
          })}
        </strong>
      </div>
    </div>
  );
}
