//Animation du header

window.onload = function () {
  const homeHeader = document.querySelector(".home-header");
  if (homeHeader) {
    homeHeader.style.opacity = "1";
  }
};

// Animation des cartes accueil

document.addEventListener("DOMContentLoaded", function () {
  let cards = document.querySelectorAll(".prestation .card");
  let hasAnimated = false;

  function checkCardsVisibility() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
      let cardTop = card.getBoundingClientRect().top + scrollTop;
      if (scrollTop + windowHeight - cardTop > 50 && !hasAnimated) {
        setTimeout(() => {
          card.classList.add("animate");
        }, index * 300);
      }
    });

    if (
      scrollTop + windowHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      hasAnimated = true;
    }
  }

  window.addEventListener("scroll", checkCardsVisibility);
  checkCardsVisibility();
});

// Animation des cartes service

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".container-card .card.not-animated");

  const cardObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("not-animated");
          }, cardsArray.indexOf(entry.target) * 200);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -50px 0px",
    }
  );

  const cardsArray = Array.from(cards);
  cardsArray.forEach((card) => {
    cardObserver.observe(card);
  });
});

// Animation des image page About

document.addEventListener("DOMContentLoaded", function () {
  const imagesLeft = document.querySelectorAll(".image-left");
  const imagesRight = document.querySelectorAll(".image-right");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imgElement = entry.target.querySelector("img");
          imgElement.style.transform = "translateX(0)";
          imgElement.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -50px 0px",
    }
  );

  imagesLeft.forEach((image) => {
    imageObserver.observe(image);
  });

  imagesRight.forEach((image) => {
    imageObserver.observe(image);
  });
});

// Animations des titres page About

document.addEventListener("DOMContentLoaded", function () {
  const imagesLeft = document.querySelectorAll(".image-left");
  const imagesRight = document.querySelectorAll(".image-right");
  const titlesLeft = document.querySelectorAll(".title-left");
  const titlesRight = document.querySelectorAll(".title-right");

  const elementObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          if (
            element.classList.contains("image-left") ||
            element.classList.contains("title-right")
          ) {
            element.querySelector("img, h2").style.transform = "translateX(0)";
          } else {
            element.querySelector("img, h2").style.transform = "translateX(0)";
          }
          element.querySelector("img, h2").style.opacity = "1";
          observer.unobserve(element);
        }
      });
    },
    {
      rootMargin: "0px 0px -50px 0px",
    }
  );

  [...imagesLeft, ...titlesRight].forEach((element) => {
    elementObserver.observe(element);
  });

  [...imagesRight, ...titlesLeft].forEach((element) => {
    elementObserver.observe(element);
  });
});
