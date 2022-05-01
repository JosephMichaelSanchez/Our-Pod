import React from 'react';
import './InfoPage.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <div className="instructionsDiv">
        <h3>How to use Our Pod</h3>
        <ul>
          <p>Don't have a Pod to join? Create one on the "Create a Pod" page.</p>
          <p>Have a Key Code for an existing pod? Enter your code on the "Join a Pod" page.</p>
          <p>After joining your pod, enter your contact information on the "My House Details" page.</p>
          <p>Now you're ready to head to the "My Pod" page to see your podmates' info and schedule dates!</p>
          <p>If you are an Admin, use the "Add Dates" button on the "My Pod" page to edit the list of dates.</p>
          <p>Admins can also use the "Edit Pod" button to remove members of their pod.</p>
        </ul>
      </div>
    </div>
  );
}

export default InfoPage;
