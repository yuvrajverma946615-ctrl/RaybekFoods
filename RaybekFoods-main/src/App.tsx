/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import FoodService from "./pages/FoodService";
import Retail from "./pages/Retail";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="food-service" element={<FoodService />} />
          <Route path="retail" element={<Retail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
