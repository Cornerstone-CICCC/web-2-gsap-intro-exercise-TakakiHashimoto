// PUT YOUR CODE HERE
const pageTimeline = gsap.timeline({ repeat: true });

pageTimeline
  .from(".red", {
    x: "-100%",
    y: "-100%",
  })
  .from(".green", {
    x: "100%",
    y: "-100%",
  })
  .from(".blue", {
    x: "100%",
    y: "100%",
  })
  .from(".yellow", {
    x: "-100%",
    y: "100%",
  })
  .to(".red", {
    borderRadius: "50%",
    left: "100vw",
    x: "-100%",
    backgroundColor: "green",
    duration: 1,
  })
  .to(
    ".green",
    {
      borderRadius: "50%",
      top: "100vh",
      y: "-100%",
      backgroundColor: "blue",
      duration: 1,
    },
    "<"
  )
  .to(
    ".blue",
    {
      borderRadius: "50%",
      left: 0,
      x: 0,
      backgroundColor: "yellow",
      duration: 1,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      borderRadius: "50%",
      top: 0,
      y: 0,
      backgroundColor: "red",
      duration: 1,
    },
    "<"
  )
  .to(".red", {
    x: "100%",
    duration: 1,
  })
  .to(
    ".green",
    {
      x: "100%",
      duration: 1,
    },
    "<"
  )
  .to(
    ".blue",
    {
      x: "-100%",
      duration: 1,
    },
    "<"
  )
  .to(
    ".yellow",
    {
      x: "-100%",
      duration: 1,
    },
    "<"
  );
