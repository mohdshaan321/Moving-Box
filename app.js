window.addEventListener("mousemove", (details) => {
  const box = document.querySelector("#box");

  const xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    box.getBoundingClientRect().width / 2 + 200,
    window.innerWidth - box.getBoundingClientRect().width / 2 - 200,
    details.clientX
  );

  console.log(
    gsap.utils.mapRange(
      0,
      window.innerWidth,
      box.getBoundingClientRect().width / 2 + 200,
      box.getBoundingClientRect().width / 2 - 200,
      details.clientX
    )
  );

  gsap.to("#box", {
    left: xval,
    ease: Power3,
  });
});
