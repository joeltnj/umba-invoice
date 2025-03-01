
// Form.jsx
import React, { useEffect, useState } from "react";


const Form = () => {
    const [data, setData] = useState({ name: '', age: '' })
    const [userData, setUserData] = useState([])

    const handleData = (e) => {

        e.preventDefault()
        const formData = new FormData(e.target)
        const nom = formData.get('nom')
        const age = formData.get('age')
        setData({ nom, age })
        console.log(newArrray);
    }
    const array = ["moi", "toi", "lui"]
    const newArrray = array.filter((elt) => {
        return (array.includes("moi"))
    })

    useEffect(() => {
        async function getFetch(params) {

            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUserData(data)
            console.log(data);

        }
        getFetch()

    }, [])


    return (
        <>
            <p>nom:{data.nom}</p>
            <p>age:{data.age}</p>

            {userData.length > 0 ? (
                <nav>
                    <ul>
                        {userData.map((elt) => {
                            return <li key={elt.id}>{elt.username}</li>
                        })}
                    </ul>

                </nav>
            )
                : (<p>en cours de chargement</p>)}

            <form onSubmit={handleData}>
                <input type="text" name="nom" id="" />
                <input type="text" name="age" id="" />
                <input type="submit" value="Send" />
            </form>


        </>
    )
};

export default Form;
