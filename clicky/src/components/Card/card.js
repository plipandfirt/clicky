import React from "react";
import Styled from "styled-components";

const Card = props => (
    <CardDiv className='grow' onClick={() => props.clickCount(props.id)}>
        
            <img alt= {props.name} src={props.image} />
    </CardDiv>
);

const CardDiv = Styled.div `
        width: 150px;
        height:auto;
        margin:auto;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background-color: whitesmoke;
        
        &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .grow{
            transition: .5s ease;
          }
            
        &:hover{
            -webkit-transform: scale(1.07);
            -ms-transform: scale(1.07);
            transform: scale(1.07);
            transition: .5s ease;
        }
        
        img{
            width:150px;
            height:150px;
            margin:auto;
            image-rendering:pixelated;
            vertical-align:middle;
        }`;


export default Card;