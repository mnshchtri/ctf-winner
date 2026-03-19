/* ── Particle Network Animation ───────────────────────────────────── */
(function () {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    const PARTICLE_COUNT = 70, MAX_DIST = 140, COLOR = '68,166,204';

    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const P = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1
    }));

    (function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw connecting lines
        for (let i = 0; i < P.length; i++) {
            for (let j = i + 1; j < P.length; j++) {
                const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y;
                const d = Math.hypot(dx, dy);
                if (d < MAX_DIST) {
                    ctx.strokeStyle = `rgba(${COLOR},${(1 - d / MAX_DIST) * 0.25})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(P[i].x, P[i].y);
                    ctx.lineTo(P[j].x, P[j].y);
                    ctx.stroke();
                }
            }
        }

        // Draw dots
        P.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${COLOR},0.6)`;
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });

        requestAnimationFrame(draw);
    })();
})();
