import { Col, Container, Row } from 'react-bootstrap';
import shap from "../assets/img/about-shap.png"

export default function About() {
  const aboutcards = [

    {
      title: "1,000,000",
      des: "supply"
    },
    {
      title: "0%",
      des: "tex"
    },
    {
      title: "suck free",
      des: "tex"
    },
    {
      title: "tron (TRX)",
      des: "Chain"
    },
  ]
  return (
    <div className='about position-relative z-0'>
      <div className="about-img position-absolute z-n1 "><img src={shap} alt="" /></div>
      <Container>
        <Row className='justify-content-center '>
          <Col xs={12} >
            <div className="about-title text-center">
              <h2>Sun ingredients</h2>
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          {
            aboutcards.map((item, idx) => (
              <Col xs={12} md={6} className='card-item' key={idx}>
                <div className={`about-cards text-center ${idx == 0 ? " ms-md-auto card1" : ""}  ${idx == 1 ? "ms-md-auto" : ""} ${idx == 1 ? "margin115" : ""} ${idx == 3 ? "margin95" : ""} `}>
                  <p className='title fw-bold'>{item.title}</p>
                  <p className='des fw-bold'>{item.des}</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  ) 
}
