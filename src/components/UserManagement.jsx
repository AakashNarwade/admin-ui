import { useEffect, useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const API_URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  const getData = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log("data", data);
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      <Header />
      <div className="mx-auto w-[80%]">
        <SearchBar />
        {users?.map((user) => (
          <h2 className="text-xl font-normal" key={user?.id}>
            {user?.name}
          </h2>
        ))}
      </div>
      {/* <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table> */}
    </div>
  );
};

export default UserManagement;
