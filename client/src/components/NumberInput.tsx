import React, {
  useState,
  FormEvent,
  SetStateAction,
  Dispatch,
} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function NumberInput({ setList }: { setList: Dispatch<SetStateAction<any>> }) {
  const navigate = useNavigate();
  const [fibN, setFibN] = useState<number | string>('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.get('/fibonacci', { params: { n: fibN } });
    setList(res.data);
    navigate('/list');
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
