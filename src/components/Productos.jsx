import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductosCarrito from "./ProductosCarrito";

const Productos = ({ category = null }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let url = "https://fakestoreapi.com/products";

		if (category)
			url = `https://fakestoreapi.com/products/category/${category}`;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
				setLoading(false);
			})
			.catch(
				(error) => {
					setError("error al cargar productos");
					setLoading(false);
				},
				[category]
			);
	});

	const handleAgregarAlCarrito = (producto) => {
		alert(`producto ${producto.title} agregado al carrito`);
	};

	if (loading) return <div>Loading...</div>;

	if (error) return <p> {error}</p>;

	return (
		<Row>
			{productos.map((producto) => (
				<Col md={4} key={producto.id} className="mb-4">
					<ProductosCarrito
						producto={producto}
						agregarAlCarrito={handleAgregarAlCarrito}
					/>
				</Col>
			))}
		</Row>
	);
};
export default Productos;
