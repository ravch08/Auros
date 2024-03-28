import {
  Banner,
  MiniBanner,
  Newsletter,
  PopularProducts,
  TrendingProducts,
} from "../utils/helper";

const Home = () => {
  return (
    <main>
      <Banner />
      <TrendingProducts />
      <MiniBanner />
      <PopularProducts />
      <Newsletter />
    </main>
  );
};

export default Home;
