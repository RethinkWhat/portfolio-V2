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
          hue: Math.random() > 0.4 ? "24" : "36", // Slate-orange and bright-yellowish tones
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
        
        // Hue 24 is deep brand orange, 36 is golden orange
        const colorString = p.hue === "24" ? `255, 95, 0` : `255, 159, 10`;
        
        gradient.addColorStop(0, `rgba(${colorString}, ${p.alpha * 0.8})`);
        gradient.addColorStop(0.4, `rgba(${colorString}, ${p.alpha * 0.3})`);
        gradient.addColorStop(1, `rgba(${colorString}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render custom cursor shape (transparent circle with glowing orange border, or black when over the orange hero background)
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

        // Find if the cursor position is on the hero section (orange background)
        const hero = document.getElementById("hero");
        let isOverOrange = false;
        if (hero) {
          const rect = hero.getBoundingClientRect();
          if (cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom) {
            isOverOrange = true;
          }
        }

        // Find if the cursor position is on the floating navigation bar
        const navbar = document.getElementById("navbar-container");
        let isOverNavbar = false;
        let isNavbarOrange = false;
        if (navbar) {
          const rect = navbar.getBoundingClientRect();
          if (cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom) {
            isOverNavbar = true;
            isNavbarOrange = navbar.classList.contains("text-black");
          }
        }

        // If on the Navbar, expand sizes for a super tactile and prominent feel
        if (isOverNavbar) {
          targetRadius = isHovered ? 26 : 14;
          if (isClicked) {
            targetRadius = isHovered ? 16 : 9;
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
          coreDotRadius = isHovered ? 3.5 : 2.5; // Larger core dot for crisp visibility
          if (isNavbarOrange) {
            // Navbar is bright orange state -> make cursor contrast with sharp black tones
            dotColor = "rgba(0, 0, 0, 1)";
            auraColor = "rgba(0, 0, 0, 0.18)";
            strokeColor = "rgba(0, 0, 0, 0.95)";
            strokeWidth = isHovered ? 2.8 : 2.0;
          } else {
            // Navbar is dark black state -> make cursor pop with vibrant orange glow
            dotColor = "rgba(255, 159, 10, 1)";
            auraColor = "rgba(255, 95, 0, 0.22)";
            strokeColor = "rgba(255, 159, 10, 1)";
            strokeWidth = isHovered ? 2.8 : 2.0;
          }
        } else {
          // Defaults: Colors based on whether we are over the orange background
          dotColor = isOverOrange 
            ? (isHovered ? "rgba(35, 35, 35, 1)" : "rgba(0, 0, 0, 1)")
            : (isHovered ? "rgba(255, 159, 10, 1)" : "rgba(255, 95, 0, 1)");

          auraColor = isOverOrange
            ? "rgba(0, 0, 0, 0.08)"
            : "rgba(255, 159, 10, 0.08)";

          strokeColor = isOverOrange
            ? (isHovered ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.85)")
            : (isHovered ? "rgba(255, 159, 10, 0.9)" : "rgba(255, 95, 0, 0.82)");

          strokeWidth = isHovered ? (isOverOrange ? 2.0 : 1.8) : 1.4;
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
