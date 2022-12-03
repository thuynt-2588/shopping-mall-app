import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Home";
import LoginPage from "./components/pages/Login";
import ProductDetail from "./components/pages/Products/Detail";
import ProductListPage from "./components/pages/Products/List";
import routesName from "./routes/enum.routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path={routesName.PRODUCT} element={<ProductListPage />} />
        <Route path={routesName.PRODUCT_DETAILT} element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
