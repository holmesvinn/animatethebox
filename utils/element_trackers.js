let timer;
let positions = [];
const defaultAnimation =
  "@keyframes mymove {\nfrom {top: 0px;}\nto {top: 200px;}\n}";
let defaultState;

//method to query a element and its value
const getElementAndValue = (elementId, element = false) => {
  const domElement = document.getElementById(elementId);
  return element ? domElement : domElement ? domElement.value : null;
};

//method to insert a keyframe rule to the stylesheet
const applykeyFramestoStyles = (keyframes) => {
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
  }
  if (
    styleSheet.sheet &&
    styleSheet.sheet.cssRules &&
    styleSheet.sheet.cssRules.length
  )
    styleSheet.sheet.removeRule();
  styleSheet.sheet.insertRule(keyframes, styleSheet.length);
};

//method to get the exact x and y coordinates of the animated box
const getRect = (animElement) => {
  const positionRect = animElement.getBoundingClientRect();
  positions.push({
    x: positionRect.x,
    y: positionRect.y,
    timeStamp: Date.now(),
  });
};

//callback method to create the movement object during animation
const animationStartCallback = (event, elem) => {
  console.log("animationstart");
  timer = setInterval(() => {
    getRect(elem);
  }, 1);
  //TODO: try using the requestAnimationFrame http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
};

//callback method that ends the animation callback
const animationEndCallback = (element) => {
  clearTimeout(timer);
  element.removeEventListener("animationstart", () => {});
  element.removeEventListener("animationend", () => {});
};

//method to track the animation of the html element for given id
const trackAnimation = (animElement, callback) => {
  animElement.addEventListener("animationstart", () => {
    animationStartCallback(event, animElement);
  });

  animElement.addEventListener("animationend", () => {
    animationEndCallback(animElement);
    callback(positions);
  });
};

//method to get the default values of the built in form fields in the page
const getDefaultValue = (state) => {
  defaultState = JSON.parse(localStorage.getItem("appState"));
  switch (state) {
    case "lastanimation":
      return defaultState?.keyframes
        ? defaultState?.keyframes
        : defaultAnimation;
    case "timeinseconds":
      return defaultState?.duration ? defaultState.duration : "1";
    case "bezier":
      return defaultState?.bezier ? defaultState.bezier : "1,1,0.5,0.5";
  }
};

const updateAppState = (appState) => {
  localStorage.setItem("appState", JSON.stringify(appState));
};
