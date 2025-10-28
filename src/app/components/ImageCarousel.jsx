"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ImageCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    "/card-image.jpg",
    "/card-image.jpg",
    "/card-image.jpg",
    "/card-image.jpg",
  ];

  return (
    <div className="custom-slider">
      {/* Main Carousel */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Thumbs]}
        navigation
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              width={800}
              height={500}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mt-4 w-[500px]"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Thumb ${i}`}
              width={100}
              height={100}
              className="w-auto h-[100px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-blue-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
