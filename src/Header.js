import Nav from "./components/NavBar.js"


const Header = () => {
    return (
    <header className="header"> 
        {/* metodo BEM: categorias bloque-elemento-modificador */}
        {/*la palabra class es reservada en js a diferencia de HTML, por eso cambia la forma de definir el atributo class  */}
        <h1 className="header__titulo">E-Commerce</h1>
        <Nav/>
    </header>
    )
}

export default Header