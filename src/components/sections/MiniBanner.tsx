import { MiniBannerChair, MiniBannerLightings } from "../utils/helper";

const MiniBanner = () => {
  return (
    <section aria-labelledby="Mini Banner">
      <div className="flex items-center justify-between">
        <figure className="relative w-[50%] overflow-hidden">
          <img
            src={MiniBannerChair}
            alt="chair"
            className="scale-100 transition-transform duration-500 ease-in-out hover:scale-125"
          />
          <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold uppercase text-white">
            Chairs
          </h2>
        </figure>
        <figure className="relative w-[50%] overflow-hidden">
          <img
            src={MiniBannerLightings}
            alt="lightings"
            className="scale-100 transition-transform duration-500 ease-in-out hover:scale-125"
          />
          <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold uppercase text-white">
            Lightings
          </h2>
        </figure>
      </div>
    </section>
  );
};

export default MiniBanner;
