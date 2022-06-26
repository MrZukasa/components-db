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
  - immagine
  
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
  - Aggiungo [multer](https://www.youtube.com/watch?v=wIOpe8S2Mk8) per far si che il backend possa caricare il file multimediale. `npm install multer`
  - Aggiungo una dropzone, dai template di tailwind e la sistemo per avere il focus sulla input box in modo da poter droppare
  - Formatto i dati ricevuti dal frontend in modo da poter leggere sul backend il file blob e metterlo nel DB, volendo si può mettere solo l'url ma per provare ho fatto cosi
  - setto la query in update in modo da aggiungere l'immagine al codice appena creato, questo forse comporterà dei problemi in Update
  - dovrei rileggere il nome del file e vedere se viene cambiato o no per rimettere lo stesso file caso in cui non sia cambiato
  - Aggiungo `npm install buffer` per leggere il blob come buffer dal database e inserirlo come immagine nella mia pagina
  - Aggiungo `npm install @mui/material @emotion/react @emotion/styled` per usare un tooltip che mi permetta di vedere la foto durante la selezione
- Ricerca con campi specifici
  - quando si passano dei parametri con axios, da nodejs si leggono come [req.query](https://www.youtube.com/watch?v=zrVjqvavS5U)
- Carousel in [Tailwind](https://www.youtube.com/watch?v=ho93e0IhdTA)

Provo a fare il deploy su heroku