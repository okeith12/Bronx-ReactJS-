
import './App.css';
import { Route, Switch, useLocation} from 'react-router-dom';
import Home from './pages';
import Gallery1 from './pages/gallery';
import About from './pages/about';
import {AnimatePresence} from 'framer-motion';

function App() {
  let location = useLocation();
  return (
    <> 
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/gallery" component={Gallery1} exact/>
      </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
