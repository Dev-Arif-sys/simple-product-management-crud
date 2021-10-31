import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Addproduct from './components/Add Product/Addproduct';
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/product'>
          <Product></Product>
        </Route>
        <Route path='/addproduct'> 
          <Addproduct></Addproduct>
        </Route>
        <Route path='/users/:id'>
          <UpdateProduct></UpdateProduct>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
