import { useReveal } from './components/utils';
import { Nav, Hero, Problem } from './components/SectionsTop';
import { HowItWorks, FeatureGrid, DeepDive } from './components/SectionsMid';
import { Waitlist, Footer } from './components/SectionsEnd';

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <FeatureGrid />
        <DeepDive />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
