import { useSelector } from "react-redux";
import CartListItem from "../features/CartListItem";
import { CartProps } from "../utils/api";

const CartList = () => {
  const { cart } = useSelector((store) => store.cart);

  return (
    <section className="h-[400px] w-[65%] overflow-auto bg-amber-50 p-4 text-center">
      {cart?.length === 0 ? <h2>Add items to the Cart!</h2> : null}
      {cart?.length > 0
        ? cart?.map((item: CartProps) => (
            <CartListItem
              key={item.id}
              price={item.price}
              title={item.title}
              quantity={item.quantity}
              imgSrc11={item.imgSrc11}
              priceCrossed={item.priceCrossed}
            />
          ))
        : null}
    </section>
  );
};

export default CartList;
