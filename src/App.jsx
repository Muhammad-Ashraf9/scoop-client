import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components/Layout/Footer";
import { Navbar } from "./components/Layout/Navbar";

function App() {
  return (
    <div>
      {/* {<Navbar />} */}
      <main>{<AllRoutes />}</main>
      {<Footer />}
    </div>
  );
}

export default App;
