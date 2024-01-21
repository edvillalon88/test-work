import {
  BrowserRouter as Router,
  Switch,
  Route,
  useNavigate,
  Link
} from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <MainLayout />
          </Route>
      </Switch>

    </Router>
    
  );
}

export default App;
