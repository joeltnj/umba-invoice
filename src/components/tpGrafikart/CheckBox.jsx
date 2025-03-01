

const CheckBox = ({ checked, onChange, label, id }) => {


    return (
        <>
            <input type="checkbox"
                name=""
                id={id}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}

            />
            <label htmlFor={id}>{label}</label>

        </>
    )
}
export default CheckBox;