import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';

const MyRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<StorePicker/>} />
      <Route path="/store/:storeId" element={<App/>} />
    </Routes>
  </BrowserRouter>
)

export default MyRouter;
