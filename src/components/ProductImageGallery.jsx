import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ProductImageGallery = ({ images, productName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className="border rounded-lg mb-4 relative">
        <Swiper
          loop={images.length > 1 ? true : false}
          modules={[Navigation, Pagination, Thumbs]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                loading="lazy"
                alt={`${productName} - view ${index + 1}`}
                className="w-full max-h-96 object-contain p-4"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="opacity-40">
            <img
              src={img}
              loading="lazy"
              alt={`Thumbnail ${index + 1}`}
              className="w-full max-h-32 object-contain p-4 cursor-pointer border rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageGallery;
