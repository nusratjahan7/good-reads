"use client"
import React, { useState } from 'react';
import NavLink from './Navlink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { FaBookReader } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <nav className=' !py-4 sticky top-0 right-0 left-0 z-50  backdrop-blur-2xl'>
            <div className='w-11/12 !mx-auto flex items-center justify-between'>
                <a href="#" className='roboto text-3xl text-(--deep)/50 tracking-tighter flex gap-2 items-center'>
                <FaBookReader className='text-(--rust)' />
                    good<span className='text-(--rust) '>reads</span>
                </a>


                <ul className='hidden md:flex items-center gap-4 text-(--deep)/80'>
                    <li><NavLink href={'/'} >Home</NavLink></li>
                    <li><NavLink href={'/about'}>About</NavLink></li>
                    <li><NavLink href={'/allBooks'}>All Books</NavLink></li>
                    <li><NavLink href={'/myProfile'}>My Profile</NavLink></li>
                </ul>

                <div>
                    { isPending ? 
                    (<span className="hidden md:block  loading loading-dots loading-xs"></span>) 
                    
                    : user ? 
                    (<button onClick={async () => await authClient.signOut()} className="btn hidden md:block outline-none border-none !px-3 bg-(--rust) text-white">Logout</button>)
                    
                    : (<div className='flex gap-4'>
                        <button className="btn hidden md:block outline-none border-none !px-3 bg-(--rust) text-white">
                            <Link href={'/login'}>Login</Link>
                        </button>
                        <button className="btn btn-outline hidden md:block  !px-3 text-(--rust) hover:bg-(--rust)/30  hover:border hover:border-(--rust)/20">
                            <Link href={'/register'}>Signup</Link>
                        </button>
                    </div>) }
                </div>


                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-(--rust) text-2xl font-bold"
                    aria-label="Toggle menu"
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {open && (
                <div className="md:hidden w-11/12 !mx-auto mb-4 rounded-2xl  bg-(--rust)/30 backdrop-blur-xl !px-6 !py-6 !mt-1.5">
                    <ul className="flex flex-col gap-3 list-none text-(--deep)/80 !mb-3">
                        <li><NavLink href={'/'} onClick={() => setOpen(false)}>Home</NavLink></li>
                        <li><NavLink href={'/about'} onClick={() => setOpen(false)}>About</NavLink></li>
                        <li><NavLink href={'/allBooks'} onClick={() => setOpen(false)}>All Books</NavLink></li>
                        <li><NavLink href={'/myProfile'} onClick={() => setOpen(false)}>My Profile</NavLink></li>
                    </ul>

                    <div>
                    { isPending ? 
                    (<span className="loading loading-dots loading-xs"></span>) 
                    
                    : user ? 
                    (<button onClick={async () => await authClient.signOut()} className="btn outline-none border-none !px-3 bg-(--rust) text-white">Logout</button>)
                    
                    : (<div className='flex flex-col gap-4'>
                        <button className="btn outline-none border-none !px-3 bg-(--rust) text-white">
                            <Link href={'/login'}>Login</Link>
                        </button>
                        <button className="btn btn-outline  !px-3 text-(--rust) hover:bg-(--rust)/30  hover:border hover:border-(--rust)/20">
                            <Link href={'/register'}>Signup</Link>
                        </button>
                    </div>) }

                </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;