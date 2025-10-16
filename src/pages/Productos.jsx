import { Row, Col } from "react-bootstrap";
import ProductosCarrito from "../components/ProductosCarrito";

const Productos = ({ productos, agregarAlCarrito }) => {
	return (
		<Row xs={1} sm={2} md={3} lg={4} className="g-4">
			{productos.map((producto) => (
				<Col key={producto.id}>
					<ProductosCarrito
						producto={producto}
						agregarAlCarrito={agregarAlCarrito}
					/>
				</Col>
			))}
		</Row>
	);
};

export default Productos;
