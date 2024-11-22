import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeIndex from "../pages/home";
import GameIndex from "../pages/game";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/game/:hash" element={<GameIndex />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
