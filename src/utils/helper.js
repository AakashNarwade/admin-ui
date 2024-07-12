export const handleSelectAll = (users, setSelectedAll, setUsers) => {
  const selectedAll = users.every((user) => user.checked);
  const newUsers = users.map((user) => ({ ...user, checked: !selectedAll }));
  setUsers(newUsers);
  setSelectedAll(!selectedAll);
};

export const handleSelect = (users, setUsers, index) => {
  const newUsers = [...users];
  newUsers[index].checked = !newUsers[index].checked;
  setUsers(newUsers);
};

export const handleDeleteAll = (users, setUsers) => {
  const newUsers = users.filter((user) => !user.checked);
  setUsers(newUsers);
};

export const handleEdit = (users, setEditValue, index) => {
  setEditValue(users[index]);
};

export const updateUser = (users, setUsers, index, editValue, setEditValue) => {
  const newUsers = [...users];
  newUsers[index] = editValue;
  setUsers(newUsers);
  setEditValue({});
};

export const deleteUser = (users, setUsers, id) => {
  const filteredUsers = users.filter((user) => user.id !== id);
  setUsers(filteredUsers);
};

export const searchUsers = (usersListTemp, searchQuery, setUsers) => {
  const searchedValue = usersListTemp.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setUsers(searchedValue);
};
