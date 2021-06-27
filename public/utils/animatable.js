const animatableList = {
  "perspective-xy": {
    keyframe:
      "@keyframes mymove {\n0% {transform: perspective(500px) rotateX(0deg) rotateY(0deg);}\n50% {transform: perspective(500px) rotateX(90deg) rotateY(90deg);}\n100% {transform: perspective(500px) rotateX(0deg) rotateY(0deg);}\n}",
    apply: [],
  },

  move: {
    keyframe:
      "@keyframes mymove {\n0% {left:0px; top:0px}\n50% {left:200px; top:200px}\n100% {left:0px; top:0px}\n}",

    apply: [],
  },
  "open-door": {
    keyframe:
      "@keyframes mymove {\n0% {transform: perspective(500px) rotate3d(0,1,0,0deg);}\n50% {transform: perspective(500px) rotate3d(0,1,0,-180deg);}\n100% {transform: perspective(500px) rotate3d(0,1,0,0deg);}\n}",
    apply: [
      {
        "transform-origin": "100% 50%",
      },
    ],
  },

  "static-corner": {
    keyframe:
      "@keyframes mymove {\n0% {transform: perspective(500px) rotate3d(1,1,0,0deg);}\n50% {transform: perspective(500px) rotate3d(1,1,0,180deg);}\n100% {transform: perspective(500px) rotate3d(1,1,0,0deg);}\n}",
    apply: [],
  },

  "zoomed flip-y": {
    keyframe:
      "@keyframes mymove {\n0% {transform: perspective(500px) rotateY(0deg);}\n50% {transform: perspective(500px) translateZ(250px) rotateY(180deg);}\n100% {transform: perspective(500px) rotateY(0deg);}\n}",
    apply: [],
  },

  "background-color": {
    keyframe:
      "@keyframes mymove {\nfrom {background-color: green;}\nto {background-color: pink;}\n}",
    apply: [],
  },

  "flip-x": {
    keyframe:
      "@keyframes mymove {\n0% {transform: perspective(500px) rotateX(0deg);}\n50% {transform: perspective(500px) rotateX(360deg);}\n100% {transform: perspective(500px) rotateX(0deg);}\n}",
    apply: [],
  },

  "background-position": {
    keyframe:
      "@keyframes mymove {\nfrom {background-position: bottom right;}\nto {background-position: top left;}\n}",
    apply: [
      {
        background:
          'url("https://png.pngtree.com/png-clipart/20190619/original/pngtree-pixel-rainbow-heart-png-image_3994643.jpg")',
      },
    ],
  },

  "bakground-size": {
    keyframe:
      "@keyframes mymove {\n0% {background-size: 100px 100px;}\n50% {background-size: 200px 200px;}\n100% {background-size: 100px 100px;}\n}",
    apply: [
      {
        background:
          'url("https://png.pngtree.com/png-clipart/20190619/original/pngtree-pixel-rainbow-heart-png-image_3994643.jpg")',
      },
    ],
  },

  "border-width": {
    keyframe:
      "@keyframes mymove {\n0% {border-width: 0px;}\n50% {border-width: 20px;}\n100% {border-width: 0px;}\n}",
    apply: [
      {
        border: "solid orange",
      },
    ],
  },

  "scaled-rotation": {
    keyframe:
      "@keyframes mymove {\n0% {transform: scale(1) rotate(0deg);}\n50% {transform: scale(5) rotate(360deg);}\n100% {transform: scale(1) rotate(0deg);}\n}",
    apply: [],
  },

  "border-color": {
    keyframe:
      "@keyframes mymove {\n0% {border-color: orange;}\n50% {border-color: pink;}\n100% {border-color: green;}\n}",
    apply: [
      {
        border: "20px solid orange",
      },
    ],
  },

  // "individual-borders": {
  //   keyframe:
  //     "@keyframes mymove {\n0% {border-bottom: 1px solid green; \n\t border-top: 1px solid pink; \n\tborder-left: 1px solid yellow; \n\t border-right: 1px solid black}\n50% {border-bottom: 100px solid black; \n\t border-top: 100px solid green; \n\tborder-left: 100px solid pink; \n\t border-right: 100px solid yellow;}\n100% {border-bottom: 1px solid green; \n\t border-top: 1px solid pink; \n\tborder-left: 1px solid yellow; \n\t border-right: 1px solid black\n}",
  //   apply: [
  //     {
  //       border: "2px solid red",
  //     },
  //   ],
  // },

  "border-radius": {
    keyframe:
      "@keyframes mymove {\n0% {border-radius: 0px}\n50% {border-radius: 52px 332px 307px 45px;}\n100% {border-radius: 0px;}\n}",

    apply: [
      {
        border: "50px solid orange",
      },
    ],
  },

  "box-shadow": {
    keyframe:
      "@keyframes mymove {\n0% {box-shadow: 25px 25px 15px 0px red;}\n50% {box-shadow: 50px 50px 0px 20px green;}\n100% {box-shadow: 25px 25px 15px 0px red;}\n}",

    apply: [],
  },

  width: {
    keyframe:
      "@keyframes mymove {\n0% {width: 200px}\n50% {width: 500px}\n100% {width: 200px}\n}",
    apply: [],
  },

  rotation: {
    keyframe:
      "@keyframes mymove {\n0% {transform: rotate(0deg);}\n50% {transform: rotate(360deg);}\n100% {transform: rotate(0deg);}\n}",
    apply: [],
  },
  scale: {
    keyframe:
      "@keyframes mymove {\n0% {transform: scale(1);}\n50% {transform: scale(20);}\n100% {transform: scale(1);}\n}",
    apply: [],
  },
};
