import AiSearchMovies from "../components/AiSearchMovies";
import GPTsearchBar from "../components/GPTsearchBar";

function GPTsearch() {
  return (
    <>
      <div>
        <div className="relative bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')] w-full h-full bg-cover bg-center ">
          <div className="h-[345px] flex items-center justify-center w-full">
            <GPTsearchBar />
          </div>
        </div>
        <AiSearchMovies />
      </div>
    </>
  );
}

export default GPTsearch;
