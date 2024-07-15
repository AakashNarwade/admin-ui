/* eslint-disable react/prop-types */

const TableHeader = ({ areAllChecked, handleSelectAll }) => {
  return (
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2 text-left">
          <input
            type="checkbox"
            checked={areAllChecked}
            onChange={handleSelectAll}
            className="form-checkbox"
          />
        </th>
        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
        <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
