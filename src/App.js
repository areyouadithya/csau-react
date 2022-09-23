
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className='cards'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
