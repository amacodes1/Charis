"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSearchResults } from "../redux/searchSlice";
// import axios from "axios";
import { axiosInstance } from "@/utils/axios";
import { useDebounce } from "use-debounce";

export default function Search() {
  const searchQuery = useSelector((state: any) => state.comb.search.query);
  const dispatch = useDispatch();
  const [debounce] = useDebounce(searchQuery, 500);

  const handleSearchInputChange = (event: any) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.get(`/search?query=${searchQuery}`);
      console.log("Request URL:", `/search?query=${searchQuery}`);

      const results = response.data;

      // Update the search query in the Redux store
      dispatch(setSearchQuery(searchQuery));
      // Update the search results in the Redux store
      dispatch(setSearchResults(results));
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex flex-row relative ltr ml-8 md:ml-8 lg:ml-2 items-center max-w-xs w-fit h-fit bg-black rounded-full cursor-pointer overflow-hidden">
        <svg
          className="search_icon h-6 py-1 px-1 pl-2 fill-stone-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
        >
          <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
        </svg>
        <input
          className="inputBox bg-transparent text-white outline-inherit border-0 w-40 py-2 pr-2 text-sm"
          placeholder="Search products"
          id="inputBox"
          type="text"
          value={debounce}
          onChange={handleSearchInputChange}
        />
      </div>
    </form>
  );
}
