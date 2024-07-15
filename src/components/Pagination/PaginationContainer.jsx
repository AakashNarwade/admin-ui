/* eslint-disable react/prop-types */
// import React from 'react';
import {
  GrChapterPrevious,
  GrChapterNext,
  GrCaretPrevious,
  GrCaretNext,
} from "react-icons/gr";
import PaginationButton from "./PaginationButton";
import PaginationNumberButton from "./PaginationNumberButton";

const PaginationContainer = ({ page, setPage, pageCount }) => {
  const pages = [...Array(pageCount).keys()];

  return (
    <div className="flex flex-wrap gap-2 justify-center items-center">
      <PaginationButton
        className="bg-black text-white border-white"
        disabled={page === 0}
        onClick={() => setPage(0)}
      >
        <GrChapterPrevious size={20} />
      </PaginationButton>
      <PaginationButton
        className="bg-black text-white border-white"
        disabled={page === 0}
        onClick={() => setPage((prev) => Math.max(prev - 10, 0))}
      >
        <GrCaretPrevious size={20} />
      </PaginationButton>
      {pages.map((p) => (
        <PaginationNumberButton
          key={p}
          page={p * 10}
          currentPage={page}
          onClick={(page) => setPage(page)}
        />
      ))}
      <PaginationButton
        className="bg-black text-white border-white"
        disabled={page >= (pageCount - 1) * 10}
        onClick={() =>
          setPage((prev) => Math.min(prev + 10, (pageCount - 1) * 10))
        }
      >
        <GrCaretNext size={20} />
      </PaginationButton>
      <PaginationButton
        className="bg-black text-white border-white"
        disabled={page >= (pageCount - 1) * 10}
        onClick={() => setPage((pageCount - 1) * 10)}
      >
        <GrChapterNext size={20} />
      </PaginationButton>
    </div>
  );
};

export default PaginationContainer;
