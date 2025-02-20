import { usePagination } from "@/hooks/usePagination";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";

interface DrawPaginationProps {
  currentPage: number;
  totalPages: number;
  searchTerm?: string;
  paginationItemsToDisplay?: number;
}

export function DrawPagination({
  currentPage,
  totalPages,
  searchTerm,
  paginationItemsToDisplay = 5,
}: DrawPaginationProps) {
  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (pageNumber > 1) params.set("page", pageNumber.toString());
    if (searchTerm) params.set("search", searchTerm);
    return `/draws?${params.toString()}`;
  };

  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  });

  return (
    <Pagination>
      <PaginationContent>
        {/* First page button */}
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={createPageURL(1)}
            aria-label="Go to first page"
            aria-disabled={currentPage === 1}
          >
            <ChevronFirst size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {/* Previous page button */}
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={createPageURL(currentPage - 1)}
            aria-label="Go to previous page"
            aria-disabled={currentPage === 1}
          >
            <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {/* Left ellipsis (...) */}
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Page number links */}
        {pages.map((page: number) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={createPageURL(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Right ellipsis (...) */}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={
              currentPage === totalPages ? "" : createPageURL(currentPage + 1)
            }
            aria-label="Go to next page"
            aria-disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>

        {/* Last page button */}
        <PaginationItem>
          <PaginationLink
            className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
            href={currentPage === totalPages ? "" : createPageURL(totalPages)}
            aria-label="Go to last page"
            aria-disabled={currentPage === totalPages}
          >
            <ChevronLast size={16} strokeWidth={2} aria-hidden="true" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
