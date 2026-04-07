import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setName] = useState("");
  const [userObj, setUserObj] = useState({ name: "", age: "" });
  const [userObjArray, setUserObjarray] = useState([]);
  const [hobby, setHobby] = useState([]);

  const addUser = () => {
    setUsers([...users, userName]);
    setName("");
  };
  const addUserArray = () => {
    setUserObjarray([...userObjArray, userObj]);
    setUserObj({ name: "", age: "" });
  };

  const deleteUser = (index) => {
    const newUsers = users.filter((val, i) => i != index);
    console.log(newUsers);
    setUsers(newUsers);
  };
  const handleHobby = (event) => {
     console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setHobby([...hobby, event.target.value]);
    } else {
      setHobby([
        hobby.filter((item) =>item != event.target.value)
      ]);
    }
    console.log(hobby);
    
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
      <hr />
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
      <p>User object array List</p>
      <hr />
      <ul>
        {userObjArray.map((obj, index) => (
          <li key={index}>
            {obj.name} - {obj.age}
          </li>
        ))}
      </ul>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <input
            type="checkbox"
            id="reading"
            value="reading"
            onChange={handleHobby}
          />
          <label htmlFor="reading">Reading</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="drawing"
            value="drawing"
            onChange={handleHobby}
          />
          <label htmlFor="drawing">Drawing</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="surffing"
            value="surffing"
            onChange={handleHobby}
          />
          <label htmlFor="surffing">Surffing</label>
        </li>
      </ul>
      <h2>Hobbies:</h2>
     {hobby.join(",")}
    </>
  );
}
export default Users;
