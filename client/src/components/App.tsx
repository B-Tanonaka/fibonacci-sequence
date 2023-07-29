import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NumberInput from './NumberInput';
import DisplayNumbers from './DisplayNumbers';

export default function App() {
  const [list, setList] = useState<number[]>([]);
  return (
    <Router>
      <h1>Fibonacci Sequence</h1>
      <Routes>
        <Route path="/" element={<NumberInput setList={setList} />} />
        <Route path="/list" element={<DisplayNumbers list={list} />} />
      </Routes>
    </Router>
  );
}
