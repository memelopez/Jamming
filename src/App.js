import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';

const tracklistHC = [
  {
    id: "001",
    name: 'First Date',
    artist: 'Blink 182',
    album: 'Take Off Your Pants and Jacket'
  },
  {
    id: "002",
    name: 'Hey Ya!',
    artist: 'Outkast',
    album: 'Speakerboxxx/The Love Below'
  },
  {
    id: "003",
    name: 'All Star',
    artist: 'Smashmouth',
    album: 'Astro Lounge'
  },
  {
    id: "004",
    name: 'Jailhouse Rock',
    artist: 'Elvis Presley',
    album: "Elvis'Golden Record"
  },
  {
    id: "005",
    name: "Hotel California",
    artist: "Eagles",
    album: "Hotel California Remastered"
  },
  {
    id: "006",
    name: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller 25"
  },
  {
    id: "007",
    name: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night At The Opera"
  },
  {
    id: "008",
    name: "Let It Be",
    artist: "The Beatles",
    album: "Let It Be"
  },
  {
    id: "009",
    name: "(I Can't Get No) Satisfaction",
    artist: "The Rolling Stones",
    album: "Out Of Our Heads"
  },
  {
    id: "010",
    name: "Africa",
    artist: "TOTO",
    album: "Toto IV"
  },
  {
    id: "011",
    name: "More Than A Feeling",
    artist: "Boston",
    album: "Boston"
  },
  {
    id: "012",
    name: "Stayin' Alive",
    artist: "Beages",
    album: "Greatest"
  },
  {
    id: "013",
    name: "Smells Like Teen Spirit",
    artist: "Nirvana",
    album: "Nevermind"
  },
  {
    id: "014",
    name: "Every Breathe You Take",
    artist: "The Police",
    album: "Synchronicity"
  },
  {
    id: "015",
    name: "Stand By Me",
    artist: "Ben E. King",
    album: "Don't Play That Song"
  },
];

function App() {
    // const [newSearch, setNewSearch] = useState('');
  return (
    <div className="App">
      <div className="header">
        <h1>Ja<span className="mmsInsideJamming">mmm</span>ing</h1>
      </div>
      <SearchBar />
      <SearchResults
        tracklist={tracklistHC}
      />
    </div>
  );
}

export default App;
