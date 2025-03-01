import { useState } from "react";


const Checkbox = ({ onShowCheckBox, onSetShowCheckBox }) => {

    // const [check, setCheck] = useState(false)



    return (

        <>
            <input
                type="checkbox"
                checked={onShowCheckBox}
                onChange={(e) => onSetShowCheckBox(e.target.checked)} />
        </>
    )
}
export default Checkbox;