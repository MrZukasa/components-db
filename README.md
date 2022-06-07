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
- Installo la dependencie per usare i file .ENV `npm install dotenv`
- Aggiungo Express per avere un URL per l'API sul mio DB MySql `npm install express body-parser mysql`
- Installo la dependencie per il cors (errore di connessione di [express](https://expressjs.com/en/resources/middleware/cors.html#:~:text=CORS%20is%20a%20node.,enable%20CORS%20with%20various%20options.)) con `npm install cors`

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
  
![Database](https://i.ibb.co/NNSdvD4/db.png)

### Flow
- Definizione componenti, import e routing
- Stile delle pagine più semplici e Dark mode e importo il font
- Creo il Database e la struttura record in creazione
- Configuro API e Fetch (express e AXIOS)
  - per far girare il backend faccio `node .\src\db.js`
- configurare [Heroku](https://id.heroku.com/login) per far girare il server node.
- Installo React Parallax Hover per il logo `npm i react-parallax-hover`

> N.B. forse è meglio usare axios e react query https://www.youtube.com/watch?v=6tEu9Hz7zcU
