import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import Welcome from './Welcome';
import Product from  './scenes/Products/ProductList'
import Cart from './scenes/Cart/CartList'
import Eqipment from './scenes/Gymequipment/Index';
import Nutritionist from './scenes/Nutritionist/Nutritionist';
import Package from './scenes/Package/Package';
import Invoice from './scenes/invoice/Invoice';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
     <Routes>
      <Route path="/" exact element={<HomeScreen/>}/>
      <Route path="/package" exact element={<Package/>}/>
      <Route path="/nutritionist" exact element={<Nutritionist/>}/>
      <Route path="/equipment" exact element={<Eqipment/>}/>
      <Route path="/welcome" exact element={<Welcome/>}/>
      <Route path="/products" exact element={<Product/>}/>
      <Route path="/cart" exact element={<Cart/>}/>
      <Route path="/invoice" exact element={<Invoice/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
