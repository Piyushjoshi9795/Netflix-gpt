import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowmovies = useSelector(store=> store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    if(!nowmovies)
      getNowPlayingMovies();
  }, []);

  // console.log("Action:", addNowPlayingMovies);
};

export default useNowPlayingMovies;
