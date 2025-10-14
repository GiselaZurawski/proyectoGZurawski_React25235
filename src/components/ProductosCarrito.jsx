import { Card, Button } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";

const ProductosCarrito = ({ producto, agregarAlCarrito }) => {
	return (
		<Card className="style-card h-100 d-flex flex-column">
			<Card.Img
				variant="top"
				src={producto.image}
				alt={producto.title}
				className="card-img-top img-fluid"
				style={{ height: "200px", objectFit: "contain", padding: "1rem" }}
			/>

			<Card.Body className="d-flex flex-column align-items-center">
				<Card.Title>{producto.title.slice(0, 20)}</Card.Title>
				<Card.Text>
					<strong>${producto.price}</strong>
				</Card.Text>
				<Link to={`/productos/${producto.id}`}>Detalles</Link>
				<button
					variant="primary"
					className="mt-auto w-100 text-white"
					style={{
						backgroundColor: "#8a6497ff",
						borderRadius: "4px",
						border: "none",
					}}
					onClick={() => agregarAlCarrito(producto)}>
					Agregar al Carrito
				</button>
			</Card.Body>
		</Card>
	);
};

export default ProductosCarrito;
