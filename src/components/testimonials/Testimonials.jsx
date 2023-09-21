import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './testimonials.css'
import testimonialImg from '../../assets/images/review1.png'
import Slider from 'react-slick'

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autplaySpeed: 3000
    }

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' sm='12' md='12' className='m-auto'>

                        <div className="slider__wrapper d-flex align-items-center gap-5">
                            <div className="slider__content w-50">
                                <h2 className='mb-4'>O que nossos clientes estão achando?</h2>
                                <Slider {...settings}>
                                    <div>
                                        <div className="single__testimonial">
                                            <p className="review__content">
                                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum ipsa expedita reprehenderit ea obcaecati quisquam, optio quidem numquam praesentium!"
                                            </p>

                                            <h6>Thiago H.</h6>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single__testimonial">
                                            <p className="review__content">
                                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, soluta amet? Aliquam inventore exercitationem magnam?"                                </p>

                                            <h6>David W.</h6>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                            <div className="slider__img w-50">
                                <img src={testimonialImg} alt="" className='w-100' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>)
}

export default Testimonials