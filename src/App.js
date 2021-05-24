import './App.css';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom'

const HatsPage = () => {
  return (
    <div>
      <h2>Hello hats page</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop/hats' component={HatsPage} />

      </Switch>
    </div>
  );
}

export default App;
