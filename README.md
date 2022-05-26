### DB componenti Tailwind-Vite/React-MySql 🧁

- Creo il progetto Vite-React con `npm init vite`
- Aggiungo Tailwind con
  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
  nel file tailwind.config.js metto
  ```
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
  nel file index.css metto
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Aggiungo react-router-dom con `npm install react-router-dom`
