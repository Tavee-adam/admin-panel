import React from 'react';
import './App.scss';
import Topbar from './components/topbar/Topbar';
import SideBar from './components/sidebar/SideBar';
import Home from './pages/home/Home';
import { Switch, Route } from 'react-router-dom';
import UserLists from './pages/userList/UserLists';
import UserPage from './pages/userPage/UserPage';
import NewUser from './pages/newUsers/NewUser';
import ProductLists from './pages/productList/ProductLists';
import Product from './pages/projects/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  // const [expand, setExpand] = useState({ class: 'red', isSlide: false });

  return (
    <div className="app">
      <Topbar />
      <div className="containers">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserLists />
          </Route>
          <Route path="/user/:userId">
            <UserPage />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductLists />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
