import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
	return (
		<footer className="bg-dark text-white text-center py-4">
			<Container>
				<Row>
					<Col md={6}>
						<p className="mb-0">Poyecto de Gisela Zurawski</p>
						<p className="mb-0" style={{ fontSize: "0.7rem" }}>
							Talento Tech comision: 25235
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
