import React from "react";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";
import Read from "./components/Read";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
