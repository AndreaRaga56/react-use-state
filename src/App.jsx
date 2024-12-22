import languages from "../languages"
import { useState } from "react"

function App() {

  const [variabileBooleana, setVariabileBooleana] = useState(0)

  const titleArray = languages.map((curLang, i) => {
    let coloreBottone = "btn btn-primary m-3"
    if (i == variabileBooleana) {
      coloreBottone = "btn btn-warning m-3"
    }
    return <span className={coloreBottone} onClick={() => setVariabileBooleana(i)} key={i}>{curLang.title} </span>
  })

  const descArray = languages.map((curLang, i) => {
    let visualizzaDesc = "d-none"
    if (i == variabileBooleana) {
      visualizzaDesc = "description"
    }
    return <div className={visualizzaDesc} key={i}>{curLang.description} </div>
  })

  return (
    <>
      <h1>Learn Web Developement</h1>
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

export default App
