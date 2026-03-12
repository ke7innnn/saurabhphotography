import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SectionNotEveryone } from '@/components/SectionNotEveryone';
import { SectionPortfolios } from '@/components/SectionPortfolios';
import { SectionGallery } from '@/components/SectionGallery';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <SectionNotEveryone />
      <SectionPortfolios />
      <SectionGallery />
      <Footer />
    </main>
  );
}
