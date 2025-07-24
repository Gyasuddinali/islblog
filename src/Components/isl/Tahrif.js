import { Link } from "react-router-dom";
const Tahrif = () => (
  <div className="container py-5">
    <h1 className="text-primary mb-3">Tahrif in Islamic Texts</h1>
    <p>
      Investigate documented cases of textual distortion in tafsir, hadith, and Islamic history.
    </p>
    <Link to="/#special-projects" className="btn btn-outline-secondary mb-4">&larr; Back to Special Projects</Link>
  </div>
);

export default Tahrif;
