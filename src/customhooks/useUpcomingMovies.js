
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch ,useSelector} from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingmovies = useSelector(store=> store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    if(!upcomingmovies)
    getUpcomingMovies();
  }, []);

  // console.log("Action:", addNowPlayingMovies);
};

export default useUpcomingMovies;
