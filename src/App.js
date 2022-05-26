// a una etiqueta vacia <></>, babel la sobreentiende como un "fragmento"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Main from "./Main.js"

const App = () => {
    return (
    <>
        <Header/>
        <Main/>
        <Footer/>
    </>
    )
} 

export default App
