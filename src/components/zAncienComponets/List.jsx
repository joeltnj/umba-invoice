import { useState } from "react"


const List = () => {
    const [search, setSearch]=useState("")
    const myHandle=(e)=>{
        setSearch(e.target.value)
    }

    return (
        <>
            <p>hello {search}</p>
            <nav>
                <label htmlFor="list">search</label>
                <input type="text" name="" id="list" onChange={myHandle}/>
            </nav>

        </>
    )
}
export default List;
