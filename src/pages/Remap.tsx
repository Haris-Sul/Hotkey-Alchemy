import { useEffect, useState } from "react";
import rune from "../assets/rune.png";
import HotkeyForm from "../components/HotkeyForm";
import HotkeyList from "../components/HotkeyList";
import GeneratedCode from "../components/GeneratedCode";
import { Hotkey } from "../types/hotkey";

const Remap = () => {
  const [selected, setSelected] = useState<string | null>(null);
  
  const [hotkeys, setHotkeys] = useState<Hotkey[]>(() => {
    const saved = localStorage.getItem("hotkeys");
    const initialValue: Hotkey[] = saved ? JSON.parse(saved) : [];
    return initialValue || [];
  });

  // useEffect to save hotkeys to local storage when hotkeys changes
  useEffect(() => {
    localStorage.setItem("hotkeys", JSON.stringify(hotkeys));
  }, [hotkeys]);

  const updateHotkey = (keyFrom: string, keyTo: string, type: string) => {
    setHotkeys((currentHotkeys) =>
      currentHotkeys.map((hotkey) =>
        hotkey.id === selected ? { ...hotkey, keyFrom, keyTo, type } : hotkey
      )
    );
    setSelected(null);
  };

  const addNewHotkey = (keyFrom: string, keyTo: string, type: string) => {
    setHotkeys((currentHotkeys) => [
      ...currentHotkeys,
      { id: crypto.randomUUID(), keyFrom, keyTo, type },
    ]);
  };

  const deleteHotkey = (id: string) => {
    setHotkeys((currentHotkeys) => {
      return currentHotkeys.filter((hotkey) => hotkey.id !== id);
    });
  };

  const resetHotkeys = () => {
    setHotkeys([]);
    setSelected(null);
  };

  console.log(hotkeys);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center">
        Create your custom layout
      </h2>

      <div className="flex justify-evenly items-baseline my-10">
        <div className="flex flex-col flex-grow max-w-sm">
          <HotkeyList
            hotkeys={hotkeys}
            resetHotkeys={resetHotkeys}
            deleteHotkey={deleteHotkey}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="flex flex-col max-w-lg">
          <HotkeyForm
            selected={selected}
            hotkeys={hotkeys}
            addNewHotkey={addNewHotkey}
            updateHotkey={updateHotkey}
          />
          <img
            className="mx-auto mt-16"
            src={rune}
            alt="mystical keyboard"
            width={200}
          />
        </div>

        <GeneratedCode hotkeys={hotkeys} />
      </div>
    </div>
  );
};

export default Remap;
