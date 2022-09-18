import React, {useEffect} from "react";
import './App.css';
import NewGame from './components/NewGame';
import AllGames from  './components/AllGames';
import OneGame from './components/OneGame';
import EditGame from './components/EditGame';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
        {/* ASSIGNS COMPONENT TO PATH */}
        <Routes>
          <Route element={<AllGames/>} path="/" />
          <Route element={<NewGame />} path="/new" />
          <Route element={<OneGame />} path="/game/:id" />
          <Route element={<EditGame/>} path="/game/edit/:id" />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
