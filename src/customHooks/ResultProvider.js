import React , {useContext, useState} from 'react'

const ResultContext = React.createContext()


export function useResult(){
    return useContext(ResultContext)
}


export function ResultProvider({children}){
    const [resultArray , setResultArray] = useState([])
    return (
        <ResultContext.Provider value={{resultArray,setResultArray}}>
            {children}
        </ResultContext.Provider>
    )
}