import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from '../pages/home';
import Python from '../pages/Python';
import Java from '../pages/java';
import CSS from '../pages/css';
import Git from '../pages/git';
import HTML from '../pages/html';
import Reactjs from '../pages/Reactjs.js';

import './navpage.css';

function NavPage() {
  return (
    <>
    <section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/python' element={<Python />} />
        <Route path='/git' element={<Git />} />
        <Route path='/css' element={<CSS />} />
        <Route path='/html' element={<HTML />} />
        <Route path='/java' element={<Java />} />
        <Route path='/react' element={<Reactjs />} />
      </Routes>
    </section>
    </>
  );
}

export default NavPage;
