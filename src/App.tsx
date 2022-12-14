import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import LoginPage from "./components/pages/Login";
import ProductPage from "./components/pages/Products";
import routesName from "./routes/enum.routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path={routesName.PRODUCT} element={<ProductPage />} />
        <Route
          path={routesName.PRODUCT_DETAILT}
          element={<div>Product detail</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
