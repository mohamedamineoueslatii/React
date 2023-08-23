import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; 
import AddBooks from './containers/AddBooks'
import SearchBooks from './containers/SearchBooks';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={ AddBooks }/>
            <Route path="/search" component= {SearchBooks}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
