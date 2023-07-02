import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </>
);
