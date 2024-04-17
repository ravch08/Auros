import { CartCheckout, CartList, PageBanner, banner02 } from "../utils/helper";

const Cart = () => {
  return (
    <main>
      <PageBanner bannerImg={banner02} />
      <div className="container">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <CartList />
          <CartCheckout />
        </div>
      </div>
    </main>
  );
};

export default Cart;
