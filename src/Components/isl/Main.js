
// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './components/isl/NavBar';

import Home from './components/isl/Home';
import BookDetails from './components/isl/BookDetails';
import CategoriesPage from './components/isl/CategoriesPage';
import SearchWrapper from './components/isl/SearchWrapper';

import AlIslamTV from './components/isl/AlIslamTV';
import AskQuestion from './components/isl/AskQuestion';
import GhadirKhumm from './components/isl/GhadirKhumm';
import InANutshell from './components/isl/InANutshell';
import Supplications from './components/isl/Supplications';
import Quran from './components/isl/Quran';
import Tahrif from './components/isl/Tahrif';

function App() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (q) => {
    setSearch(q);
    if (location.pathname !== '/search') {
     navigate('/search');
    }
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/search" element={<SearchWrapper query={search} />} />
  

<Route path="/projects/al-islam-tv" element={<AlIslamTV />} />
  <Route path="/projects/ask-question" element={<AskQuestion />} />
  <Route path="/projects/ghadir-khumm" element={<GhadirKhumm />} />
  <Route path="/projects/in-a-nutshell" element={<InANutshell />} />
  <Route path="/projects/supplications" element={<Supplications />} />
  <Route path="/projects/quran" element={<Quran />} />
  <Route path="/projects/tahrif" element={<Tahrif />} />

      </Routes>
    </>
  );
}

export default App;

