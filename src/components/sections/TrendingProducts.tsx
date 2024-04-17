import { useQuery } from "@tanstack/react-query";

import ProductItem from "../features/ProductItem";
import SectionHeading from "../features/SectionHeading";

import { ProductsProps, getTrendingProducts } from "../utils/api";

const TrendingProducts = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getTrendingProducts,
  });

  return (
    <section aria-labelledby="Trending Products">
      <div className="container">
        <SectionHeading
          key="Trending"
          heading="Trending this week"
          subHeading="Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights."
        />
        <div className="mt-16 flex flex-wrap items-center justify-around gap-4">
          {isLoading ? <h2>Loading...</h2> : null}
          {isError ? <h2>{error.message}</h2> : null}
          {data?.map((item: ProductsProps) => (
            <ProductItem
              key={item.id}
              tags={item.tags}
              price={item.price}
              title={item.title}
              discount={item.discount}
              imgSrc11={item.imgSrc11}
              imgSrc12={item.imgSrc12}
              priceCrossed={item.priceCrossed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
