import './App.css';
import Header from './components/header/header';
import HomePage from './pages/home_page/home_page';
import ShopPage from './pages/shop_page/shop_page';
import AuthPage from './pages/auth/auth';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

 

// function OrderDetailPage(props) {
//   console.log(props)
//   return <h1>Order detail page {props.match.params.orderId}</h1>
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop'  component={ShopPage}/>
          <Route exact path='/auth' component={AuthPage}/>
          {/* <Route exact path='/order/:orderId' component={OrderDetailPage}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
