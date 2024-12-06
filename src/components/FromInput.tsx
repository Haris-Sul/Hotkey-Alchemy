import { RefObject } from 'react';

interface FromInputProps {
  keyFrom: string;
  setKeyFrom: (value: string) => void;
  keyFromRef: RefObject<HTMLInputElement>;
}

const FromInput = ({ keyFrom, setKeyFrom, keyFromRef }: FromInputProps) => (
  <input
    ref={keyFromRef}
    value={keyFrom}
    onChange={(e) => setKeyFrom(e.target.value)}
    type="text"
    id="from"
    className="input-style w-11 text-center"
    aria-label="Remap From"
    maxLength={1}
  />
);

export default FromInput;