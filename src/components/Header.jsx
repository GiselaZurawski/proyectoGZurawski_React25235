import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./styles.css";

const Header = () => {
	return (
		<Navbar expand="lg" style={{ backgroundColor: "black", height: "6rem" }}>
			<Container>
				<Navbar.Brand as={Link} to={"/"}>
					<img src="src/assets/img/logoGZ.png" style={{ width: "6rem" }} />
					<span className="text-white">Proyecto de Gisela Zurawski</span>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="toggle-blanco"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={Link} to={"/"} className="me-4 text-white">
							Inicio
						</Nav.Link>
						<Nav.Link as={Link} to={"/Login"} className="me-4 text-white">
							Login
						</Nav.Link>
						<Nav.Link
							as={Link}
							to={"/ProductosCarrito"}
							className="me-4 text-white">
							<i className="fas fa-shopping-cart"></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
