import logo from './logo.svg';
import './App.css';
import TodoListScreen from './screens/TodoList';
import HistoryScreen from './screens/History';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/TodoListLocalStorage/" component={TodoListScreen} />
        <Route
          exact
          path="/TodoListLocalStorage/history"
          component={HistoryScreen}
        />
        <Redirect to="/TodoListLocalStorage/" />
      </Switch>
    </div>
  );
}

export default App;
