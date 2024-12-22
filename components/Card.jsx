import languages from "../languages"
import { useState } from "react"

function Card() {

    const [variabileBooleana, setVariabileBooleana] = useState(false)

    const titleArray = languages.map((curLang, i) => {
        let coloreBottone = "btn btn-primary m-3"
        if (i === variabileBooleana && curLang.title==="Node.js") {
            coloreBottone = "btn NODE m-3";
        } else if (i === variabileBooleana){
            coloreBottone = "btn "+ curLang.title + " m-3";
        }
        return <span className={coloreBottone} onClick={() => setVariabileBooleana(i!==variabileBooleana ? i : false)} key={i}>{curLang.title} </span>
    })

    const descArray = languages.map((curLang, i) => {
        let visualizzaDesc = "description";
        let answer = <span><h2>{curLang.title}</h2> <div>{curLang.description}</div></span>;

        if (variabileBooleana === false && i===languages.length-1) {
            answer = <h5>Non è stato selezionato alcun Linguaggio. Clicca su uno dei bottoni per maggiori Info.</h5>
        } else if (variabileBooleana !== i){
            visualizzaDesc = "d-none" 
        }
        
        return <div className={visualizzaDesc} key={i}>{answer} </div>
    })

    return (
        <>
            <div className="container">
                <div className="d-flex">
                    {titleArray}
                </div>
                <div className="ms-2">
                    {descArray}
                </div>

            </div>
        </>
    )
}

export default Card