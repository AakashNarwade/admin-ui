/* eslint-disable react/prop-types */

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const UserTable = ({
  users,
  editValue,
  setEditValue,
  handleSelectAll,
  handleSelect,
  handleEdit,
  deleteHandler,
  updateUser,
}) => {
  const areAllChecked = users.length > 0 && users.every((user) => user.checked);
  return (
    <div className=" w-full">
      <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
        <TableHeader
          areAllChecked={areAllChecked}
          handleSelectAll={handleSelectAll}
        />

        <tbody>
          {users.map((user, index) => (
            <TableRow
              key={user.id}
              user={user}
              index={index}
              editValue={editValue}
              setEditValue={setEditValue}
              handleSelect={handleSelect}
              handleEdit={handleEdit}
              deleteHandler={deleteHandler}
              updateUser={updateUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
