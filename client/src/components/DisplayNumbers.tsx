import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DisplayNumbers({ list }: { list: number[] }) {
  const navigate = useNavigate();
  return (
    <>
      <div>{list.join(', ')}</div>
      <input
        type="button"
        value="Back"
        className="back"
        onClick={() => { navigate('/'); }}
      />
    </>
  );
}
