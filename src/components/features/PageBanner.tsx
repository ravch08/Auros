const PageBanner = ({ bannerImg }: { bannerImg: string }) => {
  return (
    <section className="mb-24 h-96 w-full overflow-hidden pt-0">
      <img src={bannerImg} alt="banner" className="w-full  object-top" />
    </section>
  );
};

export default PageBanner;
