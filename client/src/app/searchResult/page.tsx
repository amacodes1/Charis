"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const searchResults = useSelector((state: RootState) => state.search.results);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((result: any) => (
        <div key={result.id}>
          <p>{result.title}</p>
        </div>
      ))}
    </div>
  );
}
