import logo from './logo.svg';
import './App.css';
import TodoListScreen from './screens/TodoList';
import HistoryScreen from './screens/History';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={TodoListScreen} />
        <Route exact path="/history" component={HistoryScreen} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
