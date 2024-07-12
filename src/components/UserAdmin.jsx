import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import SearchSection from "./SearchSection.jsx";
import UserTable from "./UserTable.jsx";
import Pagination from "./Pagination.jsx";
import {
  handleSelectAll,
  handleSelect,
  handleDeleteAll,
  handleEdit,
  updateUser,
  deleteUser,
  searchUsers,
} from "../utils/helper";

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedAll, setSelectedAll] = useState(false);
  const [editValue, setEditValue] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [usersListTemp, setUsersListTemp] = useState([]);
  const [page, setPage] = useState(0);
  const API_URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const getData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data.slice(page, page + 10));
    setUsersListTemp(data);
  };

  useEffect(() => {
    getData();
  }, [searchQuery, page]);

  const onSearch = (e) => {
    e.preventDefault();
    searchUsers(usersListTemp, searchQuery, setUsers);
  };

  const pageCount = Math.ceil(usersListTemp.length / 10);

  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SearchSection handleSearchQuery={setSearchQuery} onSearch={onSearch} />
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
