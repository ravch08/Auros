import { useSelector } from "react-redux";
import { ProductAddProps } from "../../types/types";
import {
  PageBanner,
  ProductItem,
  SectionHeading,
  banner01,
} from "../utils/helper";

const Wishlist = () => {
  const { wishlist } = useSelector((store) => store.cart);

  return (
    <main>
      <PageBanner bannerImg={banner01} />
      <div className="container">
        <SectionHeading
          heading="Wishlist"
          subHeading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt iure eius provident neque perspiciatis deserunt cumque autem."
        />
        <div className="flex flex-wrap items-center justify-around gap-4">
          {wishlist?.length === 0 ? (
            <div className="mb-12 flex h-80 w-full items-center justify-center rounded-md bg-amber-100">
              <h2 className="text-xl ">No Products added to the Wishlist</h2>
            </div>
          ) : null}
          {wishlist?.length > 0
            ? wishlist?.map((item: ProductAddProps) => (
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
              ))
            : null}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
