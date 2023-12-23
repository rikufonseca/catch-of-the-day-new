import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePicker from './StorePicker';

const MyRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<StorePicker/>} />
    </Routes>
  </BrowserRouter>
)

export default MyRouter;
