import React from "react";
import Card from 'react-bootstrap/Card'
import './productCard.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


const ProductCard = ({props}) => {
    const price = String(props.price)
    return(
        <div className="product-card">
            <Card style={{ width: '15rem'}}>
                  <Card.Img variant="top" src={props.coverImg} style= {{'object-fit': 'cover'}}/>
                     <Card.Body>
                         <Card.Title>{props.title}</Card.Title>
                         <Card.Text style = {{'font-style':'italic'}}>
                             {props.author}
                         </Card.Text>
                         <Card.Text> &#8377;{price} </Card.Text>
                         <Link to={{pathname: "/product/"+props._id, state: {bookDetail: {props}}}}>
                         <Button variant="dark" size="sm">View</Button>
                         </Link>
                        
                     </Card.Body>
                 </Card>
        </div>
    )
}

export default ProductCard;
