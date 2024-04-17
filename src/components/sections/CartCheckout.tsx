import { useSelector } from "react-redux";

const CartCheckout = () => {
  const { totalPrice, totalCartQuantity } = useSelector((store) => store.cart);

  return (
    <section className="w-[30%] border border-slate-600 bg-slate-50 p-3">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p>Total Items: </p>
          <span>{totalCartQuantity && 1}</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping Cost: </p>
          <span>${totalPrice && 1}</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Tax: </p>
          <span>$86.25</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Total Amount: </p>
          <span>${totalPrice + 86.25}</span>
        </div>
      </div>
    </section>
  );
};

export default CartCheckout;
