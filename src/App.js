import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Investor from './components/Investor';
import Dealership from './components/Dealership';
import Features from './components/Features';
import Integration from './components/Integration';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Investor/>
      <Dealership/>
      <Features/>
      <Integration/>
    </div>
  );
}

export default App;
