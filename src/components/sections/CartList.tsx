import { useDispatch, useSelector } from "react-redux";

import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../store/CartSlice";
import { ProductAddProps } from "../../types/types";
import { CartListItem } from "../utils/helper";

const CartList = () => {
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <section className="cart-list">
      {cart?.length === 0 ? <h2>Add items to the Cart!</h2> : null}
      {cart?.length > 0
        ? cart?.map((item: ProductAddProps) => (
            <CartListItem
              key={item.id}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
              imgSrc11={item.imgSrc11}
              priceCrossed={item.priceCrossed}
              deleteCart={() => dispatch(deleteFromCart(item))}
              incrementQty={() => dispatch(incrementQuantity(item))}
              decrementQty={() => dispatch(decrementQuantity(item))}
            />
          ))
        : null}
    </section>
  );
};

export default CartList;
