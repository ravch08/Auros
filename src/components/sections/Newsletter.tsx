import { SectionHeading } from "../utils/helper";

const Newsletter = () => {
  return (
    <section
      aria-labelledby="Newsletter"
      className="bg-mid-banner bg-cover bg-fixed bg-center bg-no-repeat"
    >
      <div className="container text-center">
        <SectionHeading
          heading="Newsletter"
          subHeading="Stay Updated on all that's new add noteworthy"
        />

        <form className="mt-12">
          <input
            type="email"
            placeholder="Your email..."
            className="mr-2 w-[40%] rounded-md bg-white p-3 outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-black px-8 py-3 uppercase text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
