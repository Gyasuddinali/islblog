// src/components/BookGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import { demoBooks } from './data';

function BookGrid() {
  return (
    <div className="row g-4 mt-4">
      {demoBooks.map((book) => (
        <div key={book.id} className="col-6 col-sm-4 col-md-3">
          <Link to={`/book/${book.id}`} className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm">
              <img src={book.cover} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title text-center">{book.title}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookGrid;
