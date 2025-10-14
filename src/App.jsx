//import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Login from "./components/Login";
import Productos from "./pages/Productos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductoDetalle from "./components/ProductoDetalle";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/Productos" element={<Productos />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Productos/:id" element={<ProductoDetalle />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
