import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

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
      <div>
        <Link to="/todos">Todo</Link>
      </div>
      <div>
        <Link to="/albums">Album</Link>
      </div>

      <Switch>
        <Redirect from="/" to="/todos" exact />

        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
