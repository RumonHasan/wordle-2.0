import ReactDOMClient from 'react-dom/client';
import App from './App';

const centralContainer = document.querySelector('#root');
const primaryRoot = ReactDOMClient.createRoot(centralContainer);

primaryRoot.render(<App/>)