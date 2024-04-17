import { ProductAddProps } from "../utils/api";

const CartListItem = (props: ProductAddProps) => {
  const {
    title,
    imgSrc11,
    price,
    priceCrossed,
    quantity,
    deleteCart,
    incrementQty,
    decrementQty,
  } = props;

  return (
    <div className="mb-4 flex items-center justify-between gap-2 border-b border-slate-200 py-4">
      <div className="flex items-center gap-4">
        <figure className="mr-4 w-28">
          <img src={imgSrc11} alt={title} />
        </figure>

        <div className="flex w-32 flex-col items-start gap-2">
          <h3 className="text-sm">{title}</h3>
          <div className="flex items-center gap-3">
            {priceCrossed ? (
              <span className="text-sm text-gray-400 line-through">
                ${priceCrossed}
              </span>
            ) : null}
            <span className="text-sm text-black">${price}</span>
          </div>
        </div>
      </div>

      <div className="flex">
        <button className="bg-slate-400 px-2" onClick={decrementQty}>
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <input
          type="text"
          value={quantity}
          id="product-count"
          name="product-count"
          onChange={() => {}}
          className="w-12 rounded-sm bg-gray-200 p-2 text-center"
        />

        <button className="bg-slate-400 px-2" onClick={incrementQty}>
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <span>
        <strong>${price * quantity}</strong>
      </span>

      <button className="bg-slate-100 px-2" onClick={deleteCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartListItem;
