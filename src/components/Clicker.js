import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Clicker.css";


const Clicker = () => {

    let [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }

    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <Container className="cont my-5">
            <Row>
                <Col><h2>Clicker</h2></Col>
                <Col>
                <button className="btn btn-primary mx-3" onClick={sumar}>Sumar!</button>
                <button className="btn btn-primary" onClick={restar}>Restar!</button>
                </Col>
                <Col className="fs-3 text text-center badge bg-primary text-wrap" style={{width: "6rem"}} ><p>{counter}</p></Col>
            </Row>
        </Container>
    )
}

export default Clicker