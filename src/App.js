import React from "react"
import './style.css'

export default function App() {
    
    const [important , setImportant] = React.useState(0)
    
    
    function In(){
    
        setImportant(prevCount => prevCount + 1)
        // made a callback function, instead of using "important" state. just good form
    }
    
    function De(){
    
        setImportant(prevCount => prevCount - 1)
        
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick = {De}>–</button>
            <div className="counter--count">
                <h1>{important}</h1>
            </div>
            <button className="counter--plus" onClick = {In}>+</button>
        </div>
    )
}
