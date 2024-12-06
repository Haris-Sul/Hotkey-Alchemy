import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  content: string;
  buttonText?: string;
  variant?: "default" | "dark" | "light";
  link?: string;
  width?: string;
}

const Card = ({ title, content, buttonText, variant = "default", link, width = "max-w-lg" }: CardProps) => {
  const navigate = useNavigate();

  // Define styling variants for the card
  const variants = {
    default: {
      cardClass: "bg-secondary2 text-white",
      titleClass: "text-bright",
      buttonClass: "bg-bright hover:bg-bright2 text-black",
    },
    dark: {
      cardClass: "bg-dark text-white",
      titleClass: "text-bright2",
      buttonClass: "bg-primary hover:bg-secondary text-white",
    },
    light: {
      cardClass: "bg-white text-black",
      titleClass: "text-secondary2",
      buttonClass: "bg-secondary hover:bg-blue-600 text-white",
    },
  };
  // Destructure the styles based on the variant prop
  const { cardClass, titleClass, buttonClass } =
    variants[variant] || variants.default;

  // Enable the button to navigate to an external link or internal route
  const handleClick = () => {
    if (!link) return;
    if (link.startsWith("http")) {
      window.location.href = link;
    } else {
      navigate(link);
    }
  };

  return (
    <div
      className={`rounded-lg p-7 mx-auto text-left shadow-lg flex-shrink-0 ${cardClass} ${width}`}>
      <h2 className={`text-xl pb-5 font-semibold ${titleClass}`}>{title}</h2>
      <p className="text-lg font-medium">{content}</p>
      {buttonText && link && (
        <button
          onClick={handleClick}
          className={`font-medium mt-5 py-2 px-4 rounded ${buttonClass}`}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
