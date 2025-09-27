"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const TELEGRAM_LINK = "https://t.me/FinnyAiBot"; // Ganti dengan link Telegram FinnyAI yang benar

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900/80 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 tracking-tight">
                    <span className="inline-block text-white rounded-lg shadow-sm">Finny</span>
                    {/* <span className="text-white bg-gradient-to-r from-blue-600 to-blue-400 py-1 px-2 rounded-lg">AI</span> */}
                    <span className="text-blue-700">AI</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                    <Link href="/" className="px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600 font-medium transition">
                        Beranda
                    </Link>
                    <Link href="#services" className="px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600 font-medium transition">
                        Layanan
                    </Link>
                    <Link href="#about" className="px-3 py-2 rounded-md text-white hover:bg-blue-50 hover:text-blue-600 font-medium transition">
                        Tentang Kami
                    </Link>
                    <a
                        href={TELEGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-200 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.036 15.956l-.396 3.72c.567 0 .813-.243 1.11-.535l2.664-2.53 5.522 4.03c1.012.557 1.73.264 1.98-.937l3.594-16.84c.327-1.52-.552-2.116-1.54-1.75L2.36 9.27c-1.49.58-1.47 1.41-.254 1.78l4.59 1.434 10.65-6.7c.5-.32.96-.143.58.177"/>
                        </svg>
                        Coba FinnyAI
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-700 hover:text-blue-600 focus:outline-none transition"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 w-full z-40 animate-fade-in">
                    <div className="flex flex-col px-6 py-4 space-y-2">
                        <Link
                            href="/"
                            className="py-2 px-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="#services"
                            className="py-2 px-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Layanan
                        </Link>
                        <Link
                            href="#about"
                            className="py-2 px-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Tentang Kami
                        </Link>
                        <a
                            href={TELEGRAM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-200 flex items-center gap-2"
                            onClick={() => setMenuOpen(false)}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.036 15.956l-.396 3.72c.567 0 .813-.243 1.11-.535l2.664-2.53 5.522 4.03c1.012.557 1.73.264 1.98-.937l3.594-16.84c.327-1.52-.552-2.116-1.54-1.75L2.36 9.27c-1.49.58-1.47 1.41-.254 1.78l4.59 1.434 10.65-6.7c.5-.32.96-.143.58.177"/>
                            </svg>
                            Coba FinnyAI
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;