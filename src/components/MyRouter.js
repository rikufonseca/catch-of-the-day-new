import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const MyRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element= {<StorePicker/>} />
      <Route path="/store/:storeId" element={<App/>} />
      <Route element={NotFound} />
    </Routes>
  </BrowserRouter>
)

export default MyRouter;
