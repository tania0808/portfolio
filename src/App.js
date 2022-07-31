import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <div className="App font-poppins transition-all ease-linear duration-600 ">
      <Header/>
      <About/>
      <Skills/>
      <ContactForm/>
    </div>
  );
}

export default App;
