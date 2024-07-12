const SearchSection = ({ handleSearchQuery, onSearch }) => {
  return (
    <form
      onSubmit={onSearch}
      className="flex flex-col sm:flex-row gap-4 mb-4 py-6"
    >
      <input
        type="text"
        placeholder="Search by name, email, role..."
        onChange={(e) => handleSearchQuery(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchSection;
