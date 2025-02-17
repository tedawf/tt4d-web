type UsePaginationProps = {
  currentPage: number;
  totalPages: number;
  paginationItemsToDisplay: number;
};

type UsePaginationReturn = {
  pages: number[];
  showLeftEllipsis: boolean;
  showRightEllipsis: boolean;
};

export function usePagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay,
}: UsePaginationProps): UsePaginationReturn {
  function calculatePaginationRange(): number[] {
    // If total pages is less than or equal to items to display, show all pages
    if (totalPages <= paginationItemsToDisplay) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfDisplay = Math.floor((paginationItemsToDisplay - 1) / 2);
    
    // Calculate initial range around current page
    let start = currentPage - halfDisplay;
    let end = currentPage + halfDisplay;

    // Adjust range if it goes beyond boundaries
    if (start < 1) {
      end = Math.min(paginationItemsToDisplay, totalPages);
      start = 1;
    }

    if (end > totalPages) {
      start = Math.max(1, totalPages - paginationItemsToDisplay + 1);
      end = totalPages;
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  const pages = calculatePaginationRange();

  // Show ellipsis only if there are hidden pages
  const showLeftEllipsis = pages[0] > 1;
  const showRightEllipsis = pages[pages.length - 1] < totalPages;

  return {
    pages,
    showLeftEllipsis,
    showRightEllipsis,
  };
}