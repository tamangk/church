import './App.css';
import About from './components/About';
import Header from './components/Header';
import Sliders from './components/Sliders';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Sliders />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
