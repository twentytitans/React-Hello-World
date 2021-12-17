import React from "react";
import Button from "./Button/Button"
import "./styles/styles.css"

const App = ()=>{  // component
    return(
        <div>
          <h1 style = {{ textAlign: "center"}}> Hello Guys</h1> 
          <Button buttonText="Apple"/>
          <Button buttonText="Mango"/>
          <Button buttonText="Grape"/>
        </div>
    )
}

// const Hello1 = ()=>{  // component
//     return(
//         <div>
//           <h1 style = {{ textAlign: "center"}}> Hello Guys</h1> 
//           <button className="button"> Apple </button>
//           <button className="button"> mango </button>
//           <button className="button"> grape </button>
//         </div>
//     )
// }

// const Hello2 = ()=>{  // component
//     return(
//         <div>
//           <h1 style = {{ textAlign: "center"}}> Hello Guys</h1> 
//           <button className="button"> Apple </button>
//           <button className="button"> mango </button>
//           <button className="button"> grape </button>
//         </div>
//     )
// }
export default App
