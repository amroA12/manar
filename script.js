const cake = document.getElementById("cake");
const message = document.getElementById("message");

cake.addEventListener("click", () => {
  cake.classList.add("rotating");

  // تأخير إظهار الرسالة بعد انتهاء الدوران
  setTimeout(() => {
    message.style.display = "block";
  }, 2200);
});
// بالونات متكررة
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  document.getElementById('balloon-container').appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 800);

// قلوب متحركة
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '0px';
  document.getElementById('hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 600);
