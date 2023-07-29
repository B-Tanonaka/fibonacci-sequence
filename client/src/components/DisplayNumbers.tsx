import React from 'react';

export default function DisplayNumbers({ list }: { list: number[] }) {
  return (
    <>
      <div>{list.join(', ')}</div>
      <input type="button" value="Back" className="back" />
    </>
  );
}
