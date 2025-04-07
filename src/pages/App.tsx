import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import PortfolioPage from "@pages/PortfolioPage";

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:project" element={<PortfolioPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
