import './App.css';
import { addUser, deleteUser,updateUsername } from './features/users';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function App() { 
  const userList = useSelector((state)=> state.users.value)
  const [name, setname] = useState("")
  const [username, setusername] = useState("")
  const [newusername, setNewusername] = useState("")
  const dispatch = useDispatch()

   return (
    <div className="App">
      <div className='addUser'>
        <input type='text' placeholder='name' onChange={(e)=> setname(e.target.value)}/>
        <input type='text' placeholder='username' onChange={(e)=> setusername(e.target.value)}/>
        <button onClick={()=> dispatch(addUser({id: userList[userList.length -1].id + 1,name:name, username:username}))}>addUser</button>
      </div> 
      <div className='displayUsers'>
        {userList.map((user)=>{   
          return (
            <div>
              <h3>{user.name}</h3>
              <h3>{user.username}</h3>
              <input type='text' placeholder='new username' onChange={(e)=> setNewusername(e.target.value)}/>
              <button onClick={()=> dispatch(updateUsername({id: user.id, username:newusername}))}>Update User</button>
              <button onClick={()=> {dispatch(deleteUser({id: user.id}))}}>Delete User</button>


            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;


