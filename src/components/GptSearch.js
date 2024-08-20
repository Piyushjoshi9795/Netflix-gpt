import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggest from "./GptMovieSuggest";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_URL} />
      </div>
      <div className=" ">
        <GptSearchBar />
        <GptMovieSuggest />
      </div>
    </>
  );
};

export default GptSearch;
