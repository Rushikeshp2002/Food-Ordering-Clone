import { useRouteError } from "react-router-dom"

export const Error = () =>{
    const errorVar = useRouteError();
    return(
        <div>
            console.log(errorVar)
            <h1>Oops something went wrong</h1>
            <h2>Try Again later</h2>
            <h3>Error {errorVar.status}: Not found</h3>
        </div>
    )
}

