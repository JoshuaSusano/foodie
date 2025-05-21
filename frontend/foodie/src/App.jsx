
import React from 'react';
import Home_compile from './homepage/home_compile.jsx';
import User_login from './Login/user_login';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<User_login/>}/>
    <Route path='/home' element={<Home_compile/>}/>
  </Routes>
</Router>
)}

export default App;
