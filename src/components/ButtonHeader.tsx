import RemapButton from "./RemapButton";

interface ButtonHeaderProps {
  headerText: string;
  buttonColor: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const ButtonHeader = ({ headerText, buttonColor, buttonText, onButtonClick }: ButtonHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="py-4 text-2xl font-medium">{headerText}</h3>
      <RemapButton
        color={buttonColor}
        onClick={onButtonClick}
        className={`bg-white text-${buttonColor} border-${buttonColor} border-2 rounded-md px-2 py-1 hover:bg-${buttonColor} hover:text-white hover:shadow-md`}>
        {buttonText}
      </RemapButton>
    </div>
  );
};

export default ButtonHeader;
