import { useReducer, useState } from "react"


const Reducer = () => {


    // const [state, setState] = useState(0)
    const reducer = (state, action) => {

        if (action.type === "increment") {
            return state + 1
        }
        else if (action.type === "decrement") {
            return (state - 1)
        }
        else if (action.type === "reset") {
            return state = 0
        }
    }

    const [state, dispatch] = useReducer(reducer, 0)

    return (

        <>

            <p>number : {state}</p>
            <input type="button" value="increment" onClick={() => { dispatch({ type: "increment" }) }} />
            <br />
            <input type="button" value="decrement" onClick={() => { dispatch({ type: "decrement" }) }} />
            <br />
            <input type="button" value="reset" onClick={() => { dispatch({ type: "reset" }) }} />




        </>
    )
}

export default Reducer;