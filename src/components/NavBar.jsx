import React, { useState } from 'react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { SignedOut,SignedIn,SignInButton,UserButton } from '@clerk/clerk-react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  

return (
    <div className="w-full h-15 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 text-xl font-bold">
            <Image src="logo.png" alt="Dat Logo" w={32} h={32} />
            <span>DatBlog</span>
        </Link>
        <div className="md:hidden">
            <div
                className="cursor-pointer text-4xl"
                onClick={() => setOpen((prev) => !prev)}
            >
                {open ? 'X' : '='}
            </div>
            <div
                className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
                    open ? 'right-0' : '-right-[100%]'
                }`}
            >
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                        Login👋
                    </button>
                </Link>
            </div>
        </div>
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-semibold">
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>    
            <SignedOut>
            <Link to="/login">
        
                
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                    Login👋
                </button>
            </Link>
         
    
      </SignedOut>
        <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
    </div>
);
};

export default NavBar;
