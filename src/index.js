import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './hoc/ThemeProvider'
import { CoursesProvider } from './hoc/CoursesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider> 
      <CoursesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CoursesProvider>     
    </ThemeProvider>
  </React.StrictMode>
);
