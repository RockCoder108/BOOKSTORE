import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import list from '../data/list.json'; // ✅ Correct if in src/data/list.json
import Slider from "react-slick";
import Cards from "./Cards"; // Adjust path based on where Cards.jsx is located


export default function Freebook() {
  const filterBooks = list.filter((book) => book.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full mx-auto md:px-20">
        <div>
          <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
          <p>
            Explore a curated selection of free courses designed to spark your
            curiosity and deepen your knowledge across various genres.
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterBooks.map((book) => (
              <Cards item={book} key={book.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
