import { Link } from "react-router-dom";

const InANutshell = () => (
  <div className="container py-5">
    <h1 className="text-primary mb-3">In A Nutshell</h1>
    <p>
      Short, printable fact sheets in multiple languages about Islamic beliefs and Shi’ism.
    </p>
    <Link to="/#special-projects" className="btn btn-outline-secondary mb-4">&larr; Back to Special Projects</Link>
  </div>
);

export default InANutshell;
