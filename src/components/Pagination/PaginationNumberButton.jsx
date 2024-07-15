/* eslint-disable react/prop-types */

const PaginationNumberButton = ({ page, currentPage, onClick }) => (
  <button
    className={`px-3 py-2 rounded-lg font-normal text-md ${
      currentPage === page
        ? "bg-black text-white"
        : "bg-white text-black border border-gray-300"
    }`}
    onClick={() => onClick(page)}
  >
    {page / 10 + 1}
  </button>
);

export default PaginationNumberButton;
