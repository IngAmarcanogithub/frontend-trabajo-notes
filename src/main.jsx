import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'

//esta forma es sin uso del servidor
// const notes = [
//   {
  
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

// ReactDOM.createRoot(document.getElementById('root')).render( <App notes={notes}/>)

//parte del servidor con axios



// const promise = axios.get('http://localhost:3001/notes')
//funciona esta direccion
// console.log(promise)

// si la direccion no existe en la consola nos da error
// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

//agregamos el then para controlar el evento

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
// })

// Por lo general, no es necesario almacenar el objeto de la promesa en una variable y, en cambio, es común encadenar la llamada al método then a la llamada al método axios, de modo que la siga directamente:

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   console.log(notes)
// })

//Mas legible
//en esta forma se coloca el ReacDOM que posee el componente App que se renderiza

axios
  .get('http://localhost:3001/api/notes')
  .then(response => {
    const notes = response.data
    ReactDOM.createRoot(document.getElementById('root')).render( <App notes={notes}/>)
    console.log(notes)
  })