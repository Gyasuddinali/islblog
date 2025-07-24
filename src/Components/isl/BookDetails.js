// src/pages/BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { demoBooks } from './data';

function BookDetails() {
  const { id } = useParams();
  const book = demoBooks.find((b) => b.id === id);

  if (!book) return <div className="text-center p-5">Book not found.</div>;

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <img src={book.cover} alt={book.title} className="img-fluid rounded shadow" style={{ maxHeight: 300 }} />
      </div>
      <h1 className="text-primary">{book.title}</h1>
      <p className="text-muted">(Book description goes here)</p>
      <button className="btn btn-info text-white">Read Now</button>
    </div>
  );
}

export default BookDetails;
