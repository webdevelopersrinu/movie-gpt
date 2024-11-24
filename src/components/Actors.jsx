import { useSelector } from "react-redux";
import ActorsImg from "./ActorsImg";

function Actors() {
  const actors = useSelector((state) => state.moviePage.actors);
  if (!actors) return;
  return (
    <div className="py-3 px-3 bg-black">
      <h1 className="text-xl font-bold ml-5  my-3">Actors:</h1>
      <div className="flex flex-wrap items-center justify-end">
        {actors.map((actor) => {
          const { id } = actor;
          return <ActorsImg key={id} actor={actor} />;
        })}
      </div>
    </div>
  );
}

export default Actors;
