interface TypeSelectorProps {
  type: string;
  setType: (type: string) => void;
  setKeyTo: (keyTo: string) => void;
}

const TypeSelector = ({ type, setType, setKeyTo }: TypeSelectorProps) => {
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setType(newType);
    if (newType === "listSpecial") {
      setKeyTo("CapsLock");
    } else {
      setKeyTo("");
    }
  };
  
  return (
    <>
      <div className="py-4 flex justify-end items-center space-x-5">
        <h3 className="text-xl">Type</h3>
        <select
          value={type}
          onChange={handleTypeChange}
          id="type"
          className="input-style">
          <option value="text">Normal Key/Text</option>
          <option value="listSpecial">Special Key List</option>
          <option value="customSpecial">Custom Special Key</option>
        </select>
      </div>
        {type === "customSpecial" && (
          <p className="text-right py-2 text-xl">Enter a valid AutoHotkey name</p>
        )}
    </>
  );
};

export default TypeSelector;