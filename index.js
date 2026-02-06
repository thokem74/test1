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
        font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: radial-gradient(circle at top, #fef6e4, #f3d2c1);
        color: #001858;
      }

      .card {
        background: #ffffff;
        border-radius: 24px;
        padding: 3rem;
        box-shadow: 0 20px 40px rgba(0, 24, 88, 0.15);
        text-align: center;
        max-width: 480px;
      }

      h1 {
        font-size: 2.5rem;
        margin: 0 0 1rem;
      }

      p {
        margin: 0 0 2rem;
        font-size: 1.1rem;
        line-height: 1.6;
      }

      .badge {
        display: inline-block;
        padding: 0.5rem 1rem;
        border-radius: 999px;
        background: #8bd3dd;
        color: #001858;
        font-weight: 600;
        letter-spacing: 0.02em;
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
