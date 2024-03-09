import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { default as HomeScreen } from "../Pages/Home/index";
import { default as SearchButton } from "../Pages/Search/index";
import { default as Login } from "../Pages/Login/index"
import { default as Register } from "../Pages/Register/index"
import { AuthGuard, NoAuthGuard} from "../Guards/guards";


export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route element={<NoAuthGuard/>}> <Route path="/" element={<Login />} /></Route>
        <Route element={<AuthGuard/>} >
            <Route path="/homescreen" element={<HomeScreen />} /> 
            <Route path="/search/:name/:page" element={<SearchButton />} />
       </Route>
      </Routes>
    </Router>
  );
};



