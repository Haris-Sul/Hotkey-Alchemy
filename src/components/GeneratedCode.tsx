import { useEffect, useState } from "react";
import { AUTOHOTKEY_TEMPLATE } from "../constants/autoHotkeyTemplate";
import ButtonHeader from "./ButtonHeader";
import { Hotkey } from "../types/hotkey";

interface GeneratedCodeProps {
  hotkeys: Hotkey[];
}

const GeneratedCode = ({ hotkeys }: GeneratedCodeProps) => {
  const [generatedCode, setGeneratedCode] = useState("");

  // generate ahk code when hotkeys change
  useEffect(() => {
    setGeneratedCode(generateAutoHotkeyCode());
  }, [hotkeys]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(generatedCode)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const generateAutoHotkeyCode = () => {
    // join hotkeys with new line and indent, avoiding extra new line when no hotkeys
    const formatHotkeys = (hotkeys: string[]) =>
      hotkeys.length ? hotkeys.join("\n    ") + "\n" : "";

    const textHotkeys = hotkeys
      .filter(({ type }) => type === "text")
      .map((hotkey) => `$${hotkey.keyFrom}::SendText("${hotkey.keyTo}")`);

    const specialHotkeys = hotkeys
      .filter(
        ({ type, keyTo }) =>
          ["listSpecial", "customSpecial"].includes(type) && keyTo !== "CapsLock"
      )
      .map((hotkey) => `$${hotkey.keyFrom}::Send("{${hotkey.keyTo}}")`);

    const toggleHotkeys = hotkeys
      .filter(({ keyTo }) => keyTo === "CapsLock")
      .map((hotkey) => `$${hotkey.keyFrom}::CapsLock`);

    return AUTOHOTKEY_TEMPLATE.replace("{textHotkeys}", formatHotkeys(textHotkeys))
      .replace("{specialHotkeys}", formatHotkeys(specialHotkeys))
      .replace("{toggleHotkeys}", formatHotkeys(toggleHotkeys));
  };

  return (
    <div>
      <ButtonHeader
        headerText="AutoHotkey Code"
        buttonColor="bright2"
        buttonText="Copy"
        onButtonClick={copyToClipboard}
      />

      <pre className="p-8 text-lg bg-dark text-bright rounded">
        <code>{generatedCode}</code>
      </pre>
    </div>
  );
};

export default GeneratedCode;
