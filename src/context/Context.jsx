import { createContext } from "react"
import run from "../conifig/gemini"

const Context=createContext()

const ContextProvider=(props) =>{
  const onSent=async(prompt)=>{
    await run(prompt)
  }
  const contextValue ={
  }
  onSent("What is React js")

  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}


export default ContextProvider