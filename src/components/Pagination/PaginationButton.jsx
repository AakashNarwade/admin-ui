/* eslint-disable react/prop-types */
// import React from "react";

const PaginationButton = ({ onClick, disabled, children, className }) => (
  <button
    className={`px-3 py-2 rounded-lg font-normal text-md border-2 ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default PaginationButton;
