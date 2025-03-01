

const Input = ({onChange}) => {


    return (
        <>
            <input type="search"
                name=""
                id="c"
                onChange={(e) => onChange(e.target.value)} />

        </>
    )
}
export default Input;