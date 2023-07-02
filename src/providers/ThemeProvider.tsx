import { useState } from "react";
import { ThemeContext } from "../contexts";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setDarkTheme((curr) => !curr);
    };

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
