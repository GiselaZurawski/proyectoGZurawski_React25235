import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductosCarrito from "../components/ProductosCarrito";
import { Link } from "react-router-dom";

const Productos = ({ agregarProductos }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const url = "https://fakestoreapi.com/products";

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
				setLoading(false);
			})
			.catch((error) => {
				setError("error al cargar productos");
				setLoading(false);
			}, []);
	});

	const handleAgregarAlCarrito = (producto) => {
		alert(`producto ${producto.title} agregado al carrito`);
	};

	if (loading) return <div>Loading...</div>;

	if (error) return <p> {error}</p>;

	return (
		<Container className="my-4">
			<Row>
				{productos.map((producto) => (
					<Col xs={12} sm={6} md={4} lg={3} key={producto.id} className="mb-4">
						<ProductosCarrito
							producto={producto}
							agregarAlCarrito={handleAgregarAlCarrito}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
	{
	}
};
export default Productos;
