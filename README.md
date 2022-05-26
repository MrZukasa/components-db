### Vite-React-Tailwind 🧁

Non ce più nulla da fare, ormai uso soltanto Tailwind!! 😂😂

- Creo il progetto Vite-React con `npm init vite`
- Aggiungo Tailwind con le istruzioni del [sito](https://tailwindcss.com/docs/guides/vite)
- Una volta installata l'estensione [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) posso creare componenti con degli snippet, ad esempio con sfc creo un Stateless Function Component (Arrow function).


### Snippets 🥝
| Snippet | Renders |
| - | - |
|imr | Import React|
|imrc | Import React / Component |
| imrd | Import ReactDOM |
| imrs | Import React / useState |
| imrse | Import React / useState useEffect |
| impt | Import PropTypes |
| impc | Import React / PureComponent |
| cc | Class Component |
| ccc | Class Component With Constructor |
| cpc | Class Pure Component |
| ffc | Function Component |
| sfc | Stateless Function Component (Arrow function) |
| cdm | componentDidMount |
| uef | useEffect Hook |
| cwm | componentWillMount |
| cwrp | componentWillReceiveProps |
| gds | getDerivedStateFromProps |
| scu | shouldComponentUpdate |
| cwu | componentWillUpdate |
| cdu | componentDidUpdate |
| cwun | componentWillUnmount |
| cdc | componentDidCatch |
| gsbu | getSnapshotBeforeUpdate |
| ss | setState |
| ssf | Functional setState |
| usf | Declare a new state variable using State Hook |
| ren |	render |
|rprop | Render Prop |
| hoc |	Higher Order Component |
| cp | Context Provider |
| cpf |	Class Property Function |

In questo progetto uso anche [json-server](https://github.com/typicode/json-server).

il comando per far partire json-server è
```sh
npx json-server --watch .\data\db.json --port 8000
```
>N.B per JSON Server blogs:[] è una risorsa, quindi verrà usata come enrypoint

Per la parte relativa al routing ho usato react-router-dom
```
npm install react-router-dom@5
```
