import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
  }, []); 

  return (
    <>
      <h2>User List</h2>
      <table border={1}>
        {users.map((user) => (
          <tr key={user.id}><td>{user.name}</td></tr> 
        ))}
      </table>
    </>
  );
}

export default Users;
