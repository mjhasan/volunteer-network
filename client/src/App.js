import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
export const userContext = createContext()

function App() {
  const [user, setUser] = useState([]);
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
