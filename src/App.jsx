import SelectWallet from "./pages/SelectWallet";
import ImportWallet from "./pages/ImportWallet";
import LoadingPage from "./pages/Loading";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<LoadingPage />} />
          <Route path="select" element={<SelectWallet />} />
          <Route path="import" element={<ImportWallet />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  );
}
