import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppPricing from './components/pricing';
import AppServices from './components/services';
import AppWorks from './components/works';
import AppFooter from './components/footer';

import AppContact from './components/contact';


function App() {
  return (
    <div className="App">
     <header id="header">
      <AppHeader />
     </header>
     <main>
      <AppHero />
      <AppAbout />
      <AppPricing />
      <AppServices />
      <AppWorks />
      <AppContact />
     </main>
     <footer id="footer">
      <AppFooter />
     </footer>
    </div>
  );
}

export default App;
