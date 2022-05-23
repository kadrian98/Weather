const countdown = () => {
  const countDate = new Date("December 6, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = (countDate - now) / 1000 / 60 / 60 / 24;

  const daysToArrive = Math.trunc(gap);

  document.querySelector(".counter").innerText =
    "Do obozu pozostało: " + daysToArrive + " dni";
};

countdown();
