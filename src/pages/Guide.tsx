import keebAlchemy from "../assets/keeb-alchemy.png";
import Card from "../components/Card";
import { guideData } from "../constants/guideData";

const Guide = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Begin Your Journey Here
      </h2>
      <img
        className="mx-auto mb-16"
        src={keebAlchemy}
        alt="mystical keyboard"
        width={500}
      />
      {/* Display guide cards using grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16">
        {guideData.map((item, index) => ( 
          <Card
            key={index}
            title={item.heading}
            content={item.details}
            buttonText={item.buttonText}
            link={item.link}
            variant="light"
            width="max-w-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Guide;
