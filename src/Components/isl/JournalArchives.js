import React from "react";
import { Link } from "react-router-dom";

const journalEntries = [
  {
    title: "Message  of thaklayn",
    link: "/journals/shia-hadith-methodology",
  },
  {
    title: "Aal-Tawhid",
    link: "/journals/women-in-early-islam",
  },
  {
    title: "Al-Sherat",
    link: "/journals/constitution-of-medina",
  },
  {
    title: "Al-Taqrib",
    link: "/journals/unity-islamic-governance",
  },
];

const JournalArchives = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">📚 Journal Archives</h2>

        <div className="row g-4">
          {journalEntries.map((entry, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3"
            >
              <Link to={entry.link} className="text-decoration-none">
                <div className="card card-hover bg-danger h-100 border-0 shadow-sm d-flex justify-content-center align-items-center text-center p-4">
                  <h6 className="text-white fw-semibold mb-0">{entry.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect and styling */}
      <style>{`
        .card-hover {
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          min-height: 150px;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(255, 15, 15, 0.98);
          background-color: #0ffa2eff;
        }
      `}</style>
    </section>
  );
};

export default JournalArchives;
