import React from 'react';
import Image from 'next/image';

const Finny = () => {
    const services = [
        {
            title: "Perekaman Struk Otomatis",
            description: "Cukup unggah foto struk belanja, dan teknologi AI kami akan secara otomatis membaca dan menyimpan detail transaksi. Data seperti tanggal, nama toko, dan jumlah pengeluaran akan langsung tercatat, menghemat waktu Anda.",
            icon: "🤖",
        },
        {
            title: "Input Manual Ala Catatan",
            description: "Selain otomatis, Anda juga bisa mencatat pemasukan dan pengeluaran secara manual layaknya menulis di catatan pribadi. Ini memberikan fleksibilitas penuh untuk mencatat transaksi yang tidak memiliki struk.",
            icon: "✍️",
        },
        {
            title: "In Line Chat Laporan",
            description: "Pembuatan laporan singkat dalam bentuk chat",
            icon: "💬",
        },
        {
            title: "Ekspor Laporan dalam Excel",
            description: "Dapatkan rekapitulasi data keuangan bisnis Anda dengan mudah. FinnyAIBot dapat mengekspor laporan dalam format Excel yang rapi, siap untuk dianalisis atau dilaporkan.",
            icon: "📊",
        },
    ];
    return (
        <section id="finny-ai-bot" className="py-20 bg-gray-200 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        FinnyAIBot<br/>Solusi Cerdas Pencatatan Keuangan
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        FinnyAIBot adalah bot pencatatan keuangan otomatis yang dirancang untuk mempermudah UMKM dan bisnis mengelola keuangan mereka. Lupakan cara manual yang rumit, kini semuanya bisa dilakukan dengan mudah melalui bot pintar kami.
                    </p>
                </div>

                {/* Fitur Utama */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Fitur 1: Upload Struk Otomatis */}
                    {services.map((service, index) => (
                        <div 
                        key={index}
                        className="bg-gray-50 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                            </h3>
                            <p className="text-gray-600 text-xs text-justify">
                            {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Finny;