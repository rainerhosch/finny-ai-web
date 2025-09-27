import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
                    {/* Logo dan Deskripsi Singkat */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold text-blue-600 mb-2">FinnyAI.</h3>
                        <p className="text-gray-400 max-w-sm">
                            Membantu bisnis Anda berkembang di era digital dengan solusi inovatif dan strategi yang efektif.
                        </p>
                    </div>

                    {/* Tautan Navigasi */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h4 className="font-semibold mb-3 text-gray-200">Navigasi</h4>
                        <ul className="space-y-2 text-center md:text-left">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                    Layanan
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak dan Media Sosial */}
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <h4 className="font-semibold mb-3 text-gray-200">Ikuti Kami</h4>
                        <div className="flex space-x-4">
                            {/* Ganti # dengan tautan media sosial Anda */}
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                {/* Ikon Sosial Media (e.g., Facebook) */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.77l-.44 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                {/* Ikon Sosial Media (Instagram) */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
                                {/* Ikon Sosial Media (Twitter) */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.014-4.49 4.496 0 .353.04.697.116 1.025C7.728 9.37 4.1 7.555 1.67 4.905a4.48 4.48 0 0 0-.607 2.263c0 1.563.796 2.944 2.008 3.755a4.47 4.47 0 0 1-2.034-.563v.057c0 2.184 1.553 4.006 3.617 4.422a4.51 4.51 0 0 1-2.027.077c.572 1.785 2.23 3.084 4.195 3.12A8.99 8.99 0 0 1 2 19.54a12.7 12.7 0 0 0 6.92 2.03c8.303 0 12.85-6.876 12.85-12.844 0-.196-.004-.392-.013-.586A9.22 9.22 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z"/>
                                </svg>
                            </a>
                            {/* Tambahkan ikon media sosial lainnya (Twitter, LinkedIn, dll.) */}
                        </div>
                    </div>
                </div>

                {/* Hak Cipta */}
                <div className="text-center mt-10 border-t border-gray-700 pt-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} FinnyAI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;