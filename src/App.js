import './App.css';
import { Nav } from './Components/Nav';
import { SearchBox } from './Components/SearchBox';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBox />
      <Home/>
    </div>
  );
}

export default App;
