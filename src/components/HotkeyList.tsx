import HotkeyItem from "./HotkeyItem";
import ButtonHeader from "./ButtonHeader";
import { Hotkey } from "../types/hotkey";

interface HotkeyListProps {
  hotkeys: Hotkey[];
  resetHotkeys: () => void;
  deleteHotkey: (id: string) => void;
  selected: string | null;
  setSelected: (id: string | null) => void;
}

const HotkeyList = ({
  hotkeys,
  resetHotkeys,
  deleteHotkey,
  selected,
  setSelected,
}: HotkeyListProps) => {
  
  return (
    <>
      <ButtonHeader
        headerText="Current Hotkeys"
        buttonColor="warning"
        buttonText="Reset All"
        onButtonClick={resetHotkeys}
      />
      <ul className="border-2 border-black divide-y divide-black rounded-sm">
        {hotkeys.map((hotkey) => (
          <HotkeyItem
            {...hotkey}
            key={hotkey.id}
            deleteHotkey={deleteHotkey}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </ul>
      {hotkeys.length === 0 && (
        <p className="text-center py-4 text-xl">
          Add a hotkey or hotstring to get started
        </p>
      )}
    </>
  );
};

export default HotkeyList;
