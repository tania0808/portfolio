import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import NavList from './components/NavList';
import Projects from './components/Projects';

function App() {
  return (
    <div className="scroll-smooth font-poppins transition-all ease-linear duration-600 2xl:w-10/12 3xl:w-10/12 ml-auto mr-auto">
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <NavList className=' mx-auto px-24 my-6 lg:py-0 sm:flex-col flex justify-around  text-xl items-center gap-6'/>
    </div>
  );
}

export default App;
