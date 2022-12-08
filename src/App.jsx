import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="container App">
      <Header/>
      <Hero/>
      <Footer/>
      <About/>
    </div>
  );
}

export default App;
