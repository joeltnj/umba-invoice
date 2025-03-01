import { useState,useEffect  } from "react"
import InputLogin from "./InputLogin"



const ConnexionManager = () => {


    const [dataMail, setDataMail] = useState('')
    const [dataPass, setDataPass] = useState('')


    useEffect(() => {
        console.log("Updated dataMail:", dataMail);
        console.log("Updated dataPass:", dataPass);
    }, [dataMail, dataPass]); // Déclenché après chaque mise à jour de dataMail ou dataPass



    const handleFormData = (e) => {
        e.preventDefault()
        // const formData = new FormData(document.getElementById('form'))

        // const email = formData.get('mail')
        // const password = formData.get('password')
        setDataMail('')
        setDataPass('')
        console.log(dataMail, dataPass);
    }

    return (
        <>
            <h1>ConnexionManager Page</h1>
            <InputLogin handleFormData={handleFormData} dataMail={dataMail} dataPass={dataPass} setDataMail={setDataMail} setDataPass={setDataPass} />
        </>
    )
}

export default ConnexionManager