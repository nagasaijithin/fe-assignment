import React, { useEffect } from "react";
import { Card, Grid, Typography } from "@mui/material";
import { ReactComponent as Package } from "../icons/Package.svg";
import { ReactComponent as StarFilled } from "../icons/star-filled.svg";
import { ReactComponent as Discount } from "../icons/discount.svg";
import { ReactComponent as ZoomIn } from "../icons/zoom-in.svg";
import AddToCart from "./AddtoCart";
export default function ProductLandingPage({
  data,
  setCartCount,
  cartCount,
  initValue,
  setInitValue,
}) {
  const {
    title,
    supplier_link,
    supplier_name,
    stars,
    price,
    currency,
    transport_costs,
    vat_percent,
    unit,
    minimum_order_quantity,
  } = data.article;
  return (
    <Grid container spacing={3} className="productDetailsWrapper">
      <Grid item xs={1}>
        <Card className="miniImage">
          <Package />
        </Card>
        <Card className="miniImage">
          <Package />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="mainImage mainImage">
          <Package />
          <span>
            <ZoomIn />
          </span>
        </Card>
      </Grid>
      <Grid item xs="auto" className="productCostDetails">
        <div>
          <Typography className="mainTitleFoProduct">{title}</Typography>
          <Typography className="suplrName">
            by <a href={supplier_link}>{supplier_name}</a>
          </Typography>
          <div className="starsWrapper">
            {[...new Array(Math.round(stars))].map((each) => {
              return (
                <span className="goldStar">
                  <StarFilled />
                </span>
              );
            })}
            {[...new Array(5 - Math.round(stars))].map((each) => {
              return <StarFilled />;
            })}
          </div>
          <div>
            <Typography className="priceTag">
              {price} {currency}{" "}
              <span>
                +{transport_costs} {currency} shipping <Discount />
              </span>
            </Typography>
            <Typography className="vatTag">
              all prices incl. {vat_percent}% takes
            </Typography>
          </div>
        </div>
        <div>
          <AddToCart
            unit={unit}
            setCartCount={setCartCount}
            cartCount={cartCount}
            initValue={initValue}
            setInitValue={setInitValue}
          />
        </div>
      </Grid>
    </Grid>
  );
}
