import { useMemo } from "react";
import { StickyNav } from "../../components/common/stickynav";
import { ITEMS_PER_PAGE_OPTIONS, useMovies } from "../../hooks/useMovies";
import { MovieFilters } from "./components/filters";
import { MoviesPagination } from "./components/pagination";
import { MovieResults } from "./components/results";
import { MovieSearch } from "./components/search";

export function Movies() {
  const {
    searchTerm,
    setSearchTerm,
    itemsPerPage,
    setItemsPerPage,
    sortOptions,
    sortBy,
    setCurrentPage,
    setSortBy,
    paginatedMovies,
    startPage,
    endPage,
    currentPage,
    filteredMovies
  } = useMovies();

  // Memoize the paginatedMovies array
  // This will prevent unnecessary re-renders when the paginatedMovies array changes
  // This is because the paginatedMovies array is only used in the MovieResults component
  const memoizedPaginatedMovies = useMemo(() => paginatedMovies, [paginatedMovies]);

  return (
    <div className={`flex flex-col gap-4`}>
      <StickyNav>
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 gap-10 `}>
          <div className={`flex justify-between items-end mb-4`}>
            <div className="flex w-2/3 flex-col gap-4">
              <MovieSearch
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filteredCount={paginatedMovies.length}
                totalCount={filteredMovies.length}
              />
            </div>
            <div className="flex w-1/3 justify-end gap-4">
              <MovieFilters
                itemsPerPage={itemsPerPage}
                itemsPerPageOptions={ITEMS_PER_PAGE_OPTIONS}
                sortOptions={sortOptions}
                setItemsPerPage={setItemsPerPage}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </div>
        </div>
      </StickyNav>
      <div className="py-40 pt-8">
        <MovieResults currentMovies={memoizedPaginatedMovies} itemsPerPage={itemsPerPage} />
      </div>
      <div className="relative w-full">
        <div className="fixed bottom-0 left-0 w-full bg-white">
          <MoviesPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={filteredMovies.length}
            startPage={startPage}
            endPage={endPage}
          />
        </div>
      </div>
    </div>
  );
}
