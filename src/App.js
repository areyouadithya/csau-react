
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card/Card';
import TextCard from './components/Card/TextCard';
import Postform from './components/Postform';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className='cards'>
          <Card />
          <Card />
          <Card />
          <TextCard />
          <TextCard />
        </div>
      </div>
      <Postform />
    </div>
  );
}

export default App;
