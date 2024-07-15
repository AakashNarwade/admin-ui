// /* eslint-disable react/prop-types */
// import {
//   GrChapterPrevious,
//   GrChapterNext,
//   GrCaretPrevious,
//   GrCaretNext,
// } from "react-icons/gr";

// const Pagination = ({ page, setPage, pageCount }) => {
//   const pages = [...Array(pageCount).keys()];

//   return (
//     <div className="flex flex-wrap gap-2 justify-center items-center">
//       <button
//         className="px-3 py-2 rounded-lg bg-black text-white font-normal text-md border-white border-2"
//         disabled={page === 0}
//         onClick={() => setPage(0)}
//       >
//         <GrChapterPrevious size={20} />
//       </button>
//       <button
//         className="px-3 py-2 rounded-lg bg-black text-white font-normal text-md border-white border-2"
//         disabled={page === 0}
//         onClick={() => setPage((prev) => Math.max(prev - 10, 0))}
//       >
//         <GrCaretPrevious size={20} />
//       </button>
//       {pages.map((p) => (
//         <button
//           key={p}
//           className={`px-3 py-2 rounded-lg ${
//             p * 10 === page
              // ? "bg-black text-white"
//               : "bg-white text-black border border-gray-300"
//           } font-normal text-md`}
//           onClick={() => setPage(p * 10)}
//         >
//           {p + 1}
//         </button>
//       ))}
//       <button
//         className="px-3 py-2 rounded-lg bg-black text-white font-normal text-md border-white border-2"
//         disabled={page >= (pageCount - 1) * 10}
//         onClick={() =>
//           setPage((prev) => Math.min(prev + 10, (pageCount - 1) * 10))
//         }
//       >
//         <GrCaretNext size={20} />
//       </button>
//       <button
//         className="px-3 py-2 rounded-lg bg-black text-white font-normal text-md border-white border-2"
//         disabled={page >= (pageCount - 1) * 10}
//         onClick={() => setPage((pageCount - 1) * 10)}
//       >
//         <GrChapterNext size={20} />
//       </button>
//     </div>
//   );
// };

// export default Pagination;

import React from "react";
import PaginationContainer from "./PaginationContainer";

const Pagination = ({ page, setPage, pageCount }) => (
  <PaginationContainer page={page} setPage={setPage} pageCount={pageCount} />
);

export default Pagination;
