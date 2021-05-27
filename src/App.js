import './App.css';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/shop/Shop';
import Header from './components/header/Header';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
