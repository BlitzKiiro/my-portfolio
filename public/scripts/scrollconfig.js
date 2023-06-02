import scrollToSmooth, { easeInOutCirc } from "./scrolltosmooth.esm.js";

export let smoothScroll = new scrollToSmooth("[data-scrollto]", {
  targetAttribute: "data-scrollto",
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
