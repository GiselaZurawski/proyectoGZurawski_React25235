import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductosCarrito.css";

const ProductosCarrito = ({ producto, agregarAlCarrito }) => {
	return (
		<Card className="h-100 d-flex flex-column style-card">
			<Card.Img
				variant="top"
				src={producto.image}
				alt={producto.title}
				style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
			/>
			<Card.Body className="d-flex flex-column align-items-center">
				<Card.Title>{producto.title.slice(0, 20)}</Card.Title>
				<Card.Text>
					<strong>${producto.price}</strong>
				</Card.Text>
				<Link to={`/productos/${producto.id}`}>Detalles</Link>
				<Button
					variant="primary"
					className="mt-auto w-100"
					style={{ backgroundColor: "#8a6497ff", border: "none" }}
					onClick={() => agregarAlCarrito(producto)}>
					Agregar al Carrito
				</Button>
			</Card.Body>
		</Card>
	);
};

export default ProductosCarrito;
