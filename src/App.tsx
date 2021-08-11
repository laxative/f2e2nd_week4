import routes from './router/Router';
import './App.scss';
import './App-desktop.scss';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
