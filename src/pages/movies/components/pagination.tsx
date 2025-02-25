import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "../../../components/ui/pagination";

interface MoviesPaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  startPage: number;
  endPage: number;
}

export function MoviesPagination({
  currentPage,
  setCurrentPage,
  totalPages,
  startPage,
  endPage
}: MoviesPaginationProps) {
  const currentPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  return (
    <Pagination className="w-full">
      <PaginationContent className="flex w-full flex-wrap justify-center p-4 gap-4">
        <PaginationItem>
          <PaginationPrevious
            className="text-lg"
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>
        {currentPages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              className="text-lg p-8 cursor-pointer"
              onClick={() => setCurrentPage(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
