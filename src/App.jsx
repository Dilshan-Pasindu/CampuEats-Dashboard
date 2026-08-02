import { Routes, Route, NavLink } from "react-router-dom";
import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <main className="dashboard-content">
        <h1 className="dashboard-title">CampusEats Dashboard</h1>
        <div className="dashboard-card">
          <nav>
            <NavLink to="/" end>🍽 Menu</NavLink>
            <NavLink to="/order">🛒 Place Order</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/dish/:id" element={<DishDetailPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="*" element={<p>404 — Page not found</p>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;