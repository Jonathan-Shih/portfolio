import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect, useState } from 'react';
import { useTheme } from './themeProvider.js';
import NavigationTopbar from './components/navbar/topnav.js';
import SideBar from './components/sidebar.js';
import Intro from './components/intro.js';
import AboutMe from './components/about-me.js';
import Experiences from './components/experiences/experiences.js';
import Contact from './components/contact.js';
import Gradient from './components/gradient.js';
import LogoAnimation from './assets/logoanimation.gif';
import Projects from './components/projects/projects-new.js';

function App() {
  const [loading, setLoading] = useState(true);

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const resetGif = () => {
    var img = document.getElementById('gif');
    var imageUrl = img.src;
    img.src = '';
    img.src = imageUrl.split('?')[0] + '?' + new Date().getTime();
  };

  useEffect(() => {
    setTimeout(() => {
      resetGif();
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <div className={`${theme} App`}>
      <div className={`${theme} overlay ${!loading && 'd-none'}`}>
        <img
          className={`logoani ${!loading && 'd-none'}`}
          id="gif"
          src={LogoAnimation}
          alt={'loading'}
        />
      </div>
      <NavigationTopbar theme={theme} toggleTheme={toggleTheme} />
      <div className="content-wrapper">
        <Intro theme={theme} toggleTheme={toggleTheme} />
        <AboutMe />
        <Experiences />
        <Projects />
        <Contact theme={theme} />
      </div>
      <SideBar />
      <Gradient />
    </div>
  );
}

export default App;
