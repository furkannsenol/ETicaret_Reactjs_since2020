import logo from "./logo.svg";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Information from "./pages/Information"; //
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import Basket from "./pages/Basket";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import AddressDetail from "./pages/AddressDetail";
import AddCreditCard from "./pages/AddCreditCard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/Homepage" component={Homepage} exact>
            <Homepage />
          </Route>
          <Route path="/Login" component={Login} exact></Route>
          <Route path="/Register" component={Register} exact></Route>
          <Route path="/Contact" component={Contact} exact></Route>
          <Route
            path="/ForgotPassword"
            component={ForgotPassword}
            exact
          ></Route>
          <Route path="/Basket/:urun_Id?" component={Basket} exact></Route>
          <Route path="/Products" component={Products} exact></Route>
          <Route
            path="/ProductView/:urun_Id"
            component={ProductView}
            exact
          ></Route>
          <Route path="/Profile" component={Profile} exact></Route>
          <Route
            path="/AddressDetail/:adres_Uye_Id"
            component={AddressDetail}
            exact
          ></Route>
          <Route path="/AddCreditCard" component={AddCreditCard} exact></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
