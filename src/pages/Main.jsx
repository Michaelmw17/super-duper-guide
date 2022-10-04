import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Create from '../pages/Create';
import Event from '../pages/Event';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/create" element={<Create />} exact />
      <Route path="/event" element={<Event />} exact />
    </Routes>
  );
};

export default Main;
