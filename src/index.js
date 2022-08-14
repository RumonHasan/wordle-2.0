import ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const centralContainer = document.querySelector('#root');
const primaryRoot = ReactDOMClient.createRoot(centralContainer);

primaryRoot.render(
<BrowserRouter>
    <App/>
</BrowserRouter>
)