import routes from './router/Router';
import './App.scss';
import './App-desktop.scss';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
