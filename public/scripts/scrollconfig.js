import scrollToSmooth, { easeInOutCirc } from "./scrolltosmooth.esm.js";

let smoothScroll = new scrollToSmooth("a", {
  targetAttribute: "href",
  duration: 800,
  durationRelative: true,
  durationMin: 300,
  durationMax: 1000,
  easing: easeInOutCirc,
  topOnEmptyHash: true,

  onScrollStart: (data) => {
    // do something
  },
  onScrollUpdate: (data) => {
    // do something
  },
  onScrollEnd: (data) => {},
  offset: "80",
});

smoothScroll.init();
