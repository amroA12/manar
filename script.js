// العناصر الرئيسية
const giftBox = document.getElementById("gift-box");
const cake = document.getElementById("cake");
const message = document.getElementById("message");
const musicBtn = document.getElementById("music-btn");
const birthdaySong = document.getElementById("birthday-song");
const fireworksContainer = document.getElementById("fireworks");
const confettiContainer = document.getElementById("confetti-container");

// متغير لحالة الموسيقى
let isMusicPlaying = false;

// حدث النقر على صندوق الهدية
giftBox.addEventListener("click", () => {
  // تأثير اهتزاز الصندوق
  giftBox.style.animation = "shake 0.5s";
  
  // بعد انتهاء الاهتزاز
  setTimeout(() => {
    giftBox.style.animation = "";
    
    // تأثير فتح الصندوق
    giftBox.style.transform = "translateY(-20px) rotateY(180deg) scale(1.1)";
    giftBox.style.background = "linear-gradient(45deg, #ff8a80, #ff5252)";
    
    // إظهار الكعكة مع تأثير
    cake.style.display = "block";
    cake.style.animation = "popUp 0.8s ease-out";
    
    // بعد ظهور الكعكة
    setTimeout(() => {
      // بدء تأثير الشموع
      document.querySelector(".flame").style.animation = "flicker 0.5s infinite alternate";
      
      // إظهار الرسالة بعد تأخير
      setTimeout(() => {
        message.style.display = "block";
        createFireworks();
        startConfetti();
      }, 1000);
    }, 800);
  }, 500);
});

// حدث النقر على الكعكة
cake.addEventListener("click", () => {
  cake.classList.add("rotating");
  
  // بعد الدوران
  setTimeout(() => {
    message.style.display = "block";
    createFireworks();
    startConfetti();
  }, 2000);
});

// زر تشغيل الموسيقى
musicBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    birthdaySong.pause();
    musicBtn.textContent = "🎵 تشغيل الموسيقى";
  } else {
    birthdaySong.play();
    musicBtn.textContent = "🔇 إيقاف الموسيقى";
  }
  isMusicPlaying = !isMusicPlaying;
});

// إنشاء بالونات
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  
  // ألوان عشوائية للبالونات
  const colors = ['#ff4081', '#ff9800', '#e91e63', '#9c27b0', '#3f51b5'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.background = `radial-gradient(circle at 30% 30%, #ffffff, ${randomColor})`;
  
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  balloon.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.getElementById('balloon-container').appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

// إنشاء قلوب
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // أحجام عشوائية للقلوب
  const size = 15 + Math.random() * 20;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (3 + Math.random() * 4) + 's';
  document.getElementById('hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// إنشاء ألعاب نارية
function createFireworks() {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      
      // ألوان عشوائية للألعاب النارية
      const colors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#ff00ff'];
      firework.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      firework.style.left = Math.random() * window.innerWidth + 'px';
      firework.style.top = (Math.random() * window.innerHeight/2) + 'px';
      fireworksContainer.appendChild(firework);
      
      setTimeout(() => {
        firework.remove();
      }, 1000);
    }, i * 100);
  }
}

// إنشاء كونفيتي
function startConfetti() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // أشكال عشوائية للكونفيتي
      const shapes = ['square', 'circle', 'triangle'];
      const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
      
      if (randomShape === 'circle') {
        confetti.style.borderRadius = '50%';
      } else if (randomShape === 'triangle') {
        confetti.style.width = '0';
        confetti.style.height = '0';
        confetti.style.borderLeft = '8px solid transparent';
        confetti.style.borderRight = '8px solid transparent';
        confetti.style.borderBottom = '15px solid ' + confetti.style.background;
        confetti.style.background = 'transparent';
      }
      
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.animationDuration = (3 + Math.random() * 4) + 's';
      confetti.style.animationDelay = Math.random() * 5 + 's';
      confettiContainer.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 8000);
    }, i * 50);
  }
}

// بدء إنشاء البالونات والقلوب
setInterval(createBalloon, 500);
setInterval(createHeart, 300);

// تأثيرات عند تحميل الصفحة
window.addEventListener('load', () => {
  setTimeout(() => {
    giftBox.style.animation = "bounce 2s infinite alternate";
  }, 1000);
});