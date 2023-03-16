import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout.jsx'
import { CoursesPage } from './pages/CoursesPage.jsx';
import { SinglePage } from './pages/SinglePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';
import { NotFoundPage } from './pages/NotFoundPage.jsx';
import { ThemeContext } from './hoc/ThemeProvider.jsx';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<CoursesPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='courses/:id' element={<SinglePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
