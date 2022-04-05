import { useEffect, useState } from "react";
import { getUsers } from "../../services/UserServices";
import './Users.css';


const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getUsers()
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))
  })

  return ( 
    <div className="container">
      { users ?
        users.map(user => {
          return (
            <div key={user.id}>
            <p className="card-user">{user.name} - {user.email}</p>
            </div>
          )
        })
        : <p> Loading...</p>
      }
    </div>
   );
}
 
export default Users;