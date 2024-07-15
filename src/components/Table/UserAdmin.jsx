import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import SearchSection from "../Search/SearchSection.jsx";
import UserTable from "./UserTable.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {
  handleSelectAll,
  handleSelect,
  handleDeleteAll,
  handleEdit,
  updateUser,
  deleteUser,
  searchUsers,
} from "../../utils/helper.js";
import useFetch from "../../hooks/useFetch.js";

const UserAdmin = () => {
  const [selectedAll, setSelectedAll] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const { users, usersListTemp, getData, setUsers } = useFetch();
  console.log(users);

  useEffect(() => {
    getData(page);
  }, [searchQuery, page]);

  // const onSearch = (e) => {
  //   e.preventDefault();
  //   searchUsers(usersListTemp, searchQuery, setUsers);
  // };

  const pageCount = Math.ceil(usersListTemp.length / 10);

  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SearchSection
          handleSearchQuery={setSearchQuery}
          searchUsers={(e) =>
            searchUsers(usersListTemp, searchQuery, setUsers, e)
          }
          // onSearch={onSearch}
        />
        <UserTable
          users={users}
          editValue={editValue}
          setEditValue={setEditValue}
          handleSelectAll={() =>
            handleSelectAll(users, setSelectedAll, setUsers)
          }
          handleSelect={(index) => handleSelect(users, setUsers, index)}
          handleEdit={(index) => handleEdit(users, setEditValue, index)}
          deleteHandler={(id) => deleteUser(users, setUsers, id)}
          updateUser={() =>
            updateUser(
              users,
              setUsers,
              users.findIndex((user) => user.id === editValue.id),
              editValue,
              setEditValue
            )
          }
        />
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <button
            className="px-4 py-2 rounded-lg bg-black font-medium text-white mb-4 sm:mb-0"
            onClick={() => handleDeleteAll(users, setUsers)}
          >
            Delete Selected
          </button>
          <Pagination page={page} setPage={setPage} pageCount={pageCount} />
        </div>
      </div>
    </>
  );
};

export default UserAdmin;
