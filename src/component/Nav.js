import React from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { ReactComponent as Favorite } from "../icons/favorite.svg";
import { ReactComponent as FactsSoft } from "../icons/facts-soft.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import AddToCart from "./AddtoCart";
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
export default function Nav({
  data,
  cartCount,
  setCartCount,
  initValue,
  setInitValue,
  navBtn,
  ...props
}) {
  const { unit, title } = data.article;

  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6" component="div">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={4} className="cartInNav">
              {navBtn ? (
                <AddToCart
                  unit={unit}
                  setCartCount={setCartCount}
                  cartCount={cartCount}
                  initValue={initValue}
                  setInitValue={setInitValue}
                />
              ) : null}
            </Grid>
            <Grid item xs={1} className="IconWrapper">
              <Favorite />
              <FactsSoft />
            </Grid>
            <div></div>
            <Grid item xs={1} className="cartWrapper">
              <div className="countNumber">
                <Cart />
                <div>{cartCount}</div>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
