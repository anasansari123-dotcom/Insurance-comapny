import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyUs } from '@/components/sections/WhyUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBanner } from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
