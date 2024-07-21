import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppServices from './components/services';
import AppWorks from './components/works';


function App() {
  return (
    <div className="App">
     <header id="header">
      <AppHeader />
     </header>
     <main>
      <AppHero />
      <AppAbout />
      <AppServices />
      <AppWorks />
     </main>
    </div>
  );
}

export default App;
