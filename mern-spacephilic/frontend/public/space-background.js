// Enhanced Space Background with Parallax Starfield and Shooting Stars
(function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '-2';
  canvas.style.pointerEvents = 'none';

  document.body.insertBefore(canvas, document.body.firstChild);

  let stars = [];
  let shootingStars = [];
  let galaxyDots = [];
  let constellationLines = [];
  let pulsingStars = [];
  let scrollY = 0;

  // Detect device capabilities
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;

  // Star configuration based on device
  const STAR_LAYERS = isMobile ? [
    { count: 200, sizeRange: [0.5, 1.5], speedRange: [0.002, 0.005], alpha: 0.6 }
  ] : isTablet ? [
    { count: 100, sizeRange: [0.3, 0.8], speedRange: [0.001, 0.003], alpha: 0.4 },
    { count: 150, sizeRange: [0.8, 1.5], speedRange: [0.003, 0.006], alpha: 0.7 },
    { count: 50, sizeRange: [1.5, 2.5], speedRange: [0.006, 0.012], alpha: 0.9 }
  ] : [
    { count: 150, sizeRange: [0.3, 0.8], speedRange: [0.001, 0.003], alpha: 0.4 },
    { count: 250, sizeRange: [0.8, 1.5], speedRange: [0.003, 0.006], alpha: 0.7 },
    { count: 100, sizeRange: [1.5, 2.5], speedRange: [0.006, 0.012], alpha: 0.9 }
  ];

  const COLORS = [
    'rgba(255, 255, 255, ',     // White (70%)
    'rgba(200, 220, 255, ',     // Blue-white (20%)
    'rgba(255, 240, 220, '      // Yellow-white (10%)
  ];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
    createGalaxyDots();
    createConstellationLines();
    createPulsingStars();
  }

  function createStars() {
    stars = [];
    STAR_LAYERS.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        const colorPick = Math.random();
        const color = colorPick < 0.7 ? COLORS[0] : colorPick < 0.9 ? COLORS[1] : COLORS[2];

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]) + layer.sizeRange[0],
          alpha: layer.alpha,
          baseAlpha: layer.alpha,
          speed: Math.random() * (layer.speedRange[1] - layer.speedRange[0]) + layer.speedRange[0],
          color: color,
          parallaxSpeed: Math.random() * 0.5 + 0.5,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
    });
  }

  function createGalaxyDots() {
    galaxyDots = [];
    const dotCount = isMobile ? 30 : 80;

    for (let i = 0; i < dotCount; i++) {
      galaxyDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 0.3 + 0.2,
        alpha: Math.random() * 0.15 + 0.05,
        pulseSpeed: Math.random() * 0.005 + 0.002,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  function createConstellationLines() {
    if (isMobile) return; // Skip on mobile for performance

    constellationLines = [];
    const lineCount = 15;

    for (let i = 0; i < lineCount; i++) {
      // Find two nearby bright stars
      const star1Index = Math.floor(Math.random() * Math.min(100, stars.length));
      let star2Index = star1Index + Math.floor(Math.random() * 30) + 10;
      star2Index = Math.min(star2Index, stars.length - 1);

      if (stars[star1Index] && stars[star2Index]) {
        constellationLines.push({
          star1: star1Index,
          star2: star2Index,
          alpha: 0.03 + Math.random() * 0.05
        });
      }
    }
  }

  function createPulsingStars() {
    pulsingStars = [];
    const count = isMobile ? 5 : 12;

    for (let i = 0; i < count; i++) {
      pulsingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: Math.random() * 1.5 + 1.5,
        pulseSpeed: Math.random() * 0.01 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
        color: Math.random() < 0.5 ? 'rgba(200, 220, 255, ' : 'rgba(255, 220, 180, ',
        baseAlpha: 0.6 + Math.random() * 0.3
      });
    }
  }

  function createShootingStar() {
    if (isMobile) return; // Skip on mobile for performance

    shootingStars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 12,
      angle: Math.random() * Math.PI / 4 + Math.PI / 6,
      opacity: 1,
      life: 0
    });
  }

  function drawStars() {
    stars.forEach(star => {
      // Twinkle effect
      star.twinklePhase += star.twinkleSpeed;
      star.alpha = star.baseAlpha * (0.7 + Math.sin(star.twinklePhase) * 0.3);

      // Continuous downward movement for rocket launch effect
      star.y += star.speed * 60; // Move stars downward continuously

      // Reset star position when it goes off screen (infinite scroll)
      if (star.y > canvas.height) {
        star.y = -10;
        star.x = Math.random() * canvas.width;
      }

      // Parallax on scroll (desktop only) - added to the continuous movement
      let yPos = star.y;
      if (!isMobile) {
        yPos = star.y + (scrollY * star.parallaxSpeed * 0.5);
      }

      ctx.beginPath();
      ctx.arc(star.x, yPos, star.r, 0, Math.PI * 2);
      ctx.fillStyle = star.color + star.alpha + ')';
      ctx.fill();
    });
  }

  function drawShootingStars() {
    shootingStars = shootingStars.filter(star => {
      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      star.life += 0.02;
      star.opacity = Math.max(0, 1 - star.life);

      if (star.opacity <= 0) return false;

      // Draw shooting star trail
      const gradient = ctx.createLinearGradient(
        star.x, star.y,
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.9})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(
        star.x - Math.cos(star.angle) * star.length,
        star.y - Math.sin(star.angle) * star.length
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Add glow
      ctx.beginPath();
      ctx.arc(star.x, star.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.5})`;
      ctx.fill();

      return true;
    });
  }

  function drawGalaxyDots() {
    galaxyDots.forEach(dot => {
      dot.pulsePhase += dot.pulseSpeed;
      const currentAlpha = dot.alpha * (0.5 + Math.sin(dot.pulsePhase) * 0.5);

      // Add downward movement
      dot.y += 0.3;
      if (dot.y > canvas.height) {
        dot.y = -10;
        dot.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180, 150, 220, ${currentAlpha})`;
      ctx.fill();
    });
  }

  function drawConstellationLines() {
    if (isMobile) return;

    constellationLines.forEach(line => {
      const star1 = stars[line.star1];
      const star2 = stars[line.star2];

      if (star1 && star2) {
        let y1 = star1.y;
        let y2 = star2.y;

        if (!isMobile) {
          y1 = star1.y + (scrollY * star1.parallaxSpeed * 0.5);
          y2 = star2.y + (scrollY * star2.parallaxSpeed * 0.5);
          if (y1 > canvas.height) y1 -= canvas.height;
          if (y1 < 0) y1 += canvas.height;
          if (y2 > canvas.height) y2 -= canvas.height;
          if (y2 < 0) y2 += canvas.height;
        }

        ctx.beginPath();
        ctx.moveTo(star1.x, y1);
        ctx.lineTo(star2.x, y2);
        ctx.strokeStyle = `rgba(120, 160, 255, ${line.alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  }

  function drawPulsingStars() {
    pulsingStars.forEach(star => {
      star.pulsePhase += star.pulseSpeed;
      const pulseFactor = 0.5 + Math.sin(star.pulsePhase) * 0.5;
      const currentSize = star.baseSize * (0.8 + pulseFactor * 0.4);
      const currentAlpha = star.baseAlpha * (0.7 + pulseFactor * 0.3);

      // Add downward movement
      star.y += 0.5;
      if (star.y > canvas.height) {
        star.y = -10;
        star.x = Math.random() * canvas.width;
      }

      // Draw outer glow
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, currentSize * 3);
      gradient.addColorStop(0, star.color + currentAlpha + ')');
      gradient.addColorStop(0.5, star.color + (currentAlpha * 0.3) + ')');
      gradient.addColorStop(1, star.color + '0)');

      ctx.beginPath();
      ctx.arc(star.x, star.y, currentSize * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw core
      ctx.beginPath();
      ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
      ctx.fillStyle = star.color + currentAlpha + ')';
      ctx.fill();
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGalaxyDots();
    drawConstellationLines();
    drawStars();
    drawPulsingStars();
    drawShootingStars();
    requestAnimationFrame(animate);
  }

  // Track scroll for parallax
  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset;
  });

  // Create shooting stars periodically
  if (!isMobile) {
    setInterval(() => {
      if (Math.random() < 0.15) createShootingStar();
    }, 3000);
  }

  window.addEventListener('resize', resize);

  // Initialize
  resize();
  animate();
})();
