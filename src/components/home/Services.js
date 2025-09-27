import React from 'react';

const Services = () => {
    const services = [
        {
            title: "FinnyAIBot",
            description: "Asisten pencatatan keuangan, dengan berbagai fitur unggulan, membuat manajemen keuangan yang lebih mudah",
            icon: "🤖",
        },
        {
            title: "Pengembangan Web",
            description: "Kami membangun website modern yang cepat, responsif, dan dioptimalkan untuk performa.",
            icon: "💻", // Anda bisa ganti dengan ikon SVG atau gambar
        },
        {
            title: "Pemasaran Digital",
            description: "Strategi pemasaran digital terpadu untuk meningkatkan visibilitas dan konversi bisnis Anda.",
            icon: "📈",
        },
        {
            title: "Manajemen Sosial Media",
            description: "Kelola akun media sosial Anda untuk membangun komunitas dan berinteraksi dengan audiens.",
            icon: "📱",
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Layanan Unggulan Kami
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Kami menawarkan berbagai solusi digital yang dirancang untuk mendorong pertumbuhan bisnis Anda.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;