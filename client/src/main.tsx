import React from "react";
import ReactDOM from "react-dom/client";
import RootCtx from "./providers/RootCtx";
import SoxCtx from "./providers/SoxCtx";
import App from "./App.tsx";
import "./assets/css/_index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RootCtx>
            <SoxCtx>
                <App />
            </SoxCtx>
        </RootCtx>
    </React.StrictMode>
);
