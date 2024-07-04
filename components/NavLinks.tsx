'use client'
import { navLinks } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
    const pathname = usePathname()
  return (
    <>
        {navLinks.map((item, index) => (
            <Link key={index} href={item.src} className={`hover:text-[#AB8A54]/80 text-white text-lg font-medium ${pathname === item.src && "text-[#AB8A55] underline underline-offset-4 decoration-2"}`}>
                {item.name}
            </Link>
        ))}
    </>
  )
}

export default NavLinks