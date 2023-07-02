import { useContext } from "react";
import { ThemeContext } from "./contexts";
import { ThemeContextInterface } from "./types";

function App() {
    const { darkTheme, toggleTheme } = useContext(
        ThemeContext
    ) as ThemeContextInterface;

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-950 text-white">
            <div className="rounded-md bg-white p-8 text-black">
                <h1 className="text-3xl">
                    Theme {darkTheme ? "dark" : "light"}
                </h1>
                <button
                    onClick={toggleTheme}
                    className="mt-2 w-full rounded-none bg-slate-600 p-2 text-2xl text-white transition-all duration-300 ease-in-out hover:rounded-lg"
                >
                    Toggle
                </button>
            </div>
        </div>
    );
}

export default App;
