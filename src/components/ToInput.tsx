import { specialKeyNames } from "../constants/specialKeyNames";

interface ToInputProps {
  keyTo: string;
  setKeyTo: (value: string) => void;
  type: string;
}

const ToInput = ({ keyTo, setKeyTo, type }: ToInputProps) => {
  if (type === "listSpecial") {
    return (
      <select
        value={keyTo}
        onChange={(e) => setKeyTo(e.target.value)}
        id="to"
        className="input-style w-72">
        {specialKeyNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    );
  } else {
    return (
      <input
        value={keyTo}
        onChange={(e) => setKeyTo(e.target.value)}
        type="text"
        id="to"
        className="input-style px-4 w-72"
        aria-label="Remap To"
      />
    );
  }
};

export default ToInput;