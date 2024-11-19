import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CompaniesIndex from "../Pages/Companies/Index";
import UsersIndex from "../Pages/Users/Index";
import HomeIndex from "../Pages/Home/Index.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/dashboard" element={<CompaniesIndex />} />
                <Route path="/users" element={<UsersIndex />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
