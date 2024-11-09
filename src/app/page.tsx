import AboutMe from './components/about';
import Contact from "./components/contact";
import Footer from './components/footer';
import Hero from './components/hero';
import {Skills} from './components/skill';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
