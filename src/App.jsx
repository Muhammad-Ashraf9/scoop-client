import { BrowserRouter as Router , Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import { HomePage } from "./Pages/Home/";
import { ProductList } from "./Pages/Product";
import { AllRoutes } from "./routes/AllRoutes";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
     <main>
      <AllRoutes />
     </main>
     <Footer/>
    </div>
  );
}

export default App;
