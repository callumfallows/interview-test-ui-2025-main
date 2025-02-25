import React from "react";
import { MovieDropDown } from "./dropdown";

interface FiltersProps {
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  itemsPerPageOptions: number[];
  sortOptions: Array<{
    key: string;
    value: string;
    text: string;
  }>;
}

export const MovieFilters = React.memo(function MovieFilters({
  itemsPerPage,
  itemsPerPageOptions,
  sortOptions,
  setItemsPerPage,
  sortBy,
  setSortBy
}: FiltersProps) {
  const mappedItemsPerPage = itemsPerPageOptions.map(option => ({
    key: option,
    value: option,
    text: option.toString()
  }));
  const handleItemsPerPageChange = (value: number | string) => {
    setItemsPerPage(Number(value));
  };

  const handleSortByChange = (value: number | string) => {
    setSortBy(value.toString());
  };
  return (
    <>
      <MovieDropDown
        label="Items per page"
        options={mappedItemsPerPage}
        selectedValue={itemsPerPage}
        onChange={handleItemsPerPageChange}
      />
      <MovieDropDown
        label="Sort by"
        options={sortOptions}
        selectedValue={sortBy}
        onChange={handleSortByChange}
      />
    </>
  );
});
