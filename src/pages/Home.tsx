import keeb1 from "../assets/keeb-rune.png";
import keeb2 from "../assets/keeb-back.png";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <h2 className="pt-16 text-3xl font-semibold text-center">
        Unlock your keyboard's potential today
      </h2>
      <h3 className="py-10 text-2xl font-medium text-center">
        Replace your caps lock with the power to accelerate and customise your
        typing experience
      </h3>

      <div className="flex flex-col items-center my-10 gap-8">
        <div className="flex items-center gap-32">
          <Card
            title="Revolutionise your typing experience."
            content="Hotkey Alchemy transforms your Caps Lock into a key for unleashing a new layer that you design."
            buttonText="Get Started"
            variant="dark"
            link="/guide"
          />
          <img
            className="mx-auto"
            src={keeb1}
            alt="mystical keyboard"
            width={500}
          />
        </div>

        <div className="flex items-center gap-32">
          <img
            className="mx-auto"
            src={keeb2}
            alt="mystical keyboard"
            width={500}
          />
          <Card
            title="Expand your keyboard and optimise your workflow."
            content="The way you type is unique. Why should your keyboard be any different?"
            buttonText="Customise Now"
            link="/remap"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
