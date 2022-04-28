import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <ul>
          <lh>Technologies Used</lh>
          <li>Node.js</li>
          <li>React</li>
          <li>React Redux</li>
          <li>Redux-Saga</li>
          <li>Chance.js</li>
          <li>SweetAlert</li>
          <li>Bootstrap</li>
        </ul>
        <ul>
          <lh>Thanks!</lh>
          <li>Butler Cohort</li>
          <li>Prime Instructors and Staff, especially Dane</li>
          <li>Most of all, my family</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
