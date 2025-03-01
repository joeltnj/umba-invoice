import { useState } from "react"



const InputLogin = ({ handleLogin, dataMail,dataPass, setDataMail, setDataPass }) => {


    return (

        <>

            <form id="form" onSubmit={handleLogin}>
                <label htmlFor="">email</label>
                <input type="text" name="mail" id="" value={dataMail} onChange={(e) => setDataMail(e.target.value)} />
                <br />
                <label htmlFor="">password</label>
                <input type="text" name="password" id="" value={dataPass} onChange={(e) => setDataPass(e.target.value)} />
                <br />
                <input type="submit" value="Loggin" />
            </form>
            
        </>
    )
}

export default InputLogin