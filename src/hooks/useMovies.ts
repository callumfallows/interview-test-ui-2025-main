import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import movieData from "../mdb_5000_movies.json";
import MovieDetails from "../types";

export const ITEMS_PER_PAGE_OPTIONS = [20, 50, 100, 200];

export const filterMoviesBySearch = (movies: MovieDetails[], searchTerm: string) => {
  return movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
};

export const sortMovies = (movies: MovieDetails[], sortBy: string) => {
  return movies.sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "release_date")
      return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
    return b.vote_average - a.vote_average;
  });
};

export function useMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_OPTIONS[3]);

  const movies: MovieDetails[] = movieData as MovieDetails[];

  const sortOptions = [
    { key: "title", text: "Title", value: "title" },
    { key: "release_date", text: "Release Date", value: "release_date" },
    { key: "vote_average", text: "Rating", value: "vote_average" }
  ];

  const filterAndSortMovies = () => {
    const filteredMovies = filterMoviesBySearch(movies, searchTerm);
    return sortMovies(filteredMovies, sortBy);
  };

  const paginateMovies = (filteredMovies: MovieDetails[]) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredMovies.slice(startIndex, startIndex + itemsPerPage);
  };

  const filteredMovies = filterAndSortMovies();
  const paginatedMovies = paginateMovies(filteredMovies);
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const pageRange = 5;
  const startPage = Math.max(1, currentPage - pageRange);
  const endPage = Math.min(totalPages, currentPage + pageRange);
  const debouncedSetSearchTerm = useCallback(debounce(setSearchTerm, 80), [
    searchTerm,
    setSearchTerm
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return {
    currentPage,
    setCurrentPage,
    searchTerm,
    setSearchTerm: debouncedSetSearchTerm,
    sortBy,
    setSortBy,
    itemsPerPage,
    setItemsPerPage,
    sortOptions,
    paginatedMovies,
    totalPages,
    itemsPerPageOptions: ITEMS_PER_PAGE_OPTIONS,
    filteredMovies,
    startPage,
    endPage
  };
}
