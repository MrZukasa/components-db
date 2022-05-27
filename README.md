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
- Aggiungo react-router-dom con `npm install react-router-dom@5` dato che uso `Switch`
- Link per info su [MySql](https://www.youtube.com/watch?v=XxZwe9HB5ow&list=PLCakfctNSHkFDTFczqhXNv-nYMHvLMT1H&index=2)

### Ipotesi DB
- Database 'Archivio'
- Tabella 'Componenti'
- Campi:
  - id
  - codice custom
  - codice costruttore
  - descirizione
  - quantita
  - posizione
  - costruttore
  - rivenditore1
  - rivenditore2
  - rivenditore3
  - note

### Flow
- Definizione componenti, import e routing
- Stile delle pagine più semplici e Dark mode e importo il font

