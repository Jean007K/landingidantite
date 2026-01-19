import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import SecuritySection from '@/components/SecuritySection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <UseCasesSection />
      <SecuritySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
