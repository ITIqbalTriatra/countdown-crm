import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Countdown from "./Countdown";

const CarouselCountdown = () => {
  const countdowns = [
    {
      title: "Countdown Go Live CRM PSR",
      targetDate: new Date("2025-03-20T23:59:59").getTime(),
    },
    {
      title: "Countdown Go Live CRM UNIT",
      targetDate: new Date("2025-04-07T23:59:59").getTime(),
    },
  ];

  // Daftar warna latar belakang
  const bgColors = ["bg-gradient-to-br from-blue-900 to-purple-900", "bg-gradient-to-br from-green-900 to-teal-900"];

  // State untuk melacak indeks slide aktif
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    arrows: true,
    focusOnSelect: false,
    adaptiveHeight: false,
    beforeChange: (current, next) => setActiveSlide(next), // Update indeks slide aktif
  };

  return (
    <div className={`w-full h-screen overflow-hidden transition-all duration-500 ease-in-out ${bgColors[activeSlide]}`}>
      <Slider {...settings}>
        {countdowns.map((countdown, index) => (
          <div key={index} className="outline-none h-screen flex items-center justify-center">
            <Countdown title={countdown.title} targetDate={countdown.targetDate} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCountdown;
