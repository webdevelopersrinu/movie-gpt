import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../utils/constants";

function MovieCard({ moviesItem }) {
  const { id, poster_path, original_title } = moviesItem;
  if (!poster_path) return;
  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className="min-w-[150px] max-w-[150px] md:min-w-[250px] md:max-w-[250px] mx-2 md:mx-5 my-3  rounded-xl  relative group">
          <div>
            <div className="transition-transform duration-300 group-hover:scale-105  w-full ">
              <img
                src={IMG_BASE_URL + poster_path}
                alt={original_title}
                className="rounded-xl w-full group-hover:border-4 group-hover:border-white"
              />
            </div>
            <div className="absolute bottom-[-6px] py-3 pl-1 w-full  rounded-b-lg left-0 right-0 bg-white line-clamp-1 text-nowrap  text-black text-sm overflow-clip  group-hover:scale-105 text-center  hidden group-hover:block transition-opacity duration-400">
              {original_title}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
