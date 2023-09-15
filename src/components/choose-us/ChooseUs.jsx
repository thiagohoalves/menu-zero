import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './choose-us.css'
import pastaImg from '../../assets/images/pasta.png'

const ChooseUs = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={pastaImg} alt="" className='w-100' />
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="choose__content">
                            <h4>Quem somos?</h4>
                            <h2>Dê uma olhada nos benefícios que temos para você!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea provident impedit reiciendis nisi inventore.</p>

                        </div>

                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span>
                                        <i class="ri-e-bike-2-line"></i>
                                    </span>
                                    <h6>Entrega grátis</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className="single__feature">
                                    <span className='feature__icon-2'>
                                        <i class="ri-money-dollar-circle-line"></i>
                                    </span>
                                    <h6>Cashback</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>

                            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                                <div className="single__feature">
                                    <span className='feature__icon-3'>
                                        <i class="ri-bank-card-line"></i>
                                    </span>
                                    <h6>Pagamento em cartão</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>

                                <div className="single__feature">
                                    <span className='feature__icon-4'>
                                        <i class="ri-chat-1-line"></i>
                                    </span>
                                    <h6>Atendimento por chat</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ChooseUs