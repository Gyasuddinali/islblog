// src/pages/CategoriesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data';

function CategoriesPage() {
  return (
    <div className="container py-5">
      <h1 className="text-primary mb-4">Categories</h1>
      <div className="row">
        {categories.map((c) => (
          <div key={c.id} className="col-12 col-md-6 mb-3">
            <Link to={`/category/${c.id}`} className="text-decoration-none">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-info">{c.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;
