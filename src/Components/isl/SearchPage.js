// src/pages/SearchPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { demoBooks } from './data';

function SearchPage({ query }) {
  const matches = demoBooks.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="text-primary mb-4">Search Results for "{query}"</h2>
      <div className="row g-4">
        {matches.length === 0 && (
          <div className="text-muted">No results found.</div>
        )}
        {matches.map((b) => (
          <div key={b.id} className="col-6 col-sm-4 col-md-3">
            <Link to={`/book/${b.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={b.cover} className="card-img-top" alt={b.title} />
                <div className="card-body">
                  <h5 className="card-title text-center">{b.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
