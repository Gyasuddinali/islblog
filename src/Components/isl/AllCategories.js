import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Quran & Hadith",
    image: "https://tse2.mm.bing.net/th/id/OIP.EJ9viu_5uwy0_TR8K8941QHaFV?rs=1&pid=ImgDetMain&o=7&rm=3",
    path: "/categories/quran",
  },
  {
    name: "Belief & Creed",
    image: "https://tse3.mm.bing.net/th/id/OIP.VAcyHvOODwDH05hBvUP0eQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    path: "/categories/creed",
  },
  {
    name: "History & Politics",
    image: "https://www.pngitem.com/pimgs/m/25-251165_islamic-history-png-history-transparent-png.png",
    path: "/categories/history",
  },
  {
    name: "Education & Society",
    image: "https://img.pikbest.com/element_our/20230109/bg/b8698a4c5a84e.png!bw700",
    path: "/categories/education",
  },
  {
    name: "Laws & Worship",
    image: "https://www.pngmart.com/files/21/Worship-PNG-HD-Isolated.png",
    path: "/categories/laws",
  },
  {
    name: "Spirituality & Philosophy",
    image: "https://cdn-icons-png.freepik.com/512/8554/8554485.png",
    path: "/categories/spirituality",
  },
];


const AllCategories = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary mb-4">All Categories</h2>
        <div className="row g-3 justify-content-center">
          {categories.map(({ name, image, path }, idx) => (
            <div
              key={idx}
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex align-items-center justify-content-center"
            >
              <div
                className="category-card text-center bg-white shadow-sm border rounded w-100 py-3 px-2 hover-scale"
                style={{ cursor: "pointer", transition: "all 0.3s" }}
                onClick={() => handleClick(path)}
              >
                <img
                  src={image}
                  alt={name}
                  className="mb-2"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <div className="badge bg-primary-subtle text-primary fw-semibold text-wrap">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra CSS for hover effect */}
      <style>
        {`
          .hover-scale:hover {
            transform: scale(1.05);
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          }
        `}
      </style>
    </section>
  );
};

export default AllCategories;
