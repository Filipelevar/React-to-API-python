import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { default as HomeScreen } from "../Pages/Home/index";
import { default as SearchButton } from "../Pages/Loading/index";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/loading" element={<SearchButton />} />
      </Routes>
    </Router>
  );
};
