import React from 'react';

import Navbar from './Navbar';
import SideBar from './SideBar';
import NavPage from './NavPage';


function MainPage() {
  return (
    <>
    <section>
      <Navbar />
    </section>

    <section>
      <div className='grid grid-cols-12'>
        <div className='col-span-3 bg-black h-screen pl-2'>
          <SideBar />
        </div>

          <div className='col-span-9 bg-green-500 h-screen pl-2'></div>
      <NavPage />
      </div>
    </section>
    </>
  );
}

export default MainPage;

