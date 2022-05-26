import App from "./App"

//tener la variable react en scope
import React from "react" //sentencia vieja que ya cambió
//"react": cuando no especifico la ruta de la carpeta con ./ , por defecto busca algun paquete instalado en la carpeta node modules

//tener la variable reactDOM en scope para renderizar:
//import ReactDOM from "react-dom" forma vieja
import ReactDOM from "react-dom/client"  //forma nueva

//la librearia "react" nos permite escribir codigo, "reactDOM" es la libreria que nos permite ver ese codigo en un DOM o "react-native" para ver en un dispositivo mobil


import "./style.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))

//tener la viariable App(la variable que contiene aplicacion entera) en scope
// const App = () => {
//     return "Hola mundo"
// }

//hacer render de la App en el DOM
//ReactDOM.render(<App/>, document.getElementById("root"))  forma vieja
root.render(<App/>)