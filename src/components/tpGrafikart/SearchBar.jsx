import CheckBox from "./CheckBox";
import Input from "./Input";


const SearchBar = ({ showStocked, setShowStocked, setSearch }) => {


    return (
        <>
            <p>Search bar</p>
            <Input
                onSearch={setSearch}
            />
            <CheckBox
                checked={showStocked}
                onChange={setShowStocked}
                label='Only stocked'
                id="checked"
            />


        </>
    )
}
export default SearchBar;