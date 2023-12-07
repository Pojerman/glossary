import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Glossary from "../../pages/glossary/glossary";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Glossary />}/>
      </Routes>
    </BrowserRouter>

  )
}

