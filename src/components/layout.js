import * as React from "react"
import Nav from "./nav";

const Layout =({children})=>{
    return(
        <>
        <header>
            <h1>Este es el header</h1>
            <Nav></Nav>
        </header>

        <main>
            {children}

        </main>
        <footer>
            <p>Este es el footer</p>
        </footer>
        </>
    )
}

export default Layout;



