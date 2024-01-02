import React, { useState } from 'react';
import './App.css'

const LikeHandler = ({ children }) => {
  const [Like, setLike] = useState(0);

  const handleLike = () => {
    setLike(Like + 1);
  };

  return children({ handleLike, Like });
};

const LikeImage = () => {
  return (
    <LikeHandler>
      {({ handleLike, Like }) => (
        <div>
          <button onClick={handleLike}>Like Image {Like}</button>
        </div>
      )}
    </LikeHandler>
  );
};

const LikePost = () => {
  return (
    <LikeHandler>
      {({ handleLike, Like }) => (
        <div>
          <button onClick={handleLike}>Like Post {Like}</button>
        </div>
      )}
    </LikeHandler>
  );
};

function App() {
  return (
    <div className='container'>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost />
        <LikeImage />
      </div>
    </div>
  );
}

export default App;
