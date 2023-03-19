import React, { useState } from "react";
export default function items(props) {
  return (
    <li
      onClick={() => { props.onChecked(props.id) }}
      style={{ cursor: "pointer" }}
    >
      {props.item}
    </li>
  );
}
