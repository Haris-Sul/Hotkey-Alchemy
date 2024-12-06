const Footer = () => {
  return (
    <footer className="bg-teal-50 p-4 text-secondary">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <h6 className="text-xl">Hotkey Alchemy</h6>
          <p>Reinventing Keyboard Remapping</p>
        </div>

        <p className="self-end">
          Copyright ©2024 Hotkey Alchemy. All rights reserved.
        </p>

        <div className="flex flex-col text-right">
          <h6 className="text-xl">Contact</h6>
          <p>haris.sul10@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
