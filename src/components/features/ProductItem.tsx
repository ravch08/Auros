import { ProductsProps } from "../utils/api";

const ProductItem = (props: ProductsProps) => {
  const { title, tags, imgSrc11, imgSrc12, discount, price, priceCrossed } =
    props;

  return (
    <div className="mb-6 w-[80%] sm:w-[45%] md:w-[30%]">
      <figure className="relative overflow-hidden rounded-md">
        <img src={imgSrc11} alt={title} className="img-top" />
        <img src={imgSrc12} alt={title} className="img-bottom" />
        <div className="absolute left-4 top-3 flex flex-col items-start gap-2">
          {tags?.map((tag) => (
            <span className="text-xs uppercase" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute right-4 top-2 text-sm underline">
          -{discount}%
        </div>
      </figure>
      <div className="flex flex-col items-center justify-center gap-2 p-3">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center gap-3 ">
          {priceCrossed ? (
            <span className="text-sm text-gray-400 line-through">
              ${priceCrossed}
            </span>
          ) : null}
          <span className="text-sm text-black ">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
