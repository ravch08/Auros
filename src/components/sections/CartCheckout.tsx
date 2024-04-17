const CartCheckout = () => {
  return (
    <section className="w-[30%] border border-slate-600 bg-slate-50 p-3">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p>Total Items: </p>
          <span>$86.25</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Shipping Cost: </p>
          <span>$86.25</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Tax: </p>
          <span>$86.25</span>
        </div>
        <div className="flex items-center justify-between">
          <p>Total Amount: </p>
          <span>$86.25</span>
        </div>
      </div>
    </section>
  );
};

export default CartCheckout;
