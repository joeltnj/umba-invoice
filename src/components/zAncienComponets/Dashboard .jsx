import { useEffect, useState } from "react";


const Dashboard = ({ onIncr, onList ,onDecr,onSearch}) => {


    const [data, setData]=useState(null)

    const onSear = (e) => {
       
        onSearch(e.target.value)
    }

    useEffect(() => {
        async function fetchList() {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            // setData(data)
            onList(data)
        }
        fetchList();
    }, [])
    const handleSearch = (e) => {
        onSearch(e.target.value);
    };


    // const data = await fetchList();

    return (


        <>

            <nav>
                <h1>Dashboard</h1>
            </nav>
            <section>
                <button type="button" onClick={() => { onIncr() }}>Increment</button>
                <button type="button" onClick={() => { onDecr() }}>Decrement</button>
            </section>
            <aside>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    onSear(e)
                    }}>

                    <label htmlFor="">search</label>
                    <input type="search" name="" id="" onChange={handleSearch}/>
                    <input type="submit" value="valider" />

                </form>
            </aside>



        </>
    )
}
export default Dashboard;