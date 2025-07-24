import React from "react";
import {
  FaPrayingHands,
  FaBookOpen,
  FaLandmark,
  FaGavel,
  FaBook,
  FaSpa,
} from "react-icons/fa";

const categories = [
  { name: "Belief & Creed", icon: <FaPrayingHands size={24} color="#0d6efd" /> },
  { name: "Education & Society", icon: <FaBookOpen size={24} color="#0d6efd" /> },
  { name: "History & Politics", icon: <FaLandmark size={24} color="#0d6efd" /> },
  { name: "Laws & Worship", icon: <FaGavel size={24} color="#0d6efd" /> },
  { name: "Quran & Hadith", icon: <FaBook size={24} color="#0d6efd" /> },
  { name: "Spirituality & Philosophy", icon: <FaSpa size={24} color="#0d6efd" /> },
];

const AllCategories = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary mb-4">All Categories</h2>
        <div className="row g-3 justify-content-center">
          {categories.map(({ name, icon }, idx) => (
            <div
              key={idx}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-center"
            >
              <div className="category-card border rounded text-center py-3 px-2 bg-white shadow-sm d-flex align-items-center gap-2 w-100 justify-content-center">
                {icon}
                <span className="fw-semibold text-dark">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
