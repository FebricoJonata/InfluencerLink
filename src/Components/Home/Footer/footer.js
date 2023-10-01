import {Button,Row,Col,Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import "./sfooter.css"

function Footer(){
    return(
        <div>
            <h2>shibal</h2>
            <Container fluid className='containerFooter'>
                <Row>
                    {/* ITEM KIRI */}
                    <Col xs={7} className='kolomKiri'>
                        <h3>1of2</h3>
                        <h3>2of2</h3>
                    </Col>

                    {/* ITEM KANAN */}
                    <Col className='kolomKanan'>
                        <h3>1of3</h3>
                        <h3>2of3</h3>
                        <h3>3of3</h3>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;