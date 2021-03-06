import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = (props) => {
  const { name, category, quantity, unit, id } = props.product;

  return (
    <div className="list-item">
      <div className="table-tile">{name}</div>
      <div className="table-tile">{category}</div>
      <div className="table-tile">{quantity}</div>
      <div className="table-tile">{unit}</div>
      <div className="table-tile">
        <button onClick={() => props.delete(id)}>
          <FontAwesomeIcon icon="times" style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
};

export default Product;
