
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import DashboardMainContent from './components/DashboardMainContent';
// import Photo from './photography/Photo';
// import RootLayout from './tour/RootLayout';
// function App() {
//   return (


//  <div>
//   <RootLayout></RootLayout>
//       {/* <Sidebar />
//       <div className="flex-grow-1 d-flex flex-column">
//         <Header />
//         <DashboardMainContent />
//       </div> */}
//     </div>

//   );
// }

// export default App;


























import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './isl.css'
import Footer from './Footer';
import SpecialProjects from '../components/isl/SpecialProjects';
import AlIslamTV from '../components/isl/AlIslamTV';
import AskQuestion from '../components/isl/AskQuestion';
import GhadirKhumm from '../components/isl/GhadirKhumm';
import InANutshell from '../components/isl/InANutshell';
import Supplications from '../components/isl/Supplications';
import Quran from '../components/isl/Quran';
import Tahrif from '../components/isl/Tahrif';
// const demoBooks = [
//   {
//     id: '1',
//     title: 'Toward Theology Development',
//     cover: 'https://al-islam.org/sites/default/files/styles/cover_image_list/public/content-cover/journal-cover-200300-1.jpeg?itok=iSoQSWCA',
//   },
//   {
//     id: '2',
//     title: 'Imam Husayn and the Concept of Freedom',
//     cover: 'https://al-islam.org/sites/default/files/styles/cover_image_list/public/content-cover/journal-cover-200280-1.jpeg?itok=2Cp0fKVU',
//   },
//   {
//     id: '3',
//     title: 'The Essence of Shia Faith',
//     cover: 'https://al-islam.org/sites/default/files/styles/cover_image_list/public/content-cover/book-cover-198558-1.jpeg?itok=Wi5vwxC-',
//   },
//   {
//     id: '4',
//     title: 'Holy Quran (Juz 8)',
//     cover: 'https://al-islam.org/sites/default/files/styles/cover_image_list/public/content-cover/book-cover-200023-1.jpeg?itok=h4kO7FSI',
//   },
// ];

// const categories = [
//   { id: 1, name: 'Holy Quran' },
//   { id: 2, name: 'Prophet Muhammad' },
//   { id: 3, name: 'Ahlul Bayt' },
//   { id: 4, name: 'Islamic History' },
// ];

// function NavBar({ onSearch }) {
//   const [query, setQuery] = useState('');
// const [collapsed, setCollapsed] = useState(true); // true means navbar collapsed (hidden)

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   // Close navbar when a nav link is clicked
//   const handleNavClick = () => setCollapsed(true);

//   return (
//   <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//       <Link className="navbar-brand d-flex align-items-center" to="/" onClick={handleNavClick}>
//         <img
//           src="https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/book-pile.png"
//           alt="logo"
//           height="40"
//           className="me-2"
//         />
//         Al-Islam.org
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         aria-controls="navbarSupportedContent"
//         aria-expanded={!collapsed}
//         aria-label="Toggle navigation"
//         onClick={toggleNavbar}
//       >
//         <span className="navbar-toggler-icon" />
//       </button>

//       <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
//         <form
//           className="d-flex ms-auto me-3"
//           onSubmit={(e) => {
//             e.preventDefault();
//             onSearch(query);
//             setCollapsed(true); // Close menu after search submit
//           }}
//         >
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Custom Search..."
//             aria-label="Search"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button className="btn btn-info text-white" type="submit">
//             Search
//           </button>
//         </form>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to="/categories" className="nav-link" onClick={handleNavClick}>
//               Categories
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/donate" className="nav-link" onClick={handleNavClick}>
//               Donate
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>

//   );
// }

// function Hero() {
//   return (
//     <div
//   className="text-white text-center py-5 px-3 position-relative"
//   style={{
//     backgroundImage: "url('https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/book-pile.png')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     minHeight: '300px',
//   }}
// >
//   {/* Overlay for better contrast */}
//   <div
//     style={{
//       position: 'absolute',
//       top: 0, left: 0, right: 0, bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.5)', // dark overlay, adjust opacity as needed
//       zIndex: 0,
//     }}
//   />

//   {/* Content container to stay above overlay */}
//   <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
//     <h1 className="display-5 fw-bold">Access 3,000+ Resources about Islam and Muslims</h1>
//     <p className="lead mt-3">
//       Discover books, articles, and multimedia to deepen your knowledge of Islam.
//     </p>
//     <Link to="/categories" className="btn btn-light mt-3">
//       Browse Categories
//     </Link>
//   </div>
// </div>

//   );
// }

// function BookGrid() {
//   return (
//     <div className="row g-4 mt-4">
//       {demoBooks.map((book) => (
//         <div key={book.id} className="col-6 col-sm-4 col-md-3">
//           <Link to={`/book/${book.id}`} className="text-decoration-none text-dark">
//             <div className="card h-100 shadow-sm">
//               <img src={book.cover} className="card-img-top" alt={book.title} />
//               <div className="card-body">
//                 <h5 className="card-title text-center">{book.title}</h5>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <Hero />
//       <div className="container py-5">
//         <h2 className="mb-4 text-primary">Featured Books & Media</h2>
//         <BookGrid />
//       </div>
//     </div>
//   );
// }

// function BookDetails() {
//   const { id } = useParams();
//   const book = demoBooks.find((b) => b.id === id);

//   if (!book) return <div className="text-center p-5">Book not found.</div>;

//   return (
//     <div className="container py-5">
//       <div className="text-center mb-4">
//         <img src={book.cover} alt={book.title} className="img-fluid rounded shadow" style={{ maxHeight: 300 }} />
//       </div>
//       <h1 className="text-primary">{book.title}</h1>
//       <p className="text-muted">(Book description goes here)</p>
//       <button className="btn btn-info text-white">Read Now</button>
//     </div>
//   );
// }

// function CategoriesPage() {
//   return (
//     <div className="container py-5">
//       <h1 className="text-primary mb-4">Categories</h1>
//       <div className="row">
//         {categories.map((c) => (
//           <div key={c.id} className="col-12 col-md-6 mb-3">
//             <Link to={`/category/${c.id}`} className="text-decoration-none">
//               <div className="card shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title text-info">{c.name}</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function SearchPage({ query }) {
//   const matches = demoBooks.filter((b) =>
//     b.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="container py-5">
//       <h2 className="text-primary mb-4">Search Results for "{query}"</h2>
//       <div className="row g-4">
//         {matches.length === 0 && (
//           <div className="text-muted">No results found.</div>
//         )}
//         {matches.map((b) => (
//           <div key={b.id} className="col-6 col-sm-4 col-md-3">
//             <Link to={`/book/${b.id}`} className="text-decoration-none text-dark">
//               <div className="card h-100 shadow-sm">
//                 <img src={b.cover} className="card-img-top" alt={b.title} />
//                 <div className="card-body">
//                   <h5 className="card-title text-center">{b.title}</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function SearchWrapper({ query }) {
//   return <SearchPage query={query} />;
// }

// function App() {
//   const [search, setSearch] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleSearch = (q) => {
//     setSearch(q);
//     if (location.pathname !== '/search') {
//       navigate('/search');
//     }
//   };

//   return (
//     <>
//       <NavBar onSearch={handleSearch} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/book/:id" element={<BookDetails />} />
//         <Route path="/categories" element={<CategoriesPage />} />
//         <Route path="/search" element={<SearchWrapper query={search} />} />
//       </Routes>
//     </>
//   );
// }

// export default function WrappedApp() {
//   return (
//     <BrowserRouter>
//       <App />
//       <SpecialProjects />
//       <Routes>
//       <Route path="/projects/al-islam-tv" element={<div>Al-Islam TV Page</div>} />
// <Route path="/projects/ask-question" element={<div>Ask a Question Page</div>} />
// <Route path="/projects/ghadir-khumm" element={<div>Ghadir Khumm Page</div>} />
// <Route path="/projects/in-a-nutshell" element={<div>In a Nutshell Page</div>} />
// <Route path="/projects/supplications" element={<div>Supplications Page</div>} />
// <Route path="/projects/quran" element={<div>Quran Page</div>} />
// <Route path="/projects/tahrif" element={<div>Tahrif Page</div>} />

// /*for all tv  */

// <Route path="/projects/al-islam-tv" element={<AlIslamTV />} />
//   <Route path="/projects/ask-question" element={<AskQuestion />} />
//   <Route path="/projects/ghadir-khumm" element={<GhadirKhumm />} />
//   <Route path="/projects/in-a-nutshell" element={<InANutshell />} />
//   <Route path="/projects/supplications" element={<Supplications />} />
//   <Route path="/projects/quran" element={<Quran />} />
//   <Route path="/projects/tahrif" element={<Tahrif />} />
//   </Routes>
//       <Footer></Footer>
//     </BrowserRouter>
//   );
// }


// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import {
  NavBar,
  Home,
  BookDetails,
  CategoriesPage,
  SearchWrapper,
} from './components/LibraryComponents';

function AppWrapper() {
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
    <div>
      <NavBar onSearch={handleSearch} />
         <SpecialProjects />
      
     
      <Routes>
      <Route path="/projects/al-islam-tv" element={<div>Al-Islam TV Page</div>} />
<Route path="/projects/ask-question" element={<div>Ask a Question Page</div>} />
<Route path="/projects/ghadir-khumm" element={<div>Ghadir Khumm Page</div>} />
<Route path="/projects/in-a-nutshell" element={<div>In a Nutshell Page</div>} />
<Route path="/projects/supplications" element={<div>Supplications Page</div>} />
<Route path="/projects/quran" element={<div>Quran Page</div>} />
<Route path="/projects/tahrif" element={<div>Tahrif Page</div>} />

/*for all tv  */

<Route path="/projects/al-islam-tv" element={<AlIslamTV />} />
  <Route path="/projects/ask-question" element={<AskQuestion />} />
  <Route path="/projects/ghadir-khumm" element={<GhadirKhumm />} />
  <Route path="/projects/in-a-nutshell" element={<InANutshell />} />
  <Route path="/projects/supplications" element={<Supplications />} />
  <Route path="/projects/quran" element={<Quran />} />
  <Route path="/projects/tahrif" element={<Tahrif />} />
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/search" element={<SearchWrapper query={search} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

