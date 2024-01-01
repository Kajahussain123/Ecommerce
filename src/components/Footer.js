import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div className=' p-5 bg-body-secondary'>
      <Row>
      <Col lg={3} md={6} sm={12} xs={12}>
        <img 
              src="https://i.postimg.cc/rwr5cwtB/IMG-Pyt-Bq-Dfirm-TK-removebg-preview.png"
              alt=""
        width='40'
        height='40'
        className='d-inline-block alighn-top me-1 mt-2' 
        />{' '}
        <b className='fs-5'>TrendMart</b>
        <h5 className='mt-2 p-2'>Designed and built with all the love in the world 
        by the bootstrap teamusmod tempor incnia loin up the react</h5>
        </Col>
        <Col lg={3} md={6} sm={12} xs={12} className='ps-3'>
        <h4>Links</h4>
        <a className='fs-5' style={{textDecoration:'none',color:'red'}} href="">Landing Page</a><br />
        <a className='fs-5' style={{textDecoration:'none',color:'red'}} href="">Home</a><br />
        <a className='fs-5' style={{textDecoration:'none',color:'red'}} href="">Watch History</a>

        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
        <h4>Guides</h4>
        <h5>react</h5>
        <h5>react bootstrap</h5>
        <h5>routing</h5>
                <h5>redux</h5>

        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
        <h4 className='text-daanger'>Contact Us</h4>
        <input type="text" className='form-control w-75' placeholder='enter email'/>
        <button className='btn btn-danger w-75 mt-3'>Send</button> <br />
        <i class="fa-brands fa-instagram text-black fa-2x mt-3"></i>   
        <i class="fa-brands fa-facebook text-black fa-2x mt-3 ms-5"></i>      
        <i class="fa-brands fa-twitter text-black fa-2x mt-3 ms-5"></i>      
        <i class="fa-brands fa-github text-black fa-2x mt-3 ms-5"></i>      

          </Col>
      </Row>
    </div>
  )
}

export default Footer