import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import usePopularMovies from "../customhooks/usePopularMovies";
import useTrendingMovies from "../customhooks/useTrendingMovies";
import useUpcomingMovies from "../customhooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useTrendingMovies();
  usePopularMovies();
  useNowPlayingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <Maincontainer />

          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
