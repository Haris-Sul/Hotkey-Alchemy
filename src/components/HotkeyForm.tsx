import { useRef, useState, useEffect } from "react";
import ButtonHeader from "./ButtonHeader";
import FromInput from "./FromInput";
import ToInput from "./ToInput";
import TypeSelector from "./TypeSelector";
import { Hotkey } from "../types/hotkey";

interface HotkeyFormProps {
  selected: string | null;
  hotkeys: Hotkey[];
  addNewHotkey: (keyFrom: string, keyTo: string, type: string) => void;
  updateHotkey: (keyFrom: string, keyTo: string, type: string) => void;
}

const HotkeyForm = ({ selected, hotkeys, addNewHotkey, updateHotkey }: HotkeyFormProps) => {
  const [keyFrom, setKeyFrom] = useState<string>("");
  const [keyTo, setKeyTo] = useState<string>("");
  const [type, setType] = useState<string>("text");
  const keyFromRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // when deselected by pressing cancel
    if (!selected) {
      clearFormFields();
    } else {
      // get values of selected hotkey since it's being edited
      const selectedHotkey = hotkeys.find((hotkey) => hotkey.id === selected);
      if (selectedHotkey) {
        setType(selectedHotkey.type);
        setKeyFrom(selectedHotkey.keyFrom);
        setKeyTo(selectedHotkey.keyTo);
      }
    }
  }, [selected]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyFrom || !keyTo) return;

    if (!selected) {
      if (hotkeys.find((hotkey) => hotkey.keyFrom === keyFrom)) {
        alert("Hotkey already exists");
        return;
      }
      addNewHotkey(keyFrom, keyTo, type);
    } else {
      updateHotkey(keyFrom, keyTo, type);
    }

    // Shift focus to keyFrom input
    if (keyFromRef.current) {
      keyFromRef.current.focus();
    }
    clearFormFields();
  }

  const clearFormFields = () => {
    setKeyFrom("");
    if (type !== "listSpecial") {
      setKeyTo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ButtonHeader
        headerText="Add/Edit Hotkey"
        buttonColor="secondary"
        buttonText="Apply"
      />

      <div className="flex space-x-2">
        <FromInput
          keyFrom={keyFrom}
          setKeyFrom={setKeyFrom}
          keyFromRef={keyFromRef}
        />
        <p className="text-4xl">➡</p>
        <ToInput keyTo={keyTo} setKeyTo={setKeyTo} type={type} />
      </div>

      <TypeSelector type={type} setType={setType} setKeyTo={setKeyTo} />
    </form>
  );
};

export default HotkeyForm;
