const http = require("http");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello World Demo</title>
    <style>
      :root {
        color-scheme: light;
        font-family: "Space Grotesk", "Trebuchet MS", sans-serif;
        --bg-deep: #05040d;
        --bg-mid: #120a24;
        --bg-glow: #3a1c6b;
        --card: rgba(10, 8, 24, 0.82);
        --ink: #f6f2ff;
        --accent: #8ff8ff;
        --accent-2: #ff7ad9;
        --glow-soft: 0 0 18px rgba(143, 248, 255, 0.35);
        --glow-strong: 0 0 48px rgba(255, 122, 217, 0.45);
      }

      @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap");

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background:
          radial-gradient(1100px 700px at 15% 20%, rgba(143, 248, 255, 0.18), transparent 70%),
          radial-gradient(900px 900px at 85% 15%, rgba(255, 122, 217, 0.22), transparent 65%),
          radial-gradient(900px 900px at 60% 80%, rgba(79, 70, 229, 0.28), transparent 60%),
          linear-gradient(145deg, var(--bg-deep), var(--bg-mid));
        color: var(--ink);
        padding: 2rem;
      }

      .card {
        position: relative;
        background: var(--card);
        border-radius: 28px;
        padding: 3.5rem 3.75rem;
        box-shadow:
          0 0 0 1px rgba(143, 248, 255, 0.2),
          0 18px 60px rgba(6, 4, 22, 0.6),
          0 0 80px rgba(143, 248, 255, 0.25);
        text-align: center;
        max-width: 520px;
        backdrop-filter: blur(18px);
        overflow: hidden;
        animation: float 6s ease-in-out infinite;
      }

      .card::before {
        content: "";
        position: absolute;
        inset: -60% -30% auto -30%;
        height: 240px;
        background: radial-gradient(circle, rgba(255, 122, 217, 0.4), transparent 70%);
        filter: blur(8px);
        opacity: 0.8;
      }

      .card::after {
        content: "";
        position: absolute;
        inset: auto -40% -65% -40%;
        height: 260px;
        background: radial-gradient(circle, rgba(143, 248, 255, 0.35), transparent 70%);
        filter: blur(10px);
        opacity: 0.7;
      }

      h1 {
        position: relative;
        font-size: 2.8rem;
        margin: 0 0 1rem;
        letter-spacing: -0.02em;
        text-shadow: var(--glow-soft), var(--glow-strong);
      }

      p {
        position: relative;
        margin: 0 0 2.25rem;
        font-size: 1.1rem;
        line-height: 1.6;
        color: rgba(246, 242, 255, 0.8);
      }

      .badge {
        position: relative;
        display: inline-block;
        padding: 0.65rem 1.3rem;
        border-radius: 999px;
        background: linear-gradient(120deg, rgba(143, 248, 255, 0.2), rgba(255, 122, 217, 0.3));
        color: var(--ink);
        font-weight: 600;
        letter-spacing: 0.02em;
        border: 1px solid rgba(143, 248, 255, 0.35);
        box-shadow: var(--glow-soft);
        text-transform: uppercase;
        font-size: 0.85rem;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0px);
          box-shadow:
            0 0 0 1px rgba(143, 248, 255, 0.2),
            0 18px 60px rgba(6, 4, 22, 0.6),
            0 0 80px rgba(143, 248, 255, 0.25);
        }
        50% {
          transform: translateY(-8px);
          box-shadow:
            0 0 0 1px rgba(143, 248, 255, 0.35),
            0 26px 80px rgba(6, 4, 22, 0.7),
            0 0 120px rgba(255, 122, 217, 0.45);
        }
      }

      @media (max-width: 600px) {
        .card {
          padding: 2.5rem 2rem;
        }

        h1 {
          font-size: 2.2rem;
        }
      }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Hello, World!</h1>
      <p>
        Welcome to your demo page. This lightweight Node server is ready for your
        next idea.
      </p>
      <span class="badge">Ready to build 🚀</span>
    </main>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Hello World demo running at http://localhost:${port}`);
});
