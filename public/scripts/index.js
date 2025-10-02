const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("glass-effect");
  } else {
    header.classList.remove("glass-effect");
  }
});

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && key === "i") ||
    (e.ctrlKey && e.shiftKey && key === "j") ||
    (e.ctrlKey && e.shiftKey && key === "c") ||
    (e.ctrlKey && key === "u") ||
    (e.ctrlKey && key === "s") ||
    (e.metaKey && e.altKey && key === "i") ||
    (e.metaKey && e.altKey && key === "j") ||
    (e.metaKey && key === "s") ||
    (e.metaKey && key === "u")
  ) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Mau Lihat Apa Kak");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const missionToggles = document.querySelectorAll(".mission-toggle");

  missionToggles.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.dataset.target;
      const content = document.getElementById(targetId);
      const icon = this.querySelector(".mission-icon");
      const missionCard = this.closest(".mission-card");

      if (content.classList.contains("hidden")) {
        missionToggles.forEach((otherButton) => {
          if (otherButton !== button) {
            const otherTargetId = otherButton.dataset.target;
            const otherContent = document.getElementById(otherTargetId);
            const otherIcon = otherButton.querySelector(".mission-icon");
            const otherCard = otherButton.closest(".mission-card");

            otherContent.style.maxHeight = "0";
            setTimeout(() => {
              otherContent.classList.add("hidden");
            }, 300);
            otherIcon.classList.remove("rotate-180");
            otherCard.classList.remove("expanded");
          }
        });

        content.classList.remove("hidden");
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        }, 10);
        icon.classList.add("rotate-180");
        missionCard.classList.add("expanded");
      } else {
        content.style.maxHeight = "0";
        setTimeout(() => {
          content.classList.add("hidden");
        }, 300);
        icon.classList.remove("rotate-180");
        missionCard.classList.remove("expanded");
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("bg-opacity-90");
      header.classList.remove("bg-opacity-20");
    } else {
      header.classList.add("bg-opacity-20");
      header.classList.remove("bg-opacity-90");
    }
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const missionCards = document.querySelectorAll(".mission-card");
  missionCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = `opacity 0.6s ease ${
      index * 0.1
    }s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});
