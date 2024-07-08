// import React from "react";

const SearchBar = () => {
  return (
    <div className="text-center  py-2 ">
      <input
        className="w-[80%]  border border-black rounded-md placeholder:text-slate-400 outline-none   p-2"
        type="text"
        // defaultValue={searchQuery}
        // onChange={(e) => handleSearchQuery(e.target.value)}
        placeholder="Search by name, email, role..."
      />
    </div>
  );
};

export default SearchBar;
