import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

import { banner01, banner02 } from "../utils/helper";

const Banner = () => {
  return (
    <section aria-labelledby="Banner" className="py-0">
      <Swiper
        loop={true}
        speed={500}
        effect={"fade"}
        spaceBetween={30}
        grabCursor={true}
        navigation={true}
        slidesPerView={1}
        centeredSlides={true}
        modules={[EffectFade]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <SwiperSlide>
          <div className="relative w-full">
            <img src={banner01} alt="banner" />
            <div className="absolute left-[16%] top-[25%] text-center">
              <h1 className="text-9xl font-extrabold uppercase">Rails</h1>
              <p className="py-4 tracking-widest">
                deisgned by <span className="font-extrabold">Nicolash</span>
              </p>
              <hr className="mx-auto my-4 h-1 w-[25%] bg-amber-600" />
              <p className="mb-12 text-xl font-extrabold">$225.00</p>
              <Link to="contact" className="border-2 border-black px-16 py-4">
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <img src={banner02} alt="banner" />
            <div className="absolute left-[16%] top-[25%] text-center">
              <h1 className="text-9xl font-extrabold uppercase">Disho</h1>
              <p className="py-4 tracking-widest">
                deisgned by <span className="font-extrabold">Nicolash</span>
              </p>
              <hr className="mx-auto my-4 h-1 w-[25%] bg-amber-600" />
              <p className="mb-12 text-xl font-extrabold">$225.00</p>
              <Link to="contact" className="border-2 border-black px-16 py-4">
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
