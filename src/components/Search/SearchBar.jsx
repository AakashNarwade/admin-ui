/* eslint-disable react/prop-types */
// import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ handleSearchQuery, onSearch }) => {
  return (
    <form onSubmit={(e) => onSearch(e)}>
      <div className="text-center my-5 justify-center flex items-center gap-2  py-2  ">
        <input
          className="w-[80%]  border border-black rounded-md placeholder:text-slate-400 outline-none   p-2"
          type="text"
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder="Search by name, email, role..."
        />

        <button className="cursor-pointer search-icon" type="submit">
          <IoSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
