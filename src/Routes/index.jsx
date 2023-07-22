import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { default as HomeScreen } from "../Pages/Home/index";
import { default as SearchButton } from "../Pages/Search/index";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search/:name/:page" element={<SearchButton />} />
      </Routes>
    </Router>
  );
};
