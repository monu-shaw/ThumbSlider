import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import ThumbSlider from './App';
import Main from './class';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
