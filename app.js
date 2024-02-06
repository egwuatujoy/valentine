const btn1 = document.querySelector(".btn-1");
const gif = document.querySelector(".gif-image");
const btn2 = document.querySelector("#btn-2");
btn1.addEventListener("click", () => {
  gif.src = "https://media.giphy.com/media/lnrcBAms1Ro4McHznX/giphy.gif";
  btn2.remove();
});

btn2.addEventListener("mouseenter", (e) => {
  let bodyWidth = document.body.clientWidth;
  let bodyHeight = document.body.clientHeight;
  let randomX = Math.floor(Math.random() * bodyWidth - 800);
  let randomY = Math.floor(Math.random() * bodyHeight - 100);
  e.target.style.transform = `translate(${randomX}px,${randomY}px)`;
});
