import React from 'react';
import '../card/card.style.scss';
import {Image} from "react-bootstrap";
import src from "/Users/palaktank/React/Palak-Portfolio/portfolio/src/sample img.jpg";

export const Card = ({id,imageUrl,name,price}) => (
   <div className="card-container" key={id}>
        <Image alt="monster" src={imageUrl}></Image>
        <p>{name}</p>
        <p>{price}</p>
    </div>
);

export default Card;