import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
//import logo from "./assets/Img1.jpg";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
