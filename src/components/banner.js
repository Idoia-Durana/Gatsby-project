import * as React from "react"
const styles = {
    width: 150,
    borderWidth: 5,
    borderColor: "white",
    borderStyle: "double",
    backgroundColor: "orange",
    textAlign: "center",
    minHeight: 200
}
const Banner = ()=>{
    return (
        <div style = {styles}>
            <p>Soy la publi</p>
        </div>
    )
}

export default Banner;