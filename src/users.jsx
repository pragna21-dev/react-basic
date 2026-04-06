import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [userName, setName] = useState("");
  const addUser = ()=>{
    setUsers([...users,userName]);
    setName("");
  }
  const deleteUser = (index)=>{
    //users.splice(index,1);
    const newUsers=users.filter((val,i)=>i!=index)
    console.log(newUsers);
     setUsers(newUsers);
    
  }
  return (
    <>
      <h1>Users</h1>
      <div style={{display:"flex", gap:"10px"}}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={addUser}>Add Users</button>
      </div>
      Hello, {userName},
      {users.map((item,index)=>(
        <li key={index}>{item}
        <button onClick={()=>deleteUser(index)}>Delet</button>
        </li>
      )

      )}
    </>
  );
}
export default Users;
