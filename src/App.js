import logo from './logo.svg';
import './App.css';
import CharactersList from './pages/CharactersList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Character } from './pages/Character';
import CharacterSearch from './pages/CharacterSearch';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<CharactersList />} />
          <Route path='/:id' element={<Character />} />
          <Route path='/search' element={<CharacterSearch/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
