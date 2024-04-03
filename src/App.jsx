
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
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
