import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CartFeature from './features/Cart';
import CounterFeature from './features/Counter';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/" to="/counter" exact />

        <Route path="/counter" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
