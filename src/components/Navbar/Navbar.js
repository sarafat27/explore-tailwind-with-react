import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Shop', path: '/shop' },
        { id: 3, name: 'Deals', path: '/Deals' },
        { id: 4, name: 'Coupons', path: '/Coupons' },
        { id: 5, name: 'Contact us', path: '/contact' },
    ]
    return (
        <nav className='bg-slate-400'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center bg-slate-400 w-full absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;