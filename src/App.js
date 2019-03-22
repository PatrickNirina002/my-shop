import React, { useState } from 'react'
import UserTable from './table/UserTable'
import AddUserForm from './forms/AddUserForm'

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const usersData = [
  ]

  const [users, setUsers] = useState(usersData)

  const [count, setCount] = useState(0);
  
  const addUser = user => {
		user.id = users.length + 1
    setUsers([ ...users, user ])
    user.id=count
	}



  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <AddUserForm addUser={addUser} setCount={setCount} count={count} />
        </div>
        <div className="flex-large">
		  <UserTable users={users}  />
        </div>
      </div>
    </div>
  )
}

export default App