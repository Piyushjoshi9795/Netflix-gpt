import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useDispatch ,useSelector} from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingmovies = useSelector(store=> store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    if(!trendingmovies)
    getTrendingMovies();
  }, []);

  // console.log("Action:", addNowPlayingMovies);
};

export default useTrendingMovies;
