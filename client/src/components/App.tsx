import React, { useState } from 'react';
import NumberInput from './NumberInput';
import DisplayNumbers from './DisplayNumbers';

export default function App() {
  const [list, setList] = useState<number[]>([]);
  return (
    <>
      <h1>Fibonacci Sequence</h1>
      <NumberInput setList={setList} />
      <DisplayNumbers />
    </>
  );
}
