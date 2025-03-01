
import Search from "./Search";
import Checkbox from "./Checkbox";
const SearchBar =({onShowCheckBoxApp,onSetShowCheckBoxApp})=>{


    return(

        <>
        <Search />
        <Checkbox
         onShowCheckBox={onShowCheckBoxApp}
         onSetShowCheckBox={onSetShowCheckBoxApp}/>
        </>
    )
}
export default SearchBar;