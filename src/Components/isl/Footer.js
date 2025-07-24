import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">

          {/* New Popular */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning mb-3">New Popular</h5>
            <ul className="list-unstyled small" style={{ maxHeight: "400px", overflowY: "auto" }}>
              {[
                "The 4-Step Approach by Islam to Ban Alcohol - Our Prophet 7 - 169/169",
                "Aftermath of Uhud 4/4: Banu Nadir Plans To Kill The Prophet - Our Prophet 7 - 168/169",
                "Aftermath of Uhud 3/4: Tragedy of Raji & Bir Maona - Our Prophet 7 - 167/169",
                "Aftermath of Uhud 2/4: Prophet Wants Medina to Mourn Hamza - Our Prophet 7 - 166/169",
                "Aftermath of Uhud 1/4: Examining Prophet's Oath to Mutilate Pagan Bodies - Our Prophet 7 - 165/169",
                "Examining the Role of Women in the Battle of Uhud - Our Prophet 7 - 164/169",
                "What Happened to Wahshi, the Killer of Hamza Ibn Abdul Muttalib? - Our Prophet 7 - 163/169",
                "Battle of Uhud 6: Who were some of the Martyrs? - Our Prophet 7 - 162/169",
                "Battle of Uhud 5: Injuries of the Prophet and the Fate of his Attackers - Our Prophet 7 - 161/169",
                "Stories of Companions Who Got Injured Defending the Prophet at Uhud - Our Prophet 7 - 160/169",
                "Quranic Verses on the Companions who fled the Battle of Uhud - Our Prophet 7 - 159/169",
                "Battle of Uhud 4: Martyrdom of Hamza & The News of Prophet's Assassination - Our Prophet 7 - 158/169"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <small>{item}</small><br />
                  <em className="text-muted">Sayed Mohammed Baqer al-Qazwini</em>
                </li>
              ))}
            </ul>
          </div>

          {/* Journal Archives */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Journal Archives</h5>
            <ul className="list-unstyled small">
              {[
                "Introducing Islam",
                "Islam and Christianity",
                "Conversion to Islam",
                "Muslim Practices",
                "Tutorials",
                "Spirituality"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-light text-decoration-none">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Who are Shi'a & Sunni? */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Who are Shi'a & Sunni?</h5>
            <ul className="list-unstyled small">
              {[
                "Introducing the Ahlul Bayt",
                "Shi'a beliefs explained",
                "Unity between Shi'a & Sunni",
                "Why they became Shi'a",
                "Responses to Misconceptions",
                "Debates & discussions",
                "Resources for Further Research"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-light text-decoration-none">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kids Corner */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Kids Corner</h5>
            <ul className="list-unstyled small">
              {[
                "Texts For Children",
                "Texts For Youth",
                "Teaching Tools & Materials",
                "Madressa Syllabus & Curriculum",
                "Games & Quizzes",
                "Islamic Clipart",
                "Colouring Images",
                "All Categories"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-light text-decoration-none">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Projects */}
          <div className="col-md-2 mb-4">
            <h5 className="text-warning mb-3">Special Projects</h5>
            <ul className="list-unstyled small">
              {[
                "Al-Islam TV",
                "Ask A Question",
                "Event of Ghadir Khumm",
                "In A Nutshell",
                "Islamic Supplications",
                "Al-Qur'an",
                "Tahrif in Islamic Texts"
              ].map((item, idx) => (
                <li key={idx} className="mb-2">
                  <a href="#" className="text-light text-decoration-none">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Support & Footer Bottom */}
        <div className="row py-3">
          <div className="col-md-6 small">
            <p>
              <strong>Support Us</strong> – The Al-Islam.org site and the DILP are entirely supported by individual donors and well wishers. If you regularly visit this site and wish to show your appreciation, or if you wish to see further development of Al-Islam.org, please{" "}
              <a href="#" className="text-info text-decoration-none">donate online</a>.
            </p>
            <p className="text-muted small">
              IMPORTANT: All content hosted on Al-Islam.org is solely for non-commercial purposes and with the permission of original copyright holders. Any other use of the hosted content, such as for financial gain, requires express approval from the copyright owners.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3">
            <img
              src="https://al-islam.org/sites/all/themes/al_islam_bootstrap/images/book-pile.png"
              alt="footer-logo"
              height={40}
              className="me-md-3"
            />
            <small>© Ahlul Bayt Digital Islamic Library Project 1995-2025</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
