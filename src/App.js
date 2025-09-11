import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Jamming</h1>
      </div>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
