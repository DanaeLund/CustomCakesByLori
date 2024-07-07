document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.querySelector(".image-carousel-button.previous");
  const nextBtn = document.querySelector(".image-carousel-button.next");

  const imageQueue = document.getElementsByClassName("carousel-img");

  let currentIndex = 0;

  nextBtn.onclick = function () {
      imageQueue[currentIndex].style.display = "none";

      if (currentIndex < imageQueue.length - 1) {
          currentIndex += 1;
      } else {
          currentIndex = 0;
      }

      imageQueue[currentIndex].style.display = "flex";
  };

  backBtn.onclick = function () {
      imageQueue[currentIndex].style.display = "none";

      if (currentIndex === 0) {
          currentIndex = imageQueue.length - 1;
      } else {
          currentIndex -= 1;
      }

      imageQueue[currentIndex].style.display = "flex";
  };
});
