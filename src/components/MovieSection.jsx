import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieSection = ({ title, movies }) => {
  if (!movies) return;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller laptops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-3 py-2 mx-5">
      <div className=" text-white flex items-center justify-between pb-3">
        <h1 className="text-sm sm:text-2xl capitalize font-bold">{title}</h1>
        {/* <span className="text-sm sm:text-xl  sm:pl-10">{"More >"}</span> */}
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex items-center justify-start overflow-x-scroll "
      >
        {movies?.map((item) => {
          if (!item) return;
          return <MovieCard key={item.id} moviesItem={item} />;
        })}
      </div>
    </div>
  );
};

export default MovieSection;
