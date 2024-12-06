interface GuideItem {
  heading: string;
  details: string;
  buttonText?: string;
  link?: string;
}

export const guideData: GuideItem[] = [
  {
    heading: "What Hotkey Alchemy is all about",
    details: "Hotkey alchemy remaps a new layer on your keyboard that’s activated while Caps Lock is pressed down. Once you've got things set up, you can type as normal, but now you have custom actions at your fingertips.",
  },
  {
    heading: "Why you might use Hotkey Alchemy",
    details: "Fancy trying Dvorak? Now you can swap keys to suit your typing style. Is backspace or the arrow keys too far away? Bring them to you. Tired of typing the same info again and again? Set keys in your layer to do it for you.",
  },
  {
    heading: "Install AHK",
    details: "After downloading AHK v2, run the setup exe file and follow the installation instructions to get started. You can also have AHK v1 installed if you still want to use it for something else.",
    buttonText: "Download Now",
    link: "https://www.autohotkey.com/download/",
  },
  {
    heading: "Design your new keyboard layout",
    details: "Next, head over to the Remap page and start choosing what you want the keys in your new layer to be able to do. If you don't see a key you want in the Special Keys List, you can find out its name and add it as a Custom Special Key.",
    buttonText: "More Special Keys",
    link: "https://www.autohotkey.com/docs/v2/KeyList.htm",
  },
  {
    heading: "Save your custom code",
    details: "Copy the code Hotkey Alchemy produces into an ahk file e.g. myScript.ahk and make sure to save it. Note that scripts currently can be found in the tray icons where you can right click them to close or reload them to apply changes.",
  },
  {
    heading: "Run the program and try it out!",
    details: "To run the program, simply double click on the file. If you want to check things are working you can try a simple program like this, which should make a small window popup whenever you press Escape:\nEsc:: MsgBox \"You Pressed Escape!\"",
  },
  {
    heading: "Make the program run on startup",
    details: "If you don’t want to manually run the program when you reboot you can make it run automatically on startup. To do this press Windows + R or click on the path bar in explorer and type shell:startup. The startup directory will open, then just place the ahk file with your custom code here.",
  },
  {
    heading: "Discover the world of AHK",
    details: "This is only the beginning! AHK is a powerful tool that can do so much more than just remap keys. You can also use it to launch applications, control your mouse, automate processes and even create tools with interfaces. Explore the endless possibilities of AHK and see what you can create!",
  },
];