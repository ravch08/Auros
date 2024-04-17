import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  deleteFromCart,
  incrementQuantity,
} from "../../store/CartSlice";
import CartListItem from "../features/CartListItem";
import { ProductAddProps } from "../utils/api";

const CartList = () => {
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <section className="h-[400px] w-[65%] overflow-auto bg-amber-50 p-4 text-center">
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
