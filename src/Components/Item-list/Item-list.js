import React from "react";
import "./Item-list.css";

const ItemList = (props) => {

    const { data, onItemSelected, children: renderItems } = props;

    const items = data.map((item) => {
      const {id} = item;
      const label = renderItems(item)
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
    
    return <ul className="item-list list-group">{items}</ul>;
}

export default ItemList;