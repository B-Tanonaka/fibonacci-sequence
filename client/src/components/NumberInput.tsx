import React, { useState, FormEvent } from 'react';

export default function NumberInput() {
  const [fibN, setFibN] = useState<number | string>('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
        value={fibN}
        placeholder="Enter a number"
        onChange={(e) => setFibN(e.target.value)}
      />
      <button type="submit">Enter</button>
    </form>
  );
}
