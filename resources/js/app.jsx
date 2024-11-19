import './bootstrap';
import ReactDOM from 'react-dom/client';
import HelloWorld from './components/HelloWorld';
import CompaniesIndex from "./Pages/Companies/Index";
import App from "./Layouts/App";

ReactDOM.createRoot(document.getElementById('app')).render(
    // <HelloWorld />
    <App />
);
