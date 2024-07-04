import React from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <section className='fixed w-full top-5 flex items-center justify-center z-50'>
      <div className='max-w-7xl h-20 px-10 w-full bg-[#292E34]/50 backdrop-blur-lg flex flex-row items-center rounded-lg gap-x-[15rem]'>
        <h1 className='text-white text-xl font-semibold cursor-pointer'>DELE<span className='text-[#AB8A54]'>CIOUS</span></h1>
        <div className='hidden lg:flex flex-row items-center  md:gap-x-12 lg:gap-x-28'>
            <NavLinks />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
