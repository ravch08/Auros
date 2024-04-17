import { useQuery } from "@tanstack/react-query";

import ProductItem from "../features/ProductItem";
import SectionHeading from "../features/SectionHeading";

import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../store/CartSlice";
import { ProductAddProps, ProductsProps, getAllProducts } from "../utils/api";

const TrendingProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const trendingProducts = data?.filter((product: ProductsProps) =>
    product.tags.includes("new"),
  );

  const dispatch = useDispatch();

  return (
    <section aria-labelledby="Trending Products">
      <div className="container">
        <SectionHeading
          key="Trending"
          heading="Trending this week"
          subHeading="Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights."
        />
        <div className="flex flex-wrap items-center justify-around gap-4">
          {isLoading ? <h2>Loading...</h2> : null}
          {isError ? <h2>{error.message}</h2> : null}
          {trendingProducts?.map((item: ProductAddProps) => (
            <ProductItem
              key={item.id}
              tags={item.tags}
              price={item.price}
              title={item.title}
              discount={item.discount}
              imgSrc11={item.imgSrc11}
              imgSrc12={item.imgSrc12}
              priceCrossed={item.priceCrossed}
              addCart={() => dispatch(addToCart(item))}
              addWishlist={() => dispatch(addToWishlist(item))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
