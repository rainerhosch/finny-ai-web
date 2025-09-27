import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 md:py-36 overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl -z-10 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 flex flex-col items-start">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900 tracking-tight">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                            Transformasi Digital
                        </span>
                        <br />
                        <span className="text-gray-800">Bisnis Anda</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-xl">
                        Kami membantu perusahaan Anda berkembang di era digital dengan solusi inovatif dan strategi yang tepat sasaran.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12H3m0 0l7-7m-7 7l7 7" />
                        </svg>
                        Hubungi Kami
                    </a>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="relative w-full max-w-lg">
                        <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-100 rounded-full blur-2xl opacity-60 -z-10" />
                        <Image
                            src="/images/Hero.png"
                            alt="Ilustrasi Digital Consultant"
                            width={600}
                            height={400}
                            className="w-full max-w-md object-contain rounded-3xl shadow-2xl border-4 border-white"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;