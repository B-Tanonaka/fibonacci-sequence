import React, { useState } from 'react';

export default function NumberInput() {
  const [fibN, setFibN] = useState<string>('');
  return (
    <form>
      <input
        type="text"
        name="number"
        value={fibN}
        placeholder="Enter a number"
        onChange={(e) => setFibN(e.target.value)}
      />
      <button type="submit">Enter</button>
    </form>
  );
}
