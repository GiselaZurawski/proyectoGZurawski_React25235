import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductoDetalle = () => {
	const { id } = useParams();
	const [producto, setProducto] = useState(null);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => setProducto(data))
			.catch((error) => console.error("Error al cargar el producto:", error));
	}, [id]);

	if (!producto) return <p>cargando...</p>;

	return (
		<div>
			<Card className="style-detail mx-auto">
				<Card.Img
					variant="top"
					src={producto.image}
					alt={producto.title}
					style={{
						height: "300px",
						objectFit: "contain",
						marginBottom: "1rem",
					}}
				/>
				<Card.Body className="d-flex flex-column">
					<Card.Title>{producto.title}</Card.Title>
					<Card.Text>{producto.description}</Card.Text>
					<Card.Text>
						<strong>Precio:</strong> ${producto.price}
					</Card.Text>
					<Link to="/" className="btn btn-outline-secondary mt-3">
						← Volver a la galería
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ProductoDetalle;
