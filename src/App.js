import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Courses from './components/Courses';
import courseData from "./data/courseData";


import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courseData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='App'>
      <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className='hero'>
        <h1>Welcome to Our Online Learning Platform</h1>
        <p>
          Choose from a wide selection of courses to help you achieve your goals
        </p>
      </div>
      <Courses courses={filteredCourses} />
    </div>
  );
}

export default App;
