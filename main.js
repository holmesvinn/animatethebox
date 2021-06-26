let editor;
let styleSheet;

//method to apply the animation to the bot element
const applyAnimation = () => {
  const bot = getElementAndValue("bot", true);
  bot.style.animation = "none";
  const keyframes = editor.getValue();
  applykeyFramestoStyles(keyframes);

  const animationName = editor.getValue().split(" ")[1];
  const duration = getElementAndValue("timeinseconds");
  const animationType = getElementAndValue("animationtype");

  const appState = {
    keyframes: keyframes,
    duration: duration,
    bezier: animationType,
  };
  updateAppState(appState);

  setTimeout(() => {
    bot.style.animation = `${animationName} ${duration}s cubic-bezier(${animationType})`;
  }, 100);
};

//method to initialise the codemirror text area with a value
const initialiseApp = () => {
  editor = CodeMirror.fromTextArea(document.getElementById("textarea"), {
    mode: "css",
    theme: "dracula",
  });
  editor.setValue(getDefaultValue("lastanimation"));
  getElementAndValue("timeinseconds", true).value =
    getDefaultValue("timeinseconds");
  getElementAndValue("animationtype", true).value = getDefaultValue("bezier");
};

//to detect the readiness state change
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initialiseApp();
  }
};
