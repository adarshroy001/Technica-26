import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventsPreview from '@/components/EventsPreview';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Eventscards from '@/components/Events';
import { ScrollWordReveal } from '@/components/ScrollRevealText';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Eventscards />
      <Timeline />
      <ScrollWordReveal />
      <Footer />
    </main>
  );
}

