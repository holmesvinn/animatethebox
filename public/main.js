let editor;
let styleSheet;
let lastApplied;
let lastClicked;
//method to apply the animation to the bot element
const applyAnimation = (direct = false) => {
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

//method to reset the all the applied styles when the box is tried to animate
const resetStyles = () => {
  if (lastClicked) lastClicked.style["box-shadow"] = "";
  const box = document.getElementById("bot");
  lastApplied?.apply?.forEach((style) => {
    box.style[Object.keys(style)[0]] = "";
  });
};
//method to initialise Animatables
const initialiseAnimatables = () => {
  const animatableButtonsParent = document.getElementsByClassName(
    "animatable-butons-wrapper"
  )[0];

  const animateProperties = JSON.parse(JSON.stringify(animatableList));
  Object.keys(animateProperties)?.forEach((cssProperty) => {
    const button = document.createElement("button");
    animatableButtonsParent.appendChild(button);
    button.innerHTML = cssProperty;
    button.classList.add("executebtn");

    button.onclick = () => {
      resetStyles();
      lastApplied = animateProperties[cssProperty];
      lastClicked = button;
      button.style["box-shadow"] = "rgb(176 137 231 / 58%) 2px 3px 0px 2px";
      editor.setValue(animatableList[cssProperty].keyframe);
      animateProperties[cssProperty]?.apply?.forEach((style) => {
        const styleKey = Object.keys(style)[0];
        const styleValue = style[styleKey];
        document.getElementById("bot").style[styleKey] = styleValue;
      });
      setTimeout(() => {
        applyAnimation();
      }, 500);
    };
  });
};

//to detect the readiness state change
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initialiseApp();
    initialiseAnimatables();
  }
};
