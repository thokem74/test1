# Repository Guidelines

## Project Structure & Module Organization
- `index.js` contains the Node.js HTTP server and the inline HTML/CSS template served to browsers.
- `package.json` defines metadata and the `npm` scripts for running the app.
- There are currently no additional modules, assets, or test directories. Keep the entry point in `index.js` unless the app grows enough to warrant splitting modules.

## Build, Test, and Development Commands
- `npm start` runs `node index.js` to start the server.
- The server listens on `process.env.PORT` or defaults to `3000` (for example: `PORT=8080 npm start`).
- No build or test commands are configured yet.

## Coding Style & Naming Conventions
- Use 2-space indentation and double quotes for strings to match `index.js`.
- Prefer `const` by default and `let` only when reassignment is required.
- Use `camelCase` for variables and functions.
- Keep the HTML template readable: maintain consistent indentation inside the template literal, and group CSS variables under `:root` as shown.

## Testing Guidelines
- No testing framework is set up. If you introduce tests, add a `test` script in `package.json` and document the framework in this file.
- Name tests descriptively and keep them close to the code they exercise (for example, a `test/` or `__tests__/` folder if you add one).

## Commit & Pull Request Guidelines
- Commit messages in history are short and imperative/sentence case (for example, "Refactor styles in index.js for improved aesthetics and responsiveness"). Follow that pattern and avoid long prefixes or tags.
- Pull requests are merged via GitHub; include a clear summary, link any relevant issues, and add screenshots for UI changes since the app renders HTML/CSS.

## Configuration Tips
- Use the `PORT` environment variable to avoid conflicts when running locally.
- If you add new configuration, document it in `package.json` scripts and update this guide.
