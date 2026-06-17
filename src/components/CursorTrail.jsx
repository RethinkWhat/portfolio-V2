import { useEffect, useRef } from "react";

export default function CursorTrail({ active }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  // Track mouse coordinates, click states, and helper tracking variables
  const mouseRef = useRef({ 
    x: 0, 
    y: 0, 
    lastX: 0, 
    lastY: 0, 
    active: false,
    isInteractive: false,
    isClicked: false
  });
  
  // Custom cursor layout lerp states
  const cursorRef = useRef({
    x: 0,
    y: 0,
    radius: 9,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas sizes
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Initialize lerp cursor to match current mouse if first activation
      if (!mouseRef.current.active) {
        cursorRef.current.x = x;
        cursorRef.current.y = y;
        mouseRef.current.active = true;
      }

      mouseRef.current.x = x;
      mouseRef.current.y = y;

      // Smart check if hovering over any interactive controls
      const target = e.target;
      let isInteractive = false;
      if (target) {
        const interactiveSelector = [
          'a', 'button', 'input', 'textarea', 'select', 'label', 'summary',
          '[role="button"]', '[role="link"]',
          '.cursor-pointer', '[class*="cursor-pointer"]',
          '[class*="hover:border-"]', '[class*="hover:bg-"]', '[class*="hover:text-"]', 
          '[class*="hover:opacity-"]', '[class*="hover:scale-"]', '[class*="hover:translate-"]'
        ].join(', ');
        
        isInteractive = !!(
          target.matches(interactiveSelector) || 
          target.closest(interactiveSelector)
        );
      }
      mouseRef.current.isInteractive = isInteractive;

      if (!active) {
        mouseRef.current.lastX = x;
        mouseRef.current.lastY = y;
        return;
      }

      const { lastX, lastY } = mouseRef.current;
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);

      // Spawn particles along the mouse movement path for smoother trails
      const steps = Math.min(Math.floor(dist / 3), 8);
      for (let i = 0; i <= steps; i++) {
        const ratio = steps === 0 ? 0 : i / steps;
        const px = lastX + dx * ratio;
        const py = lastY + dy * ratio;

        particlesRef.current.push({
          x: px,
          y: py,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: Math.random() * 3 + 3,
          alpha: 1,
          decay: Math.random() * 0.025 + 0.018,
          hue: Math.random() > 0.4 ? "200" : "220", // Electric cyan and vibrant tech-blue tones
        });
      }

      mouseRef.current.lastX = x;
      mouseRef.current.lastY = y;
    };

    const handleMouseDown = () => {
      mouseRef.current.isClicked = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.isClicked = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.96; // Gently shrink

        if (p.alpha <= 0 || p.size < 0.2) {
          particles.splice(i, 1);
          continue;
        }

        // Beautiful layered radial gradient for glowing neon effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        
        // Hue 200 is electric cyan, 220 is premium blue
        const colorString = p.hue === "200" ? `0, 180, 255` : `10, 132, 255`;
        
        gradient.addColorStop(0, `rgba(${colorString}, ${p.alpha * 0.8})`);
        gradient.addColorStop(0.4, `rgba(${colorString}, ${p.alpha * 0.3})`);
        gradient.addColorStop(1, `rgba(${colorString}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render custom cursor shape (transparent circle with glowing blue border, or black when over the blue hero background)
      if (mouseRef.current.active) {
        // smooth interpolates the position (lerp)
        cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) * 0.22;
        cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) * 0.22;

        const isHovered = mouseRef.current.isInteractive;
        const isClicked = mouseRef.current.isClicked;

        // Custom radius target physics: expand on hover, collapse on click
        let targetRadius = isHovered ? 16 : 8;
        if (isClicked) {
          targetRadius = isHovered ? 10 : 5;
        }

        const cx = cursorRef.current.x;
        const cy = cursorRef.current.y;

        // Find if the cursor position is on the hero section (blue background)
        const hero = document.getElementById("hero");
        let isOverBlue = false;
        if (hero) {
          const rect = hero.getBoundingClientRect();
          if (cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom) {
            isOverBlue = true;
          }
        }

        // Find if the cursor position is on the floating navigation bar
        const navbar = document.getElementById("navbar-container");
        let isOverNavbar = false;
        let isNavbarBlue = false;
        if (navbar) {
          const rect = navbar.getBoundingClientRect();
          if (cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom) {
            isOverNavbar = true;
            isNavbarBlue = navbar.classList.contains("text-white");
          }
        }

        // If on the Navbar, expand sizes for a super tactile and prominent feel
        if (isOverNavbar) {
          targetRadius = isHovered ? 32 : 18;
          if (isClicked) {
            targetRadius = isHovered ? 20 : 12;
          }
        }

        cursorRef.current.radius += (targetRadius - cursorRef.current.radius) * 0.18;

        // Configure aesthetics, colors, and line widths
        let dotColor;
        let auraColor;
        let strokeColor;
        let strokeWidth;
        let coreDotRadius = 1.8;

        if (isOverNavbar) {
          coreDotRadius = isHovered ? 4.5 : 3.0; // Larger core dot for crisp visibility
          if (isNavbarBlue) {
            // Navbar is bright blue state -> make cursor contrast with sharp bright/high contrast styling and a dark backdrop drop-shadow
            dotColor = "rgba(255, 255, 255, 1)";
            auraColor = "rgba(255, 255, 255, 0.35)";
            strokeColor = "rgba(255, 255, 255, 1)";
            strokeWidth = isHovered ? 3.5 : 2.5;
            ctx.shadowColor = "rgba(0, 0, 0, 0.65)";
            ctx.shadowBlur = 10;
          } else {
            // Navbar is dark black state -> make cursor pop with vibrant electric blue glow
            dotColor = "rgba(0, 210, 255, 1)";
            auraColor = "rgba(10, 132, 255, 0.4)";
            strokeColor = "rgba(10, 132, 255, 1)";
            strokeWidth = isHovered ? 3.5 : 2.5;
            ctx.shadowColor = "rgba(10, 132, 255, 0.85)";
            ctx.shadowBlur = 10;
          }
        } else {
          // Reset shadow for other areas
          ctx.shadowBlur = 0;

          // Defaults: Colors based on whether we are over the blue background
          dotColor = isOverBlue 
            ? (isHovered ? "rgba(240, 240, 240, 1)" : "rgba(255, 255, 255, 1)")
            : (isHovered ? "rgba(10, 132, 255, 1)" : "rgba(0, 180, 255, 1)");

          auraColor = isOverBlue
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(10, 132, 255, 0.08)";

          strokeColor = isOverBlue
            ? (isHovered ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)")
            : (isHovered ? "rgba(10, 132, 255, 0.9)" : "rgba(0, 180, 255, 0.82)");

          strokeWidth = isHovered ? (isOverBlue ? 2.0 : 1.8) : 1.4;
        }

        // 1. Draw central core tiny point (instant feedback at precise hardware coords)
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, coreDotRadius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        // 2. Draw subtle glowing aura when hovered over buttons
        if (isHovered || isOverNavbar) {
          ctx.beginPath();
          ctx.arc(cx, cy, cursorRef.current.radius, 0, Math.PI * 2);
          ctx.fillStyle = auraColor;
          ctx.fill();
        }

        // 3. Draw outer transparent circle with sharp borders
        ctx.beginPath();
        ctx.arc(cx, cy, cursorRef.current.radius, 0, Math.PI * 2);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();

        // Turn off shadow for particles to keep trail fast/light
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ opacity: 1 }}
    />
  );
}
