import React from 'react';
import NavbarIcon from './NavbarIcon';
import { FaInfoCircle, FaHome, FaBook, FaGithubAlt } from 'react-icons/fa';
import Link from 'next/link';
import SignInButton from './SignInButton/SignInButton';

export default function Navbar() {
  const githubUrlOrFallback = process.env.GITHUB_URL || '/';

  return (
    <nav className="m-0 flex h-screen w-20 flex-col bg-gray-900 text-white">
      <Link href="/">
        <NavbarIcon icon={<FaHome />} text="Home" />
      </Link>
      <Link href="/docs">
        <NavbarIcon icon={<FaBook />} text="Documentation" />
      </Link>
      <Link href="/about">
        <NavbarIcon icon={<FaInfoCircle />} text="About" />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={githubUrlOrFallback}
      >
        <NavbarIcon icon={<FaGithubAlt />} text="Source code" />
      </Link>
      <span className="flex-1" />
      <SignInButton />
    </nav>
  );
}
