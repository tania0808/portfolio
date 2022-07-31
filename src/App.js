import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import NavList from './components/NavList';

function App() {
  return (
    <div className="App scroll-smooth font-poppins transition-all ease-linear duration-600 ">
      <Header/>
      <About/>
      <Skills/>
      <ContactForm/>
      <NavList className='w-full container mx-auto px-24 my-6 lg:py-0 sm:flex-col flex justify-around  text-xl items-center gap-6'/>
    </div>
  );
}

export default App;
