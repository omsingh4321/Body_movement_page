import logo from './logo.svg';
import './App.css';
import Quiz from './pages/Quiz'; // Update the import path
import Navbaar from './pages/Navbaar';
import Body from './pages/Body';
import Footer from './pages/Footer';
import Slides from './pages/Slides';

function App() {
  return (
    <div>
       <Navbaar/>
       <Slides></Slides>
       <Body/>  
       <Quiz/>
      <Footer/>     
    </div>
  );
}

export default App;