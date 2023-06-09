import { useCallback, useState } from "react";

const usePagination = (initialPage) => {
  const [page, setPage] = useState(initialPage);
  const handleChangePage = useCallback((_, page) => {
    setPage(page);
  }, []);
  return [page, handleChangePage];
};
export default usePagination;
