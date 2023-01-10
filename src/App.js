import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Shop from './routes/shop/shop.component';
import { BasketProvider } from './context/basketContext';
import { Provider } from 'react-redux';
import { store } from './store'
import Hats from './routes/hats/hats.component';
import Jackets from './routes/jackets/jackets.component';
import Sneakers from './routes/sneakers/sneakers.component';
import Womens from './routes/womens/womens.component';
import Mens from './routes/mens/mens.component';


function App() {
  return (
    <Provider store={store}>
      <BasketProvider>
        <Routes>
          <Route path='/' element={<Navigation />}>
            {/* index üsttekinin path ile eşitle */}
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='hats' element={<Hats />} />
            <Route path='jackets' element={<Jackets />} />
            <Route path='sneakers' element={<Sneakers />} />
            <Route path='womens' element={<Womens />} />
            <Route path='mens' element={<Mens />} />
          </Route>
        </Routes>
      </BasketProvider>
    </Provider>
  );
}
export default App;
