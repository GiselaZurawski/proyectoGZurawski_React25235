import { ListGroup, Button, Image } from "react-bootstrap";

const Carrito = ({ carrito, eliminar, vaciarCarrito }) => {
	const total = carrito.reduce(
		(acum, item) => acum + item.price * item.cantidad,
		0
	);

	return (
		<div className="mt-5">
			<h4>Carrito de Compras</h4>

			{carrito.length === 0 ? (
				<p>carrito vacio</p>
			) : (
				<>
					<ListGroup>
						{carrito.map((item) => (
							<ListGroup.Item
								key={item.id}
								className="d-flex justify-content-between align-items-center">
								<div className="d-flex align-items gap-4">
									<Image
										src={item.image}
										alt={item.title}
										width={50}
										style={{ objectFit: "contain" }}
									/>
								</div>
								<div>
									{item.cantidad}unid. $
									{(item.price * item.cantidad).toFixed(2)}
								</div>

								<Button
									variant="danger"
									size="sm"
									onClick={() => eliminar(item.id)}>
									Eliminar
								</Button>
							</ListGroup.Item>
						))}
					</ListGroup>

					<div className="mt-3 d-flex justify-content-between align-items-center">
						<h5>Total: ${total.toFixed(2)}</h5>
						<Button variant="outline-danger" onClick={vaciarCarrito}>
							vaciar carrito
						</Button>
					</div>
				</>
			)}
		</div>
	);
};
export default Carrito;
