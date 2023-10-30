"use client";

import { fetchSearchResults } from "@/app/api/search";
import { setSearchQuery, setSearchResults } from "@/redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const searchQuery = useSelector((state: any) => state.comb.search.query);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    // Dispatch an action to set the search query in redux
    dispatch(setSearchQuery(searchQuery));

    // Make an API call to fetch search results
    const results = await fetchSearchResults(searchQuery);

    // Set search results in redux
    dispatch(setSearchResults(results));
  };
  return <div>SearchBar</div>;
}
