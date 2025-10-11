//import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Productos from "./components/Productos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/Productos" element={<Productos />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
