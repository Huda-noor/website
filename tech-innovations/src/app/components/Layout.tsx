import React from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4 flex justify-between">
          <h1 className="text-xl font-bold">Tech Innovations</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/news" className="hover:text-gray-400">
              News
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-900 text-white text-center p-4">
        &copy; 2024 Tech Innovations. All rights reserved.
      </footer>
    </div>
  );
}
