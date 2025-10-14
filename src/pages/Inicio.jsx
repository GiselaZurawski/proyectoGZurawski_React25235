import Productos from "./Productos";
import { Container } from "react-bootstrap";

const Inicio = () => {
	return (
		<Container>
			<h3 className="text-center mt-3" style={{ color: "#5c4473ff" }}>
				Productos:
			</h3>
			<Productos />
		</Container>
	);
};

export default Inicio;
