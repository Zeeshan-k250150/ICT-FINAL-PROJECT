document.addEventListener('DOMContentLoaded', () => {
  // Smooth anchor scrolling for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
function animateCounter(elementId, targetValue, duration = 2000) {
  const element = document.getElementById(elementId);
  const startValue = 0;
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
    element.textContent = currentValue.toLocaleString();
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Initialize stats when page loads
document.addEventListener('DOMContentLoaded', () => {
  animateCounter('linesOfCode', 15420);
  animateCounter('projectsCompleted', 12);
  animateCounter('coffeeCups', 342);
});

// Code Rain Matrix Effect
const canvas = document.getElementById('codeRain');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\|~`';
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

// Drop positions
const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * -100;
}

// Colors
const colors = ['#00f0ff', '#8b5cf6', '#ff006e', '#00ff88'];

function drawMatrix() {
  // Fade effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.font = fontSize + 'px monospace';
  
  for (let i = 0; i < drops.length; i++) {
    // Random character
    const char = chars[Math.floor(Math.random() * chars.length)];
    
    // Random color with more cyan
    const colorIndex = Math.random() > 0.7 ? Math.floor(Math.random() * colors.length) : 0;
    ctx.fillStyle = colors[colorIndex];
    
    // Draw character
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(char, x, y);
    
    // Move drop down
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Animate
setInterval(drawMatrix, 50);

// Interactive Tech Pills (optional enhancement)
document.querySelectorAll('.tech-pill').forEach(pill => {
  pill.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = '';
    }, 10);
    
    // Add a quick pulse effect
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });
});