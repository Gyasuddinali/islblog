import { Link } from 'react-router-dom';

const AlIslamTV = () => (
  <div className="container py-5">
    <h1 className="text-primary mb-3">Al-Islam TV <Link to="/#special-projects" className="btn btn-outline-secondary mb-4">&larr; Back to Special Projects</Link>
</h1>
    <p>
      Lectures, documentaries, and more covering many languages. Delivered by over 140 speakers from across the world and covering a range of topics.
    </p>
  </div>
);

export default AlIslamTV;
