import { useState } from "react";

function useFetch() {
  const [users, setUsers] = useState([]);
  const [usersListTemp, setUsersListTemp] = useState([]);
  const API_URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const getData = async (page) => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setUsers(data.slice(page, page + 10));
    setUsersListTemp(data);
  };

  return {
    users,
    usersListTemp,
    getData,
    setUsers,
  };
}

export default useFetch;
