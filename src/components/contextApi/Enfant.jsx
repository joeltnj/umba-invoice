import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";



const Enfant = () => {
    const { theme, setTheme } = useContext(ThemeContext)


    return (
        <>
            <p>Theme {theme}</p>
            <button type="button" onClick={() => { setTheme(theme === 'clair' ? 'sombre' : 'clair') }}>change</button>
        </>
    )
}
export default Enfant;


