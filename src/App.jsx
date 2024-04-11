import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./components/Layout/Footer";
import { ProductListFilters } from "./pages/Product/ProductList";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        {/* <AllRoutes /> */}
        <ProductListFilters />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
