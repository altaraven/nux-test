import './bootstrap';
import ReactDOM from 'react-dom/client';
import App from "./entrypoint/app";
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('app')).render(
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <App />
    </SnackbarProvider>
);
