import { useQuery } from "@tanstack/react-query";

import ProductItem from "../features/ProductItem";
import SectionHeading from "../features/SectionHeading";

import { getAllProducts, ProductsProps } from "../utils/api";

const PopularProducts = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["popular products"],
    queryFn: getAllProducts,
  });

  return (
    <section aria-labelledby="Popular Products">
      <div className="container">
        <SectionHeading
          key="Popular"
          heading="Popular this week"
          subHeading="Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights."
        />

        <div className="mt-12 flex flex-wrap items-center justify-around gap-4">
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

export default PopularProducts;
