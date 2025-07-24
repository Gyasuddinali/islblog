import React from "react";

const journalEntries = [
  {
    title: "Exploring Shi'a Hadith Methodology",
    subtitle: "A comparative look at sources and transmission chains.",
    date: "June 2025",
    link: "/journals/shia-hadith-methodology",
  },
  {
    title: "The Role of Women in Early Islam",
    subtitle: "Historical narratives and reinterpretations.",
    date: "May 2025",
    link: "/journals/women-in-early-islam",
  },
  {
    title: "Revisiting the Constitution of Medina",
    subtitle: "Pluralism and governance in the Prophet’s state.",
    date: "April 2025",
    link: "/journals/constitution-of-medina",
  },
];

const JournalArchives = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-dark mb-4 text-center">📚 Journal Archives</h2>

        <div className="row g-4">
          {journalEntries.map((entry, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <a href={entry.link} className="text-decoration-none text-dark">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body">
                    <h5 className="card-title">{entry.title}</h5>
                    <p className="card-text text-muted small mb-2">
                      {entry.subtitle}
                    </p>
                    <p className="text-muted small mb-0">
                      <i className="bi bi-calendar3 me-1"></i>
                      {entry.date}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalArchives;
