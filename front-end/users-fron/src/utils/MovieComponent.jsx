import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteMovie } from "../apiData/MoviesApiData";

const MovieComponent = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((user) => user.login);
  const [memberWatchMovies, setMemberWatchMovies] = useState([]);
  const getAllMembersInReducer = useSelector((movie) => movie.members);
  const getAllSubInReducer = useSelector((movie) => movie.subscriptions);

  const findMemberWatched = () => {
    if (movie?._id != undefined) {
      const subscription = getAllSubInReducer.filter((sub) =>
        sub.movies.find((mov) => mov.movieId === movie._id)
      );
      if (subscription.length > 0) {
        const member = subscription.map((sub) => {
          const findMember = getAllMembersInReducer.find(
            (mem) => mem._id === sub.memberId
          );
          if (findMember) {
            const obj = { ...findMember };
            obj.date = subscription[0].movies.find(
              (mov) => mov.movieId === movie._id
            );
            return obj;
          }
        });

        setMemberWatchMovies(member);
      }
    }
  };
  useEffect(() => {
    findMemberWatched();
  }, [movie]);
  return (
    <>
      {userLogin.permissions.viewMovies ? (
        <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] p-3 border border-stone-300 rounded-lg bg-slate-200 text-black bg-opacity-60  shadow-lg shadow-white mb-6 text-center hover:bg-red-500 hover:text-white duration-500 ">
          <div className="flex items-center flex-col" key={movie?._id}>
            <img className="w-56 h-56 object-contain" src={movie?.image} alt={movie?.name} />
            <h4> {movie?.name}</h4>
            <p> {movie?.premiered}</p>
            <div className="flex ">
              <ul className="w-full justify-center flex flex-wrap">
                {movie?.genres.map((genre, i) => (
                  <li className="mx-1 text-center " key={i}>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-16 flex justify-center  items-center">
              {userLogin.permissions.updateMovies && (
                <button
                  className="mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3"
                  onClick={() =>
                    navigate("/main_page/edit_movie/" + movie?._id)
                  }
                >
                  Edit
                </button>
              )}
              {userLogin.permissions.deleteMovies && (
                <button
                  className="mx-2 border-2 border-black bg-red-600 p-2 rounded-lg hover:bg-red-400 duration-500 hover:border-blue-400 hover:p-3"
                  onClick={() => deleteMovie(movie?._id, dispatch)}
                >
                  Delete
                </button>
              )}
            </div>
            {memberWatchMovies.length > 0 && memberWatchMovies[0] && (
              <div>
                <h3>Subscriptions watched</h3>
                <ul>
                  {memberWatchMovies.map((mem, i) => {
                    if (mem) {
                      return (
                        <li key={i}>
                          <Link
                            className="underline underline-offset-1 text-blue-800 hover:text-blue-500 duration-300"
                            to={`/main_page/selected_sub/${mem._id}`}
                            key={mem._id}
                          >
                            {" "}
                            {mem?.name}{" "}
                          </Link>{" "}
                          , {mem?.date.date}{" "}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1 className=" text-4xl font-bold text-red-800 ">
          You are not authorized
        </h1>
      )}
    </>
  );
};

export default MovieComponent;
