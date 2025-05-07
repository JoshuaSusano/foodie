import React from 'react'

const user_login = () => {
  return (
    <div>
        <h1> Login User</h1>
        <form action = "/Login" method = "POST">
        <label htmlFor="username">Username:</label><br/>
        <input type="text" id="username" name="username"/><br/>
        </form>
    </div>
  )
}

export default user_login