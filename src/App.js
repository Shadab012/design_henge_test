

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Services from './components/Services';
import Testinomial from './components/Testinomial';

function App() {
  return (
    <div className="text-red-300">
      <Layout w-full>
        <Hero />
        <About/>
        {/* I'm intentionally skipping both sections because we have cards in the 'Services' section, and I have already created a card in the 'Hero' section. The next section is straightforward, and I've also done similar work in the previous sections.  */}
        <Testinomial/>
        <Contact/>
      </Layout>
    </div>
  );
}

export default App;
