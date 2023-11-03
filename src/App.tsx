import { Nav } from "./components";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <section className=" bg-black padding-x padding-t mt-8 pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
