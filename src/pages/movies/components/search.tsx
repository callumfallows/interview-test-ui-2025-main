import { Input } from "../../../components/ui/input";

interface MovieSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filteredCount: number;
  totalCount: number;
}

const ResultsCounter = ({ total, filtered }: { total: number; filtered: number }) => (
  <div className="w-full text-md text-gray-600">
    Showing {filtered} out of {total} movies
  </div>
);

export function MovieSearch({
  searchTerm,
  setSearchTerm,
  filteredCount,
  totalCount
}: MovieSearchProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <Input
        className="md:text-lg p-8"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <ResultsCounter total={totalCount} filtered={filteredCount} />
    </div>
  );
}
