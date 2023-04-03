import React from 'react';
import {BsBook} from 'react-icons/bs';
function Navbar() {
  return (
   
     <section>
      <div className='bg-black h-20 w-full flex items-center pl-10 space-x-4'>
        <div>
          <BsBook className='text-white text-4x1' />
        </div>
        <div>
          <p className='text-white text-3x-1'>My Coding</p>
        </div>
      </div>
     </section>
   
  );
}

export default Navbar