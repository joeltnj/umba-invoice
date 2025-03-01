import { createContext, useState } from "react";


const ThemeContext = createContext()



const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('clair')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext };
export default ThemeProvider;