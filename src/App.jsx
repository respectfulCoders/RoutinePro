import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import HomeScreen from './home/HomeScreen';
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
