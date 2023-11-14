import React from 'react';
import Navbar from "./components/Navbar";
import Breaker from './components/Breaker';
import Posts from './components/Posts';
import Comment from './components/Comment';

function HomePage() {
    return (
      <div className="HomePage">
        <Navbar />
        <Breaker />
        <Posts />
        <Comment />
      </div>
    );
  }
  
  export default HomePage;