import { useState } from "react";

export function usePage(initial = "home") {
  const [page, setPage] = useState(initial);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return { page, changePage };
}