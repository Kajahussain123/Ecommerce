import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { searchProduct } from '../redux/productSlice';



function Header() {
  const cartArray=useSelector(state=>state.cart)

  const dispatch=useDispatch()



  return (
    <div>
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
<Link to={'/'} style={{textDecoration:'none'}}>
        <img
                src="https://i.postimg.cc/rwr5cwtB/IMG-Pyt-Bq-Dfirm-TK-removebg-preview.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt=""
              />
          <Navbar.Brand href="#home"><b>Trend Mart</b></Navbar.Brand>
  
</Link>        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>dispatch(searchProduct(e.target.value))}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
<Link style={{textDecoration:'none'}} to={'/Cart'}>
              <Nav.Link href="#deets"><i class="fa-solid fa-cart-shopping fs-3"></i><b>{cartArray.length}</b></Nav.Link>
  
</Link>       
<Link style={{textDecoration:'none'}} to={'/wishlist'}>
       <Nav.Link eventKey={2} href="#memes">
              <i class="fa-solid fa-heart fs-3"></i>
              </Nav.Link>
  
</Link>          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header