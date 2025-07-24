import React from "react";
import { Link } from "react-router-dom";

const specialProjects = [
  {
    title: "Al-Islam TV",
    description:
      "Lectures, documentaries, and more covering many languages. Delivered by over 140 speakers from across the world.",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/media_-_special_project.jpg?itok=BTtY8qsY",
    link: "/projects/al-islam-tv",
  },
  {
    title: "Ask A Question",
    description:
      "Ask all your questions on topics related to Islam and Muslims to a team of over 30 Scholars and Experts from around the world.",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/default.jpg?itok=k0VBFhO-",
    link: "/projects/ask-question",
  },
  {
    title: "Event of Ghadir Khumm",
    description:
      "Historical description of the event of Ghadir Khumm including in-depth scholarly examination of sources.",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/ghadir.jpg?itok=Rw3CKAnQ",
    link: "/projects/ghadir-khumm",
  },
  {
    title: "In A Nutshell",
    description:
      "Fact Sheets in over 30 languages across many topics about Islam and Shi'ism as taught by the Prophet (s) and his Family (a).",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/factsheet_new_0.jpg?itok=x8F4g3J0",
    link: "/projects/in-a-nutshell",
  },
  {
    title: "Islamic Supplications",
    description:
      "A comprehensive anthology of Islamic supplications (ad'iya), salutations (ziyaraat), and recommended actions (a'maal).",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/islamic-supplication.jpg?itok=EASrnSQf",
    link: "/projects/supplications",
  },
  {
    title: "Al-Qur'an",
    description:
      "Read, Recite and Research the Quran with 113 Translations in 44 Languages and 9 Recitations.",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/quranic-glossary.jpg?itok=fHgUgFJQ",
    link: "/projects/quran",
  },
  {
    title: "Tahrif in Islamic Texts",
    description:
      "Investigate instances, with scanned images, of tafsir, hadith, and historical texts altered over time.",
    image: "https://al-islam.org/sites/default/files/styles/tag_thumbnail/public/tahrif.jpg?itok=XSqkGfZJ",
    link: "/projects/tahrif",
  },
];
const SpecialProjects = () => {
  return (
    <section className="text-dark py-5" >
      <div className="container">
        <h2 className="text-warning mb-4 text-center">Special Projects</h2>
        <div className="row g-4">
          {specialProjects.map((project, index) => (
            <div className="col-12 col-sm-6 col-md-4" key={index}>
              <Link
                to={project.link}
                className="text-decoration-none text-white"
                aria-label={project.title}
              >
                <div className=" rounded shadow-sm overflow-hidden h-100 d-flex flex-column">
                 <img
  src={project.image}
  alt={project.title}
  className="rounded-circle mx-auto d-block"
  style={{ width: "80px", height: "80px", objectFit: "cover" }}
/>
                  <div className="p-3 flex-grow-1 d-flex flex-column">
                    <h5 className="mb-2 text-success text-centter">{project.title}</h5>
                    <p className="small text-dark text-centter mb-0 flex-grow-1">{project.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialProjects;