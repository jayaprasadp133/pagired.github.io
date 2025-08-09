
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");

    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname && !link.hasAttribute("target")) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const href = this.getAttribute("href");

                document.body.classList.remove("fade-in");
                document.body.style.opacity = 0;

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            });
        }
    });
});

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  const cardWidth = track.querySelector(".approach-card").offsetWidth + 16; // gap
  currentIndex++;
  if (currentIndex * cardWidth >= track.scrollWidth - track.offsetWidth) {
    currentIndex = 0; // loop back
  }
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  const cardWidth = track.querySelector(".approach-card").offsetWidth + 16;
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = Math.floor((track.scrollWidth - track.offsetWidth) / cardWidth);
  }
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});



