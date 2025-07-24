
// import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import Context from './Components/Context';
// import CovidData from './Components/CovidData';

// function App() {
//   return (
//     <div className="App">

     
//       <CovidData></CovidData>
//       <FontAwesomeIcon icon={faTwitter}/>
//       <FontAwesomeIcon icon={faWhatsapp}/>
//       <FontAwesomeIcon icon={faInstagram}/>
//       <FontAwesomeIcon icon={faFacebook} />
//         <h1>hello world</h1>

        
        
//     </div>
//   );
// }

// export default App;








// src/App.js
import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavBar from './Components/isl/NavBar';

import Home from './Components/isl/Home';
import BookDetails from './Components/isl/BookDetails';
import CategoriesPage from './Components/isl/CategoriesPage';
import SearchWrapper from './Components/isl/SearchWrapper';

import AlIslamTV from './Components/isl/AlIslamTV';
import AskQuestion from './CategoriesPageomponents/isl/AskQuestion';
import GhadirKhumm from './Components/isl/GhadirKhumm';
import InANutshell from './Components/isl/InANutshell';
import Supplications from './Components/isl/Supplications';
import Quran from './Components/isl/Quran';
import Tahrif from './Components/isl/Tahrif';

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

