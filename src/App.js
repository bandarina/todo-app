import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Settings } from './app/components/Settings/Settings';
import { Nav } from './app/components/Nav/Nav';
import { Menu } from './app/components/Menu/Menu';
import './App.css';
import { useSelector } from 'react-redux';
import { selectTheme } from './app/components/Settings/settingsSlice';
import { NoteList } from './app/components/NoteList/NoteList';
import { NoteEditForm } from './app/components/NoteEditForm/NoteEditForm';
function App() {

  const darkMode = useSelector(selectTheme);

  return (
    <div className="App" style={{backgroundColor: darkMode ? '#2d2d30' : 'white', color: darkMode ? 'white' : 'black'}}>
    <Router>
    <Nav darkMode={darkMode}/>
    <Menu darkMode={darkMode}/>
    
      <Routes>
        <Route path='/editnote' element={<NoteEditForm/>} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/' element={<NoteList />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
