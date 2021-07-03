
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import Gallery1 from './pages/gallery';
import About from './pages/about';


function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}> 
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/gallery" component={Gallery1} exact/>
      </Switch>
    </Router>
  );
}

export default App;
