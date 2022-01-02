import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
import Header from './components/Header';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = { _limit: 10 };
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/" to="/counter" exact />

        <Route path="/counter" component={CounterFeature} />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
