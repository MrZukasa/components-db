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
  
![Database](https://i.ibb.co/4RD3nmq/Cattura.png)

### Flow
- Definizione componenti, import e routing
- Stile delle pagine più semplici e Dark mode e importo il font
- Creo il Database e la struttura record in creazione
- Configuro API e Fetch (express e AXIOS)
  - per far girare il backend faccio `node .\src\db.js`
- configurare [Heroku](https://id.heroku.com/login) per far girare il server node.
- Installo React Parallax Hover per il logo `npm i react-parallax-hover`
- Installo Nodemon (serve a non riavviare node ad ogni modifica)
- Con [Axios](https://www.npmjs.com/package/axios) si gestiscono gli errori in maniera decisamente più completa vedi [qui](https://www.youtube.com/watch?v=6tEu9Hz7zcU)
- Aggiungo Framer Motion `npm install framer-motion` e [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroller)
  - Per fare si che sia smooth si usa `<AnimatePresence exitBeforeEnter>` la proprietà exitBeforeEnter serve per non iniziare il render di una animazione fino a che non termina quella prima
- Aggiungo switch [Dark/Light Mode](https://www.youtube.com/watch?v=2IfTD-muRF4&t=291s) 
  - setto la dark mode all'interno della Local Storage
- Aggiungo la possibilità di inserire un immagine nel [database](https://www.tutsmake.com/upload-image-in-mysql-db-using-node-js-express-multer/) BLOB.
  - Aggiungo una dropzone, ma probabilmente ci va un hook apposta perché [droppare](https://www.digitalocean.com/community/tutorials/react-react-dropzone) nella pagina non funziona