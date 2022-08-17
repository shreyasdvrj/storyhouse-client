import { Link } from 'react-router-dom';
import './bestsellersCarousel.css';
import React, {useState} from 'react'
import 'react-stacked-carousel/dist/index.css';
import CardExample from './cardexample';

    const BestsellersCarousel = () => {
        const [card, setCard] = useState(null);
        const onCardChange = (event) => {
          console.log("Card", event);
        }
    
    
    return (
      <div className="bs-head">
            <h1 className="bs-h1">Bestsellers</h1>
            <h2 className="bs-h2">Get all the best books</h2>
            <CardExample></CardExample>
            <Link to="/best">
            <button className="bs-b1">SHOP ALL</button>
            </Link>
            
      </div>
    );
    }

export default BestsellersCarousel;
