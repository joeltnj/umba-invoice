import { useEffect, useState } from "react";
import Input from "./Input";


const Counter = () => {

    const [duration, setDuration] = useState(5)
    const [secondLeft, setLecondLeft] = useState(duration)

    const handleChange = (v) => {
        setDuration(v=>v-1)
        setLecondLeft(v)
    }
    // useEffect(() => {

    // }, [duration])

    return (
        <>
            <p>Counter : {duration} et {secondLeft}</p>


            <Input
                value={duration}
                onChange={handleChange}
            />

        </>
    )
}
export default Counter;