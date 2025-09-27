import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Finny from '@/components/home/Finny'
import About from '@/components/home/About';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Finny />
        <About />
      </main>
      <Footer />
    </>
  );
}