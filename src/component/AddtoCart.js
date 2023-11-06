import React from "react";
import { Button, TextField } from "@mui/material";
import { ReactComponent as Add } from "../icons/add.svg";

export default function AddToCart({
  unit,
  cartCount,
  setCartCount,
  initValue,
  setInitValue,
}) {
  return (
    <div className="addToCartButtonWrapper">
      <TextField
        type="number"
        value={initValue}
        className="textField"
        onChange={(e) => {
          setInitValue(Number(e.target.value));
        }}
      />
      {` ${unit} `}
      <Button
        variant="contained"
        className="addCart"
        onClick={() => {
          setCartCount(initValue + cartCount);
        }}
      >
        <Add />
        Add to cart
      </Button>
    </div>
  );
}
