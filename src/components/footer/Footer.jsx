import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './footer.css'

const footerQuickLinks = [
    {
        display: 'Terms & Conditions',
        url: '#'
    },
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Return & Refund',
        url: '#'
    },
    {
        display: 'Payment Method',
        url: '#'
    }
]

const footerLinks = [
    {
        display: 'About us',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <Container>
                    <Row className='footer__row'>
                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                Quick Links
                            </h5>

                            <ListGroup>
                                {footerQuickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className='link__item'>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">Info Links</h5>

                            <ListGroup>
                                {footerLinks.map((item, index) => (
                                    <ListGroupItem key={index} className='link__item'>
                                        <a href={item.url}>{item.display}</a>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">Contact</h5>

                            <ListGroup>
                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i class="ri-map-pin-line"></i> Minas Gerais, Brasil{" "}
                                </ListGroupItem>

                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i class="ri-mail-line"></i> example@gmail.com{" "}
                                </ListGroupItem>

                                <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                    <i class="ri-phone-line"></i> +00 00000-0000
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <p>copyright 2023, developed by ******. All rights reserve</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer >
    )
}

export default Footer