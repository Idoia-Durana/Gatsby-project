import * as React from "react"
const styles = {
    width: 150,
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "double",
    backgroundColor: "orange",
    textAlign: "center",
    minHeight: 200
}
const Banner = ({texto="no me gusta trabayar",url= "cualquier pagina"})=>{
    return (
        <div style = {styles}>
            <p>{texto}</p>
            <p>{url}</p>
        </div>
    )
}

export default Banner;