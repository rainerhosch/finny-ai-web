import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Tentang Kami
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            <strong>FinnyAI</strong> didirikan dengan tujuan utama membantu sektor UMKM dalam melakukan transformasi bisnis digital. Kami percaya bahwa teknologi adalah kunci untuk memperluas jangkauan dan meningkatkan daya saing bisnis UMKM di era modern.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Melalui solusi digital yang inovatif, FinnyAI memberdayakan UMKM agar dapat memanfaatkan teknologi secara optimal, mulai dari pencatatan keuangan, pengelolaan operasional, hingga pemasaran digital.
                        </p>
                        <p className="text-gray-600">
                            Kami berkomitmen menjadi mitra strategis bagi UMKM, mendampingi setiap langkah transformasi digital untuk memastikan pertumbuhan dan kesuksesan bisnis secara berkelanjutan.
                        </p>
                    </div>

                    <div className="lg:w-1/2">
                        {/* Ganti '/path/to/your/image.jpg' dengan path gambar Anda */}
                        <Image
                            src="/images/Team.png"
                            alt="Our Team"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;