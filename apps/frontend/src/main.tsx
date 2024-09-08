import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log("Working")
root.render(
  <StrictMode>
      <App />
    {/* <BrowserRouter>
    </BrowserRouter> */}
  </StrictMode>
);
