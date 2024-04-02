import SectionHeading from "../features/SectionHeading";

const TrendingProducts = () => {
  return (
    <section aria-labelledby="Trending Products">
      <div className="container">
        <SectionHeading
          heading="Trending this week"
          subHeading="Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights."
        />
      </div>
    </section>
  );
};

export default TrendingProducts;
