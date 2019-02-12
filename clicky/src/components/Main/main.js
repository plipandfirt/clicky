import React from "react";
import Styled from "styled-components";

const Main = () => (
    <MainDiv>
        <h2>One click on an image will earn you a point.   Get all 12 and you Win!!!</h2>
        <h2>Careful, if you click on any more than once and it's Game Over!</h2>
        <h1>Click an image to begin the Game</h1>
    </MainDiv>
);

const MainDiv = Styled.div `
        margin-top: 0;
        background-image: url(bg-img.png);
        background-attachment: fixed;
        background-position: center bottom;
        min-height:300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
          
        h1, h2 {
            margin: 5;
            color: white;
            text-align:center;
            text-shadow: -1px 1px 5px rgba(100, 100, 100, 1);
            
        }`;


export default Main;