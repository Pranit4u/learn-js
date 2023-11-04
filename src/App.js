import './App.css';
import "./style/Navbar.css"
import "./style/CodeRunner.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lesson from './components/Lesson';
import l1data from './data/l1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Lesson l1data={l1data} />
      <div style={{height:50}}>
      </div>
      <Footer />
    </div>
  );
}

export default App;
