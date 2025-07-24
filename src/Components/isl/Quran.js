import { Link } from "react-router-dom";

const Quran = () => (
  <div className="container py-5">
    <h1 className="text-primary mb-3">The Holy Qur'an</h1>
    <p>
      Recite and study the Qur'an with over 113 translations and multiple recitations.
    </p>
    <Link to="/#special-projects" className="btn btn-outline-secondary mb-4">&larr; Back to Special Projects</Link>
  </div>
);

export default Quran;
