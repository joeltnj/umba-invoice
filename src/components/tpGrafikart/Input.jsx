

const Input = ({onSearch}) => {


    return (
        <>
            <input type="search"
                name=""
                id="c"
                onChange={(e) => onSearch(e.target.value)} />

        </>
    )
}
export default Input;