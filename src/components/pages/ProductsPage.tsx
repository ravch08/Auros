import { banner04, PageBanner, SectionHeading } from "../utils/helper";

const ProductsPage = () => {
  return (
    <main>
      <PageBanner bannerImg={banner04} />
      <div className="container">
        <SectionHeading
          heading="All Products"
          subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />

        <div className="flex flex-wrap items-center justify-around gap-4"></div>
      </div>
    </main>
  );
};

export default ProductsPage;
