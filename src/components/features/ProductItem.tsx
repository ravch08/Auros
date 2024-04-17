import { ProductsProps } from "../utils/api";

const ProductItem = (props: ProductsProps) => {
  const { title, tags, imgSrc11, imgSrc12, discount, price, priceCrossed } =
    props;

  return (
    <div className="mb-6 w-[80%] sm:w-[45%] md:w-[30%] xl:w-[22%]">
      <figure className="group relative overflow-hidden rounded-md">
        <img
          src={imgSrc11}
          alt={title}
          className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
        />
        <img
          src={imgSrc12}
          alt={title}
          className="absolute left-0 top-0 -z-10"
        />

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

        <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-around gap-3 transition-all duration-300 ease-in-out group-hover:bottom-8">
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out hover:bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out hover:bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out hover:bg-primary">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition-colors duration-300 ease-in-out hover:bg-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
          </div>
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
          <span className="text-sm text-black">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
