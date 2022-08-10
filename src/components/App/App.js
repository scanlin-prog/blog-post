import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import BlogPost from '../BlogPost/BlogPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
