import { useState } from "react";


const Search=({parHandle, parData})=>{

    // const [dataSearch, setDatasearch]=useState('')
    const handleSearch=(e)=>{
        let newVar=e.target.value
        parHandle(newVar)
    }


    return(

        <>
        <p>hello</p>
        <input type="text" value={parData} onChange={handleSearch} />
        <br />
        <p>this page : {parData}</p>

        
        </>
    )
}

export default Search;