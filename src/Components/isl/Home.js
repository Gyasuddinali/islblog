// src/pages/Home.js
import React from 'react';
import Hero from './Hero';
import BookGrid from './BookGrid';
import NewPopular from "./NewPopular";
import JournalArchives from "./JournalArchives";
import ExploreIslam from "./ExploreIslam";
import AllCategories from './AllCategories';
import SpecialProjects from './SpecialProjects'; 
import LastFooter from './LastFooter';
function Home() {
  return (
    <div>
      <Hero />
      <div className="container py-5">
        <h2 className="mb-4 text-primary">Featured Books & Media</h2>
        <BookGrid />
        <NewPopular />
        <JournalArchives />
        <ExploreIslam />
        <div id="categories">
  <AllCategories />
</div>
        <SpecialProjects />
         <LastFooter/>
      </div>
    </div>
  );
}

export default Home;
