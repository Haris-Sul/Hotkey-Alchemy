import RemapButton from "./RemapButton";

interface HotkeyProps {
  id: string;
  keyFrom: string;
  keyTo: string;
  deleteHotkey: (id: string) => void;
  selected: string | null;
  setSelected: (id: string | null) => void;
}

const HotkeyItem = ({
  id,
  keyFrom,
  keyTo,
  deleteHotkey,
  selected,
  setSelected,
}: HotkeyProps) => {
  
  // deselects if already selected, otherwise selects new hotkey
  const toggleSelected = (id: string) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <li
      className={`flex items-center space-x-4 p-4 ${selected === id ? "bg-bright" : "bg-white"}`}>
      <RemapButton color="warning" onClick={() => deleteHotkey(id)}>
        Delete
      </RemapButton>
      <div className="flex-grow text-dark text-xl">
        <p className="font-bold text-secondary">
          {keyFrom} ➡ {keyTo}
        </p>
      </div>
      <RemapButton color="secondary" onClick={() => toggleSelected(id)}>
        {selected === id ? "Cancel" : "Edit"}
      </RemapButton>
    </li>
  );
};

export default HotkeyItem;
