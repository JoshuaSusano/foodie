import React from 'react';
import Home_compile from './homepage/home_compile.jsx';
import User_login from './Login/user_login';
import Ingridients_compile from './ingridients/ingridients_compile.jsx'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
function App() {
  return (
<Router>
  <Routes>
    <Route path='/' element={<User_login/>}/>
    <Route path='/home' element={<Home_compile/>}/>
    <Route path='/ingri' element = {<Ingridients_compile/>}/>
  </Routes>
</Router>
)}

export default App;
