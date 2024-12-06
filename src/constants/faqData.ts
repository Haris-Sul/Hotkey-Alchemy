export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "Where does Caps Lock go if its for activating my layer?",
    answer: "Hotkey Alchemy lets you easily remap Caps Lock to one of the keys in this new layer, making better use of this key's optimal spot."
  },
  {
    question: "Which keys can I remap to another key?",
    answer: "The key you remap should be a character key including letters, numbers and symbols, but you can remap this to different types."
  },
  {
    question: "What does the Normal type let me remap a key to?",
    answer: "Normal lets you remap to any character, string of characters or sentence. For example you could set up 'e' to type your email."
  },
  {
    question: "What does the Special Key type let me remap a key to?",
    answer: "Special Key are those that perform an action rather than producing a character. You could change 'm' to Mute or 'd' to Delete "
  },
  {
    question: "What does the Custom Special Key type let me remap a key to?",
    answer: "AHK has many more Special Keys so if you want one that's not included here you can find out its name here and enter this as a Custom Special Key. See the Guide page for more info."
  },
  {
    question: "What version of AutoHotkey does Hotkey Alchemy use?",
    answer: "Hotkey Alchemy produces AHK v2 code, but you can keep using AHK v1 too. If both are installed it can automatically detect the version and uses that when you run your programs."
    },
  {
    question: "What Operating Systems does this program work for?",
    answer: "As it produces AutoHotkey code, which is made for Windows it won't work on other operating systems. A cross platform tool that supports MacOS which may interest you is Espanso. For Linux there's also Autokey for general automation and AHK_X11 which mirrors AHK."
  },
  {
    question: "Which version of AutoHotkey should I learn?",
    answer: "If you are new to AutoHotkey, it is recommended to start with AHK v2 as it is the latest version and has more features."
  }
];