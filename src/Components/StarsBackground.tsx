import { useEffect, useRef } from "react";

const StarsBackground = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const resize = () => {
    if (canvas.current) {
      canvas.current.height = window.innerHeight;
      canvas.current.width = window.innerWidth;
    }
  };
  useEffect(() => {
    let particlesArray: Particle[];
    const ctx = canvas.current!.getContext("2d");

    let animationId: number;

    class Particle {
      public size = Math.random() * 5 + 1;
      private speedX = Math.random() * 3 - 1.5;
      private speedY = Math.random() * 3 - 1.5;

      constructor(public x: number, public y: number) {}

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        if (ctx) {
          ctx.fillStyle = "rgba(173, 216, 230, 1)";
          ctx.strokeStyle = "rgba(173, 216, 230, 0.8)";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.current!.width;
        let y = Math.random() * canvas.current!.height;
        particlesArray.push(new Particle(x, y));
      }
    }

    function animate() {
      if (ctx)
        ctx.clearRect(0, 0, canvas.current!.width, canvas.current!.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
          let x = Math.random() * canvas.current!.width;
          let y = Math.random() * canvas.current!.height;
          particlesArray.push(new Particle(x, y));
        }
      }
      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();
    resize();
    window.addEventListener("resize", resize);

    // Clean up
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return <canvas id="canvas" ref={canvas}></canvas>;
};

export default StarsBackground;
