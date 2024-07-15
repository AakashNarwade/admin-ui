/* eslint-disable react/prop-types */
// TableRow.js
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TableRow = ({
  user,
  index,
  editValue,
  setEditValue,
  handleSelect,
  handleEdit,
  deleteHandler,
  updateUser,
}) => {
  const isEditing = editValue.id === user.id;

  return (
    <tr key={user.id}>
      <td className="border border-gray-300 px-4 py-2 text-left">
        <input
          type="checkbox"
          checked={user.checked}
          onChange={() => handleSelect(index)}
          className="form-checkbox"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2 text-left">
        {isEditing ? (
          <div className="flex flex-col w-[90%] gap-2 sm:flex-row sm:items-center">
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={user.name}
              onChange={(e) =>
                setEditValue({ ...editValue, name: e.target.value })
              }
            />
            <button
              className="px-4 py-1 bg-black text-white rounded-md mt-2 sm:mt-0 sm:ml-2"
              onClick={() => updateUser()}
            >
              Update
            </button>
          </div>
        ) : (
          user.name
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-left">
        {isEditing ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={user.email}
              onChange={(e) =>
                setEditValue({ ...editValue, email: e.target.value })
              }
            />
            <button
              className="px-4 py-1 bg-black text-white rounded-md mt-2 sm:mt-0 sm:ml-2"
              onClick={() => updateUser()}
            >
              Update
            </button>
          </div>
        ) : (
          user.email
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-left">
        {isEditing ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              type="text"
              className="border rounded-md px-2 py-1"
              defaultValue={user.role}
              onChange={(e) =>
                setEditValue({ ...editValue, role: e.target.value })
              }
            />
            <button
              className="px-4 py-1 bg-black text-white rounded-md mt-2 sm:mt-0 sm:ml-2"
              onClick={() => updateUser()}
            >
              Update
            </button>
          </div>
        ) : (
          user.role
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-left">
        <div className="flex gap-2 items-center">
          <FaEdit
            onClick={() => handleEdit(index)}
            className="cursor-pointer"
          />
          <MdDelete
            onClick={() => deleteHandler(user.id)}
            size={20}
            className="cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
