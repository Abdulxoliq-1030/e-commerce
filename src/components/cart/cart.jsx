import React, { Component } from "react";
import Title from "../title";
import CartColumns from "./cart-columns";
import EmptyCart from "./empty-cart";
import { ProductConsumer } from "../../context";
import CartList from "./cart-list";
import CartTotals from './cart-totals';

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value}/>
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
