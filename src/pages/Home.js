import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productSlice';




function Home() {

  const dispatch=useDispatch()

  const {allProducts,loading,error}=useSelector((state)=>state.productSlice)

  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  return (
    <div><Row>
        <Col lg={6}>
            <img className='w-100'src='https://i.postimg.cc/hG7W6W86/happy-beautiful-couple-posing-with-shopping-bags-violet-min-removebg-preview.png' alt=''/>


        </Col>
        <Col className='mt-5 p-5'>
            <h1>Shop the world from the comfort of your home.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, impedit, officiis soluta placeat laborum possimus totam voluptates aspernatur consectetur nobis dignissimos! Provident corporis numquam voluptas sapiente porro laborum quidem eaque.</p>
        </Col>

    </Row>

    <Row className='p-5'>
    {
      allProducts.length>0? allProducts.map(i=>(
  <Col lg={3} md={4} sm={6} className='p-5' >
        
      <Card id='cd1' style={{ width: '18rem ' }}>
        <Card.Img variant="top" style={{ height:"250px"}} src={i.image}/>
        <Card.Body>
          <Card.Title><h3>{i.title.length>30?i.title.slice(0,30)+"...":i.title}</h3></Card.Title>
          <Card.Text>
            <h4 className='text-center'>{i.price} Rs</h4>
            <h4>Rating :{i.rating.rate}</h4>
          </Card.Text>
          <Button onClick={()=>dispatch(addToCart(i))} className='ms-3 bg-black'><i class="fa-solid fa-cart-shopping fs-3"></i></Button>
          <Button onClick={()=>dispatch(addToWishlist(i))} className='ms-3 bg-black' >  <i class="fa-solid fa-heart fs-3"></i></Button>
  
        </Card.Body>
      </Card>
  </Col>
  )): <div className='text-center p-5 mt-5'>
    <i class="fa-solid fa-spinner fa-spin-pulse fa-3x"></i>
  </div>
  
}
    </Row>
       
    </div>
  )
}

export default Home