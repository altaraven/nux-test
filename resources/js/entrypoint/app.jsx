import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeIndex from "../pages/home";
import GameIndex from "../pages/game";
// import NoMatch from '../pages/error/no-match'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/game/:hash" element={<GameIndex />} />

                {/*<Route component={NoMatch}/>*/}
            </Routes>
        </BrowserRouter>
    );
}
export default App;
