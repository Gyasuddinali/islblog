import { Link } from "react-router-dom";

const Supplications = () => (
  <div className="container py-5">
    <h1 className="text-primary mb-3">Islamic Supplications</h1>
    <p>
      Explore a rich collection of supplications (duas), salutations (ziyarat), and recommended acts (a'maal).
    </p>
    <Link to="/#special-projects" className="btn btn-outline-secondary mb-4">&larr; Back to Special Projects</Link>
  </div>
);

export default Supplications;
