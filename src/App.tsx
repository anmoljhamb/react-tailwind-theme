import { useContext } from "react";
import { ThemeContext } from "./contexts";
import { ThemeContextInterface } from "./types";

function App() {
    const { darkTheme, toggleTheme } = useContext(
        ThemeContext
    ) as ThemeContextInterface;

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-bgColor text-textColor">
            <div className="rounded-md bg-textColor p-8 text-bgColor">
                <h1 className="text-3xl">
                    Theme {darkTheme ? "dark" : "light"}
                </h1>
                <button
                    onClick={toggleTheme}
                    className="mt-2 w-full rounded-none bg-bgColor p-2 text-center text-2xl uppercase tracking-[3px] text-textColor transition-all duration-300 ease-in-out hover:rounded-lg"
                >
                    Toggle
                </button>
            </div>
        </div>
    );
}

export default App;
