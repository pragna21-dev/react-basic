import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setName] = useState("");
  const [userObj, setUserObj] = useState({ name: "", age: "" });
  const [userObjArray, setUserObjarray] = useState([]);

  const addUser = () => {
    setUsers([...users, userName]);
    setName("");
  };
  const addUserArray = () => {
    setUserObjarray([...userObjArray, userObj]);
    setUserObj({ name: "", age: "" });
  };

  const deleteUser = (index) => {
    //users.splice(index,1);
    const newUsers = users.filter((val, i) => i != index);
    console.log(newUsers);
    setUsers(newUsers);
  };

  return (
    <>
      <h1>Users</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button onClick={addUser}>Add Users</button>
      </div>
      Hello, {userName},
      {users.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => deleteUser(index)}>Delet</button>
        </li>
      ))}
      <p>User Object</p>
      <input
        type="text"
        value={userObj.name}
        onChange={(e) => setUserObj({ ...userObj, name: e.target.value })}
      ></input>
     
      <input
        type="text"
        value={userObj.age}
        onChange={(e) => setUserObj({ ...userObj, age: e.target.value })}
      ></input>
      <button onClick={addUserArray}>Add User</button>
       <p>User obj array</p>
      <ul>
        {userObjArray.map((obj, index) => (
          <li key={index}>
            {obj.name} - {obj.age}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Users;
