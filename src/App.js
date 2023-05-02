import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Component/Navbar";
import { Provider } from "react-redux";
import store from "./Store/store"
function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
