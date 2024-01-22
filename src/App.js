import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
  Link
} from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import { createBrowserHistory } from 'history';
import './App.css';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
          <Route path="/">
            <MainLayout />
          </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
