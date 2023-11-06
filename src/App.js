import React, { useEffect, useState } from "react";
import data from "./data.json";
import Nav from "./component/Nav";
import ProductLandingPage from "./component/ProductLandingPage";
import ProductDetails from "./component/ProductDetails";
export function App() {
  const { items } = data.cart;
  const { minimum_order_quantity } = data.article;
  const [cartCount, setCartCount] = useState(items);
  const [initValue, setInitValue] = useState(minimum_order_quantity);
  const [navBtn, setNavBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        document.querySelector(".productDetailsWrapper").scrollHeight <
        document.documentElement.scrollTop
      ) {
        !navBtn && setNavBtn(true);
      } else {
        !navBtn && setNavBtn(false);
      }
    });
  }, []);
  return (
    <div>
      <Nav
        data={data}
        cartCount={cartCount}
        setCartCount={setCartCount}
        initValue={initValue}
        setInitValue={setInitValue}
        navBtn={navBtn}
      />
      <main className="mainDetails">
        <ProductLandingPage
          data={data}
          cartCount={cartCount}
          setCartCount={setCartCount}
          initValue={initValue}
          setInitValue={setInitValue}
        />
        <ProductDetails data={data} />
      </main>
    </div>
  );
}
