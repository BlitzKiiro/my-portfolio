import anime from "animejs";

const splashAnimation = async () => {
  const bracketsGroup = ["#left-bracket", "#right-bracket"];
  const timeline = anime.timeline();

  timeline
    .add({
      targets: bracketsGroup,
      scale: [1.5],
      duration: 1100,
      filter: "grayscale(0%)",
      easing: "spring(1, 80, 10, 1)",
    })
    .add(
      {
        targets: ["#name-block"],
        width: [0, "100%"],
        margin: 8,
        easing: "easeInOutExpo",
        duration: 500,
      },
      "-=1000"
    )
    .add(
      {
        targets: ["#azmy"],
        scale: [0, 1.0],
        duration: 100,
        easing: "linear",
      },
      "-=700"
    )
    .add(
      {
        targets: ["#slash"],
        scale: [0, 1],
        rotateZ: [-45, 0],
        duration: 1200,
      },
      "-=400"
    )
    .add({
      targets: ["#logo-container"],
      scale: [1, 0],
      delay: 200,
      duration: 500,
      easing: "easeInOutQuint",
    })
    .add({
      targets: ["#splash-container"],
      opacity: 0,
      duration: 400,
      easing: "easeInOutQuint",
    });
  await timeline.finished;
};

export { splashAnimation };
