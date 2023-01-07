'use client';
import React from 'react';
import NavbarIcon from './NavbarIcon';
import { FaInfoCircle, FaHome, FaBook } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="m-0 flex h-screen w-16 flex-col bg-gray-900 text-white">
      <Link href="/">
        <NavbarIcon icon={<FaHome />} text="Home" />
      </Link>
      <Link href="/docs">
        <NavbarIcon icon={<FaBook />} text="Documentation" />
      </Link>
      <Link href="/about">
        <NavbarIcon icon={<FaInfoCircle />} text="About" />
      </Link>
    </nav>
  );
}
