import React from "react";

export default function CartColumns() {
  return (
    <div className="text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 ">
          <p className="text-uppercase font-weight-bold">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase ">total</p>
        </div>
      </div>
    </div>
  );
}
