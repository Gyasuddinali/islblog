import React from "react";
import { Link } from "react-router-dom";

const exploreSections = [
  {
    title: "Researching Islam?",
    description:
      "Discover Islam through a selection of resources particularly appropriate for those who are learning about Islam, including interviews with converts.",
    image: "https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/discover.jpg",
    links: [
      "Introducing Islam",
      "Islam and Christianity",
      "Conversion to Islam",
      "Muslim Practices",
      "Tutorials",
      "Spirituality",
    ],
  },
  {
    title: "Who are Shi'a & Sunni?",
    description:
      "Understand the commonalities and differences between the two major schools of thought in Islam, and find out more about Islam as taught by the Family of the Prophet (s).",
    image: "https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/explore.jpg",
    links: [
      "Introducing the Ahlul Bayt",
      "Shi'a beliefs explained",
      "Unity between Shi'a & Sunni",
      "Why they became Shi'a",
      "Responses to Misconceptions",
      "Debates & discussions",
      "Resources for Further Research",
    ],
  },
  {
    title: "Kids Corner",
    description:
      "Educational and fun content for children and teenagers, including animated historical films and puppet shows, as well as resources for their teachers and parents.",
    image: "https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/kidscorner/hero-kids-corner.jpg",
    links: [
      "Texts For Children",
      "Texts For Youth",
      "Teaching Tools & Materials",
      "Madressa Syllabus & Curriculum",
      "Games & Quizzes",
      "Islamic Clipart",
      "Colouring Images",
    ],
  },
];

const ExploreIslam = () => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Explore Islam</h2>
        <div className="row g-4">
          {exploreSections.map((section, index) => (
            <div className="col-12" key={index}>
              <div className="card border-0 shadow-sm p-3 h-100">
                <div className="row align-items-center g-4 flex-column flex-md-row">
                  {/* Image column */}
                  <div className="col-md-4 text-center">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="img-fluid rounded mx-auto d-block"
                     style={{
                      maxWidth: "500px", 
                      width: "90%",       
                     height: "auto"
                     }}  />
                  </div>

                  {/* Content column */}
                  <div className="col-md-8">
                    <h5 className="card-title text-dark">{section.title}</h5>
                    <p className="card-text text-muted">{section.description}</p>
                    <ul className="list-unstyled mb-0 d-flex flex-wrap gap-2">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            to="#"
                            className="btn btn-outline-primary btn-sm"
                          >
                            {link}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ExploreIslam;
