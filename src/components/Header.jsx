import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar expand="md" style={{ backgroundColor: "black", height: "5rem" }}>
			<Container>
				<Navbar.Brand as={Link} to={"/"}>
					<img src="src/assets/img/logoGZ.png" style={{ width: "6rem" }} />
					<span className="text-white">Proyecto de Gisela Zurawski</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<Nav.Link as={Link} to={"/"} className="me-4 text-white">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to={"/Productos"} className="me-4 text-white">
							Productos
						</Nav.Link>
						<Nav.Link as={Link} to={"/Login"} className="me-4 text-white">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
