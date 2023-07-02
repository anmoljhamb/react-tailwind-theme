import { useEffect, useState } from "react";
import { ThemeContext } from "../contexts";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    const toggleTheme = () => {
        setDarkTheme((curr) => !curr);
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (!currentTheme) {
            if (
                window.matchMedia &&
                window.matchMedia("prefers-color-scheme: dark)")
            ) {
                setDarkTheme(true);
            }
        } else {
            setDarkTheme(currentTheme === "dark");
        }
    }, []);

    useEffect(() => {
        document.body.className = darkTheme ? "theme-dark" : "theme-light";
        localStorage.setItem("theme", darkTheme ? "dark" : "light");
    }, [darkTheme]);

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
