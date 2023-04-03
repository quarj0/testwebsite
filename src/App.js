import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainPage from './components/MainPage';

import "./App.css"

function App() {
  return (
   <>
   <Router>
    <MainPage />
   </Router>
   </>
  );
}

export default App;