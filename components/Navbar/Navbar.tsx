'use client';
import React from 'react';
import NavbarIcon from './NavbarIcon';
import { FaInfoCircle, FaHome, FaBook, FaPhone } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white">
      <NavbarIcon icon={<FaHome />} text="Home" />
      <NavbarIcon icon={<FaBook />} text="Documentation" />
      <NavbarIcon icon={<FaInfoCircle />} text="About" />
    </nav>
  );
}
